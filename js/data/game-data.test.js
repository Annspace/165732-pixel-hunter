import {assert} from 'chai';
import {pointsCounter} from './pointsCounter';
import {Timer} from './timer';
import {Answer, generateAnswersArray} from './answer';

describe(`Check points`, () => {

  it(`less then 10 questions`, () => {
    const answer1 = new Answer(9000, false);
    const answer2 = new Answer(10000, false);
    assert.equal(pointsCounter([answer1, answer2], 10), -1);
  });
  it(`points for all answers not fast not slow`, () => {
    assert.equal(pointsCounter(generateAnswersArray(11000, true), 10), 1150);
  });
  it(`points for fast succsess answers`, () => {
    assert.equal(pointsCounter(generateAnswersArray(9000, true), 10), generateAnswersArray(9000, true).length * 150 + 10 * 50);
  });
  it(`points for slow succsess answers`, () => {
    assert.equal(pointsCounter(generateAnswersArray(25000, true), 10), generateAnswersArray(25000, true).length * 50 + 10 * 50);
  });
});

describe(`timer`, () => {

  it(`correct time`, () => {
    const timer = new Timer(10);
    assert.equal(timer.time, 10);
    assert.equal(timer.tick().time, 9);
    assert.equal(timer.tick().tick().time, 7);
  });
  it(`timer is over`, () => {
    const timer = new Timer(0);
    assert.equal(timer.tick(), `timer is over`);
  });

});
