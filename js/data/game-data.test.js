import {assert} from 'chai';
import {CORRECT_POINT, pointsCounter} from '../logic/pointsCounter';
import {FAST_CORRECT_POINT, SLOW_CORRECT_POINT, LIVES, LIVE_POINT, FAIL_POINT, MEDIUM_TIME_POINT} from '../logic/pointsCounter';
import {Timer} from './timer';

describe(`Check points`, () => {
  const NUMBER_OF_ANSWERS = 10;
  const FAST_TIME_POINTS = NUMBER_OF_ANSWERS * (CORRECT_POINT + FAST_CORRECT_POINT) + LIVES * LIVE_POINT;
  const SLOW_TIME_POINTS = NUMBER_OF_ANSWERS * (CORRECT_POINT - SLOW_CORRECT_POINT) + LIVES * LIVE_POINT;
  const wrongAnswer = {
    correct: false,
    time: 22000,
  };
  const mediumTimeAnswer = {
    correct: true,
    time: 11000,
  };
  const fastTimeAnswer = {
    correct: true,
    time: 9000,
  };
  const slowTimeAnswer = {
    correct: true,
    time: 25000,
  };
  const failedAnswers = Array(NUMBER_OF_ANSWERS).fill(wrongAnswer);
  const mediumTimeAnswers = Array(NUMBER_OF_ANSWERS).fill(mediumTimeAnswer);
  const fastTimeAnswers = Array(NUMBER_OF_ANSWERS).fill(fastTimeAnswer);
  const slowTimeAnswers = Array(NUMBER_OF_ANSWERS).fill(slowTimeAnswer);

  it(`less then 10 correct answers`, () => {
    const points = pointsCounter(failedAnswers, LIVES);
    assert.equal(points, FAIL_POINT);
  });
  it(`points for all answers not fast not slow`, () => {
    const points = pointsCounter(mediumTimeAnswers, LIVES);
    assert.equal(points, MEDIUM_TIME_POINT);
  });
  it(`points for fast correct answers`, () => {
    const points = pointsCounter(fastTimeAnswers, LIVES);
    assert.equal(points, FAST_TIME_POINTS);
  });
  it(`points for slow correct answers`, () => {
    const points = pointsCounter(slowTimeAnswers, LIVES);
    assert.equal(points, SLOW_TIME_POINTS);
  });
  it(`points > 0`, () => {
    const points = pointsCounter(slowTimeAnswers, LIVES);
    assert.equal(points > 0, true);
  });
  it(`incorrect live input`, () => {
    const points = pointsCounter(slowTimeAnswers, `someString`);
    assert.equal(isNaN(points), true);
  });
});

describe(`Timer`, () => {
  const START_TIME = 10;
  const ZERO_TIME = 0;
  it(`correct time`, () => {
    const timer = new Timer(START_TIME);
    assert.equal(timer.time, START_TIME);
    assert.equal(timer.tick().time, START_TIME - 1);
    assert.equal(timer.tick().tick().time, START_TIME - 3);
  });
  it(`timer is over`, () => {
    const timer = new Timer(ZERO_TIME);
    assert.equal(timer.tick(), `timer is over`);
  });

});
