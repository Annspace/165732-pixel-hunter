export const LIVES = 3;
export const FAIL_POINT = -1;
export const MEDIUM_TIME_POINT = 1150;
export const CORRECT_POINT = 100;
export const FAST_CORRECT_POINT = 50;
export const SLOW_CORRECT_POINT = 50;
export const LIVE_POINT = 50;
export const SLOW_TIME = 20;
export const FAST_TIME = 10;

export const pointsCounter = (answersArray, life) => {
  let points = 0;
  // let correctAnswers = answersArray.filter((it) => it.correct === true);

  if (life < 0) {
    return FAIL_POINT;
  }

  answersArray.forEach((it) => {
    if (it.correct) {
      points = points + CORRECT_POINT;
      if (it.time < FAST_TIME) {
        points = points + FAST_CORRECT_POINT;
      } else if (it.time > SLOW_TIME) {
        if (points > 0) {
          points = points - SLOW_CORRECT_POINT;
        }
      }
    }
  });

  // За каждую оставшуюся к концу игры жизнь: дополнительные 50 очков.
  points = points + life * LIVE_POINT;

  return points;
};
