// this is a concrete factory
import UIFactory from './UIFactory';
import WindowsButton from './WindowsButton';
import WindowsCheckbox from './WindowsCheckbox';
import Button from './Button';
import Checkbox from './Checkbox';

export default class WindosUIFactory implements UIFactory {
  createButton(): Button {
    return new WindowsButton();
  }
  createCheckbox(): Checkbox {
    return new WindowsCheckbox();
  }
}