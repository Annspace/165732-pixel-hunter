// utils.js

const mainScreen = document.querySelector(`.central`);
export const changeScreen = (element) => {
  // удаляем содержимое тега main
  while (mainScreen.firstChild) {
    mainScreen.removeChild(mainScreen.firstChild);
  }
  mainScreen.appendChild(element);
};

export const checkStatus = (response) => {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    throw new Error(`${response.status}: ${response.statusText}`);
  }
};


