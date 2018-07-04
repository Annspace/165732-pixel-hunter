import FooterView from '../view/footer-view';
import HeaderView from '../view/header-view';
import GameView from '../view/game-view';
import Application from '../application';
import ModalView from "../view/modal-view";
import {resize} from "../logic/resizeImages";

const ONE_SECOND = 1000;
const LAST_SECONDS = 25;
const ANSWER_MAX_TIME = 30;

// управляет игровым экраном
class GameScreen {
  constructor(model) {
    // Инициализация и настройка игры
    // переданная модель содержит в себе дату и имя игрока
    this.model = model;
    this.header = new HeaderView(this.model.state);
    this.content = new GameView(this.model);
    this.footer = new FooterView();
    this.modal = new ModalView();
    this.timer = null;
    this.startTimer();

    this.root = document.createElement(`div`);
    this.root.appendChild(this.header.element);
    this.root.appendChild(this.content.element);
    this.root.appendChild(this.footer.element);

    // для первой игры
    this.content.onChangeForm = (checkedElements) => {
      if (checkedElements.length === 2) {
        this.stopTimer();
        this.checkAnswersGameOne(checkedElements[0].value, checkedElements[1].value);
        this.changeGameScreen();
      }
    };
    // для всех игр
    this.content.changeImgSize = (img, frame) => {
      img.width = resize(frame, {width: img.naturalWidth, height: img.naturalHeight}).width;
      img.height = resize(frame, {width: img.naturalWidth, height: img.naturalHeight}).height;
    };

    // для второй игры
    this.content.onChange = (element) => {
      this.stopTimer();
      this.checkAnswersGameTwo(element.value);
      this.changeGameScreen();
    };


    // для третьей игры
    this.content.onClickOption = (element) => {
      this.stopTimer();
      let answerSrc = element.src;
      this.checkAnswersGameThree(answerSrc);
      this.changeGameScreen();
    };

  }

  stopTimer() {
    clearInterval(this.timer);
  }

  startTimer() {
    this.timer = setInterval(() => {
      this.model.tick();
      this.updateHeader();
    }, ONE_SECOND);
  }

  get element() {
    return this.root;
  }

  updateHeader() {
    let newHeader = new HeaderView(this.model.state);
    this.root.replaceChild(newHeader.element, this.header.element);
    this.header = newHeader;
    if (this.model.getTime >= LAST_SECONDS) {
      this.header.startFlashing();
    }
    if (this.model.getTime > ANSWER_MAX_TIME) {
      this.stopTimer();
      this.model.pushWrongAnswer();
      this.model.pushAllAnswers();
      this.changeGameScreen();
    }
    this.header.onClickBackButton = () => {
      this.stopTimer();
      this.root.appendChild(this.modal.element);
      this.modal.onClickConfirm = () => {
        this.model.resetGame();
        Application.showGreeting();
      };
      this.modal.onClickCancel = () => {
        this.root.removeChild(this.modal.element);
        this.startTimer();
      };
    };
  }


  checkAnswersGameOne(firstOptionValue, secondOptionValue) {
    if (this.model.data[0][this.model.getCurrentScreenIndex].answers[0].type === firstOptionValue && this.model.data[0][this.model.getCurrentScreenIndex].answers[1].type === secondOptionValue) {
      this.model.pushCorrectAnswer();
    } else {
      this.model.pushWrongAnswer();
    }
    this.model.pushAllAnswers();
  }

  checkAnswersGameTwo(value) {
    if (this.model.data[1][this.model.getCurrentScreenIndex].answers[0].type === value) {
      this.model.pushCorrectAnswer();
    } else {
      this.model.pushWrongAnswer();
    }
    this.model.pushAllAnswers();
  }

  checkAnswersGameThree(url) {
    let correctAnswer = ``;
    if (this.model.data[2][this.model.getCurrentScreenIndex].question === `Найдите рисунок среди изображений`) {
      let correctAnswerArray = this.model.data[2][this.model.getCurrentScreenIndex].answers.filter((it) => {
        return it.type === `painting`;
      });
      correctAnswer = correctAnswerArray[0];
    } else if (this.model.data[2][this.model.getCurrentScreenIndex].question === `Найдите фото среди изображений`) {
      let correctAnswerArray = this.model.data[2][this.model.getCurrentScreenIndex].answers.filter((it) => {
        return it.type === `photo`;
      });
      correctAnswer = correctAnswerArray[0];
    }

    if (correctAnswer.image.url === url) {
      this.model.pushCorrectAnswer();
    } else {
      this.model.pushWrongAnswer();
    }
    this.model.pushAllAnswers();
  }


  // переключение экранов
  changeGameScreen() {
    this.model.resetTime();
    this.model.changeScreenIndex();
    if (this.model.endOfGames() || this.model.isDead()) {
      Application.showStatistics(this.model.getResults, this.model.getLives);
      this.model.resetGame();
    } else {
      if (this.model.endOfCurrentGame()) {
        this.model.resetScreenIndex();
        this.model.changeGameType();
      }
      Application.showGame(this.model.playerName);
    }
  }

}

export default GameScreen;
