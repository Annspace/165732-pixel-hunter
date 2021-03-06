import AbstractView from "./abstract-view";

export default class ModalView extends AbstractView {

  get template() {
    return `<section class="modal-confirm modal-confirm__wrap">
    <form class="modal-confirm__inner">
      <button class="modal-confirm__close" type="button">Закрыть</button>
      <h2 class="modal-confirm__title">Подтверждение</h2>
      <p class="modal-confirm__text">Вы уверены что хотите начать игру заново?</p>
      <div class="modal-confirm__btn-wrap">
        <button class="modal-confirm__btn">Ок</button>
        <button class="modal-confirm__btn">Отмена</button>
      </div>
    </form>
  </section>`;
  }

  bind() {
    const confirm = this.element.querySelectorAll(`.modal-confirm__btn`)[0];
    const cancel = this.element.querySelectorAll(`.modal-confirm__btn`)[1];
    const close = this.element.querySelector(`.modal-confirm__close`);

    confirm.addEventListener(`click`, (e) => {
      e.preventDefault();
      this.onClickConfirm();
    });
    cancel.addEventListener(`click`, (e) => {
      e.preventDefault();
      this.onClickCancel();
    });
    close.addEventListener(`click`, (e) => {
      e.preventDefault();
      this.onClickCancel();
    });
  }
  onClickConfirm() {}
  onClickCancel() {}
}
