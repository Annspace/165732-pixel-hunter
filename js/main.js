'use strict';

(function () {
  const templates = document.getElementsByTagName(`template`);
  const mainScreen = document.querySelector(`.central`);
  const LEFT_ARROW_KEY = 37;
  const RIGHT_ARROW_KEY = 39;
  let screens = [];
  let currentScreen = 0;

  [].forEach.call(templates, (it) => {
    const templateContent = it.content;
    screens.push(templateContent);
  });

  const showScreen = (screenNumber) => {
    if (screenNumber < screens.length) {
      // удаляем содержимое тега main
      while (mainScreen.firstChild) {
        mainScreen.removeChild(mainScreen.firstChild);
      }
      // screensArray перетирается appendChild, поэтому создаем копию
      let clonedScreen = screens[screenNumber].cloneNode(true);
      mainScreen.appendChild(clonedScreen);
    }
  };

  showScreen(0);
  const showNextScreen = () => {
    if (currentScreen < screens.length - 1) {
      currentScreen++;
      showScreen(currentScreen);
    }
    return currentScreen;
  };

  const showPrevScreen = () => {
    if (currentScreen < screens.length && currentScreen > 0) {
      currentScreen--;
      showScreen(currentScreen);
    }
    return currentScreen;
  };

  const switchScreen = (e) => {
    if (e.keyCode === RIGHT_ARROW_KEY || e.target === arrowRight) {
      showNextScreen();
    } else if (e.keyCode === LEFT_ARROW_KEY || e.target === arrowLeft) {
      showPrevScreen();
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

  document.addEventListener(`keydown`, switchScreen);

  arrowLeft.addEventListener(`click`, switchScreen);
  arrowRight.addEventListener(`click`, switchScreen);

})();
