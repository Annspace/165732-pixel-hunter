
const gameType = {
  gameOne: `two-of-two`,
  gameTwo: `tinder-like`,
  gameThree: `one-of-three`
};

const dataServer = [
  {
    "type": `two-of-two`,
    "question": `Угадайте для каждого изображения фото или рисунок?`,
    "answers": [
      {
        "image": {
          "url": `http://placehold.it/468x458`,
          "width": 468,
          "height": 458
        },
        "type": `photo`
      },
      {
        "image": {
          "url": `http://placehold.it/468x458`,
          "width": 468,
          "height": 458
        },
        "type": `painting`
      }
    ]
  },
  {
    "type": `tinder-like`,
    "question": `Угадай, фото или рисунок?`,
    "answers": [
      {
        "image": {
          "url": `http://placehold.it/705x455`,
          "width": 705,
          "height": 455
        },
        "type": `photo`
      }
    ]
  },
  {
    "type": `one-of-three`,
    "question": `Найдите рисунок среди изображений`,
    "answers": [
      {
        "image": {
          "url": `http://placehold.it/304x455`,
          "width": 304,
          "height": 455
        },
        "type": `photo`
      },
      {
        "image": {
          "url": `http://placehold.it/304x455`,
          "width": 304,
          "height": 455
        },
        "type": `painting`
      },
      {
        "image": {
          "url": `http://placehold.it/304x455`,
          "width": 304,
          "height": 455
        },
        "type": `photo`
      }
    ]
  },
  {
    "type": `one-of-three`,
    "question": `Найдите фото среди изображений`,
    "answers": [
      {
        "image": {
          "url": `http://placehold.it/304x455`,
          "width": 304,
          "height": 455
        },
        "type": `painting`
      },
      {
        "image": {
          "url": `http://placehold.it/304x455`,
          "width": 304,
          "height": 455
        },
        "type": `painting`
      },
      {
        "image": {
          "url": `http://placehold.it/304x455`,
          "width": 304,
          "height": 455
        },
        "type": `photo`
      }
    ]
  }
];

const generateData = (dataArray) => {
  let gameOne = dataArray.filter((it) => {
    return it.type === gameType.gameOne;
  });
  let gameTwo = dataArray.filter((it) => {
    return it.type === gameType.gameTwo;
  });
  let gameThree = dataArray.filter((it) => {
    return it.type === gameType.gameThree;
  });
  let resultData = [];
  resultData.push(gameOne, gameTwo, gameThree);
  return resultData;
};

const data = generateData(dataServer);

// [[{}, {}, {} ....], [{}, {}, {} ...], [{}, {}, {}....]]
export default data;
