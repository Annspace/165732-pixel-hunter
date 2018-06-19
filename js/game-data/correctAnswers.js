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

const gameData = {
  gameOne: [{
    optionOne: {
      src: data.paintings[0],
      correctAnswer: `paint`
    },
    optionTwo: {
      src: data.photos[0],
      correctAnswer: `photo`
    }
  }, {
    optionOne: {
      src: data.paintings[1],
      correctAnswer: `paint`
    },
    optionTwo: {
      src: data.photos[1],
      correctAnswer: `photo`
    }
  }, {
    optionOne: {
      src: data.paintings[2],
      correctAnswer: `paint`
    },
    optionTwo: {
      src: data.photos[2],
      correctAnswer: `photo`
    }
  }],
  gameTwo: [{
    question: {
      src: data.paintings[0],
      correctAnswer: `paint`
    }},
  {
    question: {
      src: data.photos[1],
      correctAnswer: `photo`
    }
  },
  {
    question: {
      src: data.paintings[2],
      correctAnswer: `paint`
    }
  }],
  gameThree: [{
    question: {
      src1: data.photos[0],
      src2: data.paintings[0],
      src3: data.photos[1],
      correctAnswer: data.paintings[0]
    }
  }, {
    question: {
      src1: data.paintings[1],
      src2: data.photos[1],
      src3: data.photos[2],
      correctAnswer: data.paintings[1]
    }
  }, {
    question: {
      src1: data.paintings[2],
      src2: data.photos[0],
      src3: data.photos[2],
      correctAnswer: data.paintings[2]
    }
  }, {
    question: {
      src1: data.photos[1],
      src2: data.photos[0],
      src3: data.paintings[2],
      correctAnswer: data.paintings[2]
    }
  }]
};

export default gameData;
