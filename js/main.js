'use strict';

(function () {
  const templates = document.querySelectorAll(`template`);
  const mainScreen = document.querySelector(`.central`);
  const LEFT_ARROW_KEY = 37;
  const RIGHT_ARROW_KEY = 39;
  let screens = [];
  let currentScreen = 0;

  for (let template of templates) {
    screens.push(template);
  }

  const showScreen = (screenNumber) => {
    if (screenNumber < screens.length) {
      // удаляем содержимое тега main
      while (mainScreen.firstChild) {
        mainScreen.removeChild(mainScreen.firstChild);
      }
      // screensArray перетирается appendChild, поэтому создаем копию
      let clonedScreen = screens[screenNumber].content.cloneNode(true);
      mainScreen.appendChild(clonedScreen);
    }
  };

  showScreen(0);
  const nextScreenHandler = () => {
    if (currentScreen < screens.length - 1) {
      currentScreen++;
      showScreen(currentScreen);
    }
    return currentScreen;
  };

  const prevScreenHandler = () => {
    if (currentScreen < screens.length && currentScreen > 0) {
      currentScreen--;
      showScreen(currentScreen);
    }
    return currentScreen;
  };

  const screenHandler = (e) => {
    if (e.keyCode === RIGHT_ARROW_KEY) {
      nextScreenHandler();
    } else if (e.keyCode === LEFT_ARROW_KEY) {
      prevScreenHandler();
    }
    return e;
  };

  document.body.insertAdjacentHTML(`beforeEnd`,
      `<div class="arrows__wrap">
  <style>
    .arrows__wrap {
      position: absolute;
      top: 95px;
      left: 50%;
      margin-left: -56px;
    }
    .arrows__btn {
      background: none;
      border: 2px solid black;
      padding: 5px 20px;
    }
  </style>
  <button class="arrows__btn"><-</button>
  <button class="arrows__btn">-></button>
</div>`);

  const arrowLeft = document.querySelectorAll(`.arrows__btn`)[0];
  const arrowRight = document.querySelectorAll(`.arrows__btn`)[1];

  document.addEventListener(`keydown`, screenHandler);

  arrowLeft.addEventListener(`click`, prevScreenHandler);
  arrowRight.addEventListener(`click`, nextScreenHandler);

})();
