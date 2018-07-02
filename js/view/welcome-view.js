import AbstractView from "./abstract-view";

export default class WelcomeView extends AbstractView {

  bind() {
    const intro = document.querySelector(`.intro__asterisk`);
    intro.addEventListener(`click`, () => this.onClickIntro());
  }
  onClickIntro() {}
}
