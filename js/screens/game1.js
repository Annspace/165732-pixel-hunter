// game1.js
import {render, changeScreen} from '../logic/utils';
import {greeting} from './greeting';
import {header} from "../parts/header";
import footer from "../parts/footer";
import state from '../game-data/data';
import {stats} from '../parts/stats';
import {checkAnswersGameOne} from "../logic/checkAnswers";
import {gameTwo} from "./game2";

export const gameOne = (gameData) => {
  const content = `<form class="game__content">
  <div class="game__option">
        <img src= "${gameData.gameOne[state.screenIndex].optionOne.src}" alt="Option 1" width="468" height="458">
        <label class="game__answer game__answer--photo">
          <input name="question1" type="radio" value="photo">
          <span>Фото</span>
        </label>
        <label class="game__answer game__answer--paint">
          <input name="question1" type="radio" value="paint">
          <span>Рисунок</span>
        </label>
      </div>
      <div class="game__option">
        <img src="${gameData.gameOne[state.screenIndex].optionTwo.src}" alt="Option 2" width="468" height="458">
        <label class="game__answer  game__answer--photo">
          <input name="question2" type="radio" value="photo">
          <span>Фото</span>
        </label>
        <label class="game__answer  game__answer--paint">
          <input name="question2" type="radio" value="paint">
          <span>Рисунок</span>
        </label>
      </div>
      </form>
    <div class="stats">
      ${stats(state.answers)}
    </div>`;

  const article = `${header(state)} 
  <div class="game">
     <p class="game__task">Угадайте для каждого изображения фото или рисунок?</p>
     ${content}
   </div>
       ${footer}`;

  const game1 = render(article);

  const gameForm = game1.querySelector(`.game__content`);
  const gameOption1 = game1.querySelectorAll(`.game__option`)[0];
  const gameOption2 = game1.querySelectorAll(`.game__option`)[1];
  let question1 = false;
  let question2 = false;

  gameOption1.addEventListener(`change`, () => {
    question1 = true;
  });
  gameOption2.addEventListener(`change`, () => {
    question2 = true;
  });

  gameForm.addEventListener(`change`, () => {
    if (question1 && question2) {
      const answer1 = game1.querySelector(`input[name="question1"]:checked`).value;
      const answer2 = game1.querySelector(`input[name="question2"]:checked`).value;
      checkAnswersGameOne(answer1, answer2, state);
      // индекс увеличивается, для того чтобы показать другие экраны
      // вызывает сама себя, но с другими вопросами
      state.screenIndex++;
      if (state.screenIndex < gameData.gameOne.length) {
        changeScreen(gameOne(gameData));
      } else {
        state.screenIndex = 0;
        changeScreen(gameTwo(gameData));
      }
    }
  });

  const backButton = game1.querySelector(`button.back`);
  backButton.addEventListener(`click`, () => {
    state.resetParams();
    changeScreen(greeting());
  });

  return game1;
};
