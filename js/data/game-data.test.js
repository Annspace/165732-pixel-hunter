import {assert} from 'chai';
import answers, {pointsCounter} from './pointsCounter';
import {Timer} from './timer';

describe(`Check points`, () => {

  it(`less then 10 questions`, () => {
    assert.equal(pointsCounter(answers, 10), -1);
  });
  it(`not fast not slow`, () => {
    assert.equal(pointsCounter(answers, 10), 1150);
  });
  it(`points for quick succsess answers`, () => {
    assert.equal(pointsCounter(answers, 10), answers.length * 100);
    assert.equal(pointsCounter(answers, 10), 4500);
  });
  it(`points for slow succsess answers`, () => {
    assert.equal(pointsCounter(answers, 10), answers.length * 50);
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
