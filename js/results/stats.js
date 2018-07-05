import {pointsCounter} from "../logic/pointsCounter";
import {FAST_CORRECT_POINT, SLOW_CORRECT_POINT, CORRECT_POINT, LIVE_POINT, FAIL_POINT} from '../logic/pointsCounter';
const FAST_TIME = 10;
const SLOW_TIME = 20;
const ANSWERS_NUMBER = 10;

// десять вопросов, на те, которые еще нет ответа `unknown`
const fillAnswers = (answers) => {
  if (answers.length === ANSWERS_NUMBER) {
    return answers;
  } else {
    const answersCopy = answers.slice();

    let i = answersCopy.length;
    while (i < (ANSWERS_NUMBER)) {
      answersCopy.push(`unknown`);
      i++;
    }
    return answersCopy;
  }
};

const renderStat = (answersArray) => {
  const answersCopy = answersArray.slice();
  return answersCopy.map((answer) => {
    if (answer.correct && answer.time < FAST_TIME) {
      return `<li class="stats__result stats__result--fast"></li>`;
    } else if (answer.correct && answer.time > SLOW_TIME) {
      return `<li class="stats__result stats__result--slow"></li>`;
    } else if (answer.correct) {
      return `<li class="stats__result stats__result--correct"></li>`;
    } else if (answer === `unknown`) {
      return `<li class="stats__result stats__result--unknown"></li>`;
    } else {
      return `<li class="stats__result stats__result--wrong"></li>`;
    }
  }).join(` `);
};

const bonusLives = (lives) => {
  let points = 0;
  if (lives > 0) {
    points = lives * LIVE_POINT;
    return `<tr>
    <td></td>
    <td class="result__extra">Бонус за жизни:</td>
    <td class="result__extra">${lives}&nbsp;<span class="stats__result stats__result--alive"></span></td>
    <td class="result__points">×&nbsp;${LIVE_POINT}</td>
    <td class="result__total">${points}</td>
      </tr>`;
  }
  return ``;
};

const bonusSpeed = (answers) => {
  let points = 0;
  let speedAnswers = 0;
  answers.forEach((it) => {
    if (it.time < FAST_TIME) {
      points = points + FAST_CORRECT_POINT;
      speedAnswers++;
    }
  });

  if (points === 0) {
    return ``;
  } else {
    return `<tr>
        <td></td>
        <td class="result__extra">Бонус за скорость:</td>
        <td class="result__extra">${speedAnswers}&nbsp;<span class="stats__result stats__result--fast"></span></td>
        <td class="result__points">×&nbsp;${FAST_CORRECT_POINT}</td>
        <td class="result__total">${points}</td>
      </tr>`;
  }
};

const slowPenalty = (answers) => {
  let points = 0;
  let slowAnswers = 0;
  answers.forEach((it) => {
    if (it.time > SLOW_TIME) {
      points = points - SLOW_CORRECT_POINT;
      slowAnswers++;
    }
  });
  if (points < 0) {
    return `<tr>
        <td></td>
        <td class="result__extra">Штраф за медлительность:</td>
        <td class="result__extra">${slowAnswers}&nbsp;<span class="stats__result stats__result--slow"></span></td>
        <td class="result__points">×&nbsp;${SLOW_CORRECT_POINT}</td>
        <td class="result__total">${points}</td>
      </tr>`;
  } else {
    return ``;
  }
};

const firstResult = (answers) => {
  let points = 0;
  answers.forEach((it) => {
    if (it.correct) {
      points = points + CORRECT_POINT;
    }
  });
  return points;
};

export const stats = (answers) => {
  const filledAnswers = fillAnswers(answers);
  return renderStat(filledAnswers);
};

export const renderResult = (answers, lives, resultNumber) => {

  const answersCopy = answers.slice();

  if (pointsCounter(answers, lives) === FAIL_POINT) {
    return `
        <tr>
        <td class="result__number">${resultNumber}</td>
        <td>
          <ul class="stats">
            ${renderStat(answersCopy)}
          </ul>
        </td>
        <td class="result__total">${pointsCounter(answers, lives)}</td>
        <td class="result__total  result__total--final">fail</td>
        </tr>`;
  } else {
    return `<tr>
        <td class="result__number">${resultNumber}</td>
        <td colspan="2">
          <ul class="stats">
              ${renderStat(answersCopy)}
          </ul>
        </td>
        <td class="result__points">×&nbsp;${CORRECT_POINT}</td>
        <td class="result__total">${firstResult(answers)}</td>
      </tr>
      ${bonusSpeed(answers)}
      ${bonusLives(lives)}
      ${slowPenalty(answers)}
         <tr>
        <td colspan="5" class="result__total  result__total--final">${pointsCounter(answers, lives)}</td>
      </tr>`;
  }
};
