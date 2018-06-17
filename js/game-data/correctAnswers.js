let gameData = [];

const data = {
  paintings: [
    // People
    `https://k42.kn3.net/CF42609C8.jpg`,

    // Animals
    `https://k42.kn3.net/D2F0370D6.jpg`,

    // Nature
    `https://k32.kn3.net/5C7060EC5.jpg`
  ],
  photos: [
    // People
    `http://i.imgur.com/1KegWPz.jpg`,

    // Animals
    `https://i.imgur.com/DiHM5Zb.jpg`,

    // Nature
    `http://i.imgur.com/DKR1HtB.jpg`
  ]
};

const gameOne = {
  questionsScreenOne: {
    optionOne: {
      src: data.paintings[0],
      correctAnswer: `paint`
    },
    optionTwo: {
      src: data.photos[0],
      correctAnswer: `photo`
    }
  },
  questionsScreenTwo: {
    optionOne: {
      src: data.paintings[1],
      correctAnswer: `paint`
    },
    optionTwo: {
      src: data.photos[1],
      correctAnswer: `photo`
    }
  },
  questionsScreenThree: {
    optionOne: {
      src: data.paintings[2],
      correctAnswer: `paint`
    },
    optionTwo: {
      src: data.photos[2],
      correctAnswer: `photo`
    }
  }
};

const gameTwo = {
  questionsScreenOne: {
    question: {
      src: data.paintings[0],
      correctAnswer: `paint`
    }
  },
  questionsScreenTwo: {
    question: {
      src: data.photos[1],
      correctAnswer: `photo`
    }
  },
  questionsScreenThree: {
    question: {
      src: data.paintings[2],
      correctAnswer: `paint`
    }
  }
};

const gameThree = {
  questionsScreenOne: {
    question: {
      src1: data.photos[0],
      src2: data.paintings[0],
      src3: data.photos[1],
      correctAnswer: data.paintings[0]
    }
  },
  questionsScreenTwo: {
    question: {
      src1: data.paintings[1],
      src2: data.photos[1],
      src3: data.photos[2],
      correctAnswer: data.paintings[1]
    }
  },
  questionsScreenThree: {
    question: {
      src1: data.paintings[2],
      src2: data.photos[0],
      src3: data.photos[2],
      correctAnswer: data.paintings[2]
    }
  },
  questionsScreenFour: {
    question: {
      src1: data.photos[1],
      src2: data.photos[0],
      src3: data.paintings[2],
      correctAnswer: data.paintings[2]
    }
  },
};

for (let prop in gameOne) {
  gameData.push(gameOne[prop]);
}
for (let prop in gameTwo) {
  gameData.push(gameTwo[prop]);
}
for (let prop in gameThree) {
  gameData.push(gameThree[prop]);
}
// gameData.push(gameOne.questionsScreenOne, gameOne.questionsScreenTwo, gameOne.questionsScreenThree,
//    gameTwo.questionsScreenOne, gameTwo.questionsScreenTwo, gameTwo.questionsScreenThree,
//    gameThree.questionsScreenOne, gameThree.questionsScreenTwo, gameThree.questionsScreenThree);

export default gameData;
