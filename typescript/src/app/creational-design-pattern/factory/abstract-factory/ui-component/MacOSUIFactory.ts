// this is the concrete factory
import UIFactory from './UIFactory';
import MacOSButton from './MacOSButton';
import MacOSCheckbox from './MacOSCheckbox';
import Button from './Button';
import Checkbox from './Checkbox';

export default class MacOSUIFactory implements UIFactory {
  createButton(): Button {
    return new MacOSButton();
  }
  createCheckbox(): Checkbox {
    return new MacOSCheckbox();
  }
}