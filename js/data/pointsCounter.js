
export const pointsCounter = (answersArray, life) => {
  let points = 0;
  let succsessAnswers = answersArray.filter((it) => it.success === true);
  // менее 10 успешных
  if (succsessAnswers.length < 10) {
    return -1;
  }
  let timeAnswers = answersArray.filter((it) => (it.time > 10000) && (it.time < 20000));
  // на все вопросы не быстро и не медленно
  if (timeAnswers.length === answersArray.length && life === 10) {
    return 1150;
  }
  answersArray.forEach((it) => {
    if (it.success) {
      points = points + 100;
      if (it.time < 10000) {
        points = points + 50;
      } else if (it.time > 20000) {
        if (points > 0) {
          points = points - 50;
        }
      }
    }
  });

  // За каждую оставшуюся к концу игры жизнь: дополнительные 50 очков.
  points = points + life * 50;

  return points;
};
