// utils.js

/* export const render = (htmlString) => {
  const wrapper = document.createElement(`div`);
  wrapper.innerHTML = htmlString;
  return wrapper;
}; */


const mainScreen = document.querySelector(`.central`);
export const changeScreen = (element) => {
  // удаляем содержимое тега main
  while (mainScreen.firstChild) {
    mainScreen.removeChild(mainScreen.firstChild);
  }
  mainScreen.appendChild(element);
};

/* export const fragmentToString = (fragmentId) => {
  const fragment = document.querySelector(`#${fragmentId}`);
  const clonedFragment = fragment.content.cloneNode(true);
  const div = document.createElement(`div`);
  div.appendChild(clonedFragment);

  return div.innerHTML;
}; */
