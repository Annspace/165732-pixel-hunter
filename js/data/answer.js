export class Answer {
  constructor(time, success) {
    this.time = time;
    this.success = success;
  }
}

export const generateAnswersArray = (time, succsess) => {
  let answers = [];
  for (let i = 0; i < 11; i++) {
    answers.push(new Answer(time, succsess));
  }
  return answers;
};
