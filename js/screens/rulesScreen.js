import {gameOneScreen} from '../screens/gameOneScreen';
import RulesView from '../view/rules-view';
import {changeScreen} from '../logic/utils';
import {greetingScreen} from '../screens/greetingScreen';

export const rulesScreen = () => {
  const rules = new RulesView();
  changeScreen(rules.element);
  rules.onClickBackButton = () => greetingScreen();
  rules.onInput = (element1, element2) => {
    if (element1.value.length > 0) {
      element2.removeAttribute(`disabled`);
    } else {
      element2.setAttribute(`disabled`, `disabled`);
    }
    rules.onClickGoButton = () => gameOneScreen();
  };
};
