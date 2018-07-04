const gameType = {
  gameOne: `two-of-two`,
  gameTwo: `tinder-like`,
  gameThree: `one-of-three`
};

// [[{}, {}, {} ....], [{}, {}, {} ...], [{}, {}, {}....]]

export const adaptServerData = (dataArray) => {
  let gameOne = dataArray.filter((it) => {
    return it.type === gameType.gameOne;
  });
  let gameTwo = dataArray.filter((it) => {
    return it.type === gameType.gameTwo;
  });
  let gameThree = dataArray.filter((it) => {
    return it.type === gameType.gameThree;
  });
  let data = [];
  data.push(gameOne, gameTwo, gameThree);
  return data;
};
