import {pointsCounter} from "../data/pointsCounter";
import {FAST_CORRECT_POINT, SLOW_CORRECT_POINT, LIVES, LIVE_POINT, FAIL_POINT, MEDIUM_TIME_POINT} from '../data/pointsCounter';
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
  return answersArray.map((answer) => {
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

export const stats = (answers) => {
  const filledAnswers = fillAnswers(answers);
  return renderStat(filledAnswers);
};

export const result = (answers, lives) => {

  const answersCopy = answers.slice();

  let answersStatistics = renderStat(answersCopy);

  if (pointsCounter(answers, lives) === FAIL_POINT) {
    return `
        <td>
          <ul class="stats">
            ${answersStatistics}
          </ul>
        </td>
        <td class="result__total"></td>
        <td class="result__total  result__total--final">fail</td>`;
  } else if (pointsCounter(answers, lives) === MEDIUM_TIME_POINT) {
    return `<h1>Победа!</h1>
    <table class="result__table">
      <tr>
        <td class="result__number">1.</td>
        <td colspan="2">
          <ul class="stats">
            ${answersStatistics}
          </ul>
        </td>
        <td class="result__points">×&nbsp;100</td>
        <td class="result__total">${pointsCounter(answers, lives)}</td>
      </tr>`;
  } else {
    return ``;
  }
};
