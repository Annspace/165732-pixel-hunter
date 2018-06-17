// game2.js
import {render, changeScreen} from '../logic/utils';
import state from '../game-data/data';
import {greeting} from './greeting';
import {header} from '../parts/header';
import footer from '../parts/footer';
import {stats} from "../parts/stats";
import {checkAnswersgameTwo} from "../logic/checkAnswers";
import {gameThree} from "./game3";

export const gameTwo = (gameData) => {
  const content = `<div class="game">
    <p class="game__task"></p>
     <form class="game__content  game__content--wide">
      <div class="game__option">
        <img src= ${gameData[state.screenIndex].question.src} alt="Option 1" width="705" height="455">
        <label class="game__answer  game__answer--photo">
          <input name="question1" type="radio" value="photo">
          <span>Фото</span>
        </label>
        <label class="game__answer  game__answer--wide  game__answer--paint">
          <input name="question1" type="radio" value="paint">
          <span>Рисунок</span>
        </label>
      </div>
    </form>
    <div class="stats">
       ${stats(state.answers)}
    </div>
  </div>`;

  const article = `${header(state)}
     ${content}
       ${footer}`;
  const game2 = render(article);

  const gameAnswers = game2.querySelectorAll(`.game__answer`);

  for (let answer of gameAnswers) {
    answer.addEventListener(`change`, () => {
      const checkedAnswer = game2.querySelector(`input[name="question1"]:checked`).value;
      checkAnswersgameTwo(checkedAnswer, state);
      state.screenIndex++;
      if (state.screenIndex < 6) {
        changeScreen(gameTwo(gameData));
      } else {
        state.result.gameTwo.answers = state.answers.slice(3, 6 + 1);
        state.result.gameTwo.lives = state.lives;
        changeScreen(gameThree(gameData));
      }
    });
  }

  const backButton = game2.querySelector(`button.back`);
  backButton.addEventListener(`click`, () => {
    state.resetParams();
    changeScreen(greeting());
  });

  return game2;
};
