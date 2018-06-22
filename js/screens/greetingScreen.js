import GreetingView from '../view/greeting-view';
import {rulesScreen} from '../screens/rulesScreen';
import {changeScreen} from '../logic/utils';

export const greetingScreen = () => {
  const greeting = new GreetingView();
  changeScreen(greeting.element);
  greeting.onClickContinue = () => rulesScreen();
};
