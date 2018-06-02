// utils.js

export const show = (htmlString) => {
  const wrapper = document.createElement(`div`);
  wrapper.innerHTML = htmlString;
  return wrapper;
};

const mainScreen = document.querySelector(`.central`);

export const changeScreen = (element) => {
  // удаляем содержимое тега main
  while (mainScreen.firstChild) {
    mainScreen.removeChild(mainScreen.firstChild);
  }
  mainScreen.appendChild(element);
};
