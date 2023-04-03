// this is a concrete product
import Checkbox from './Checkbox';

export default class WindowsCheckbox implements Checkbox {
  toggle(): string {
    return 'Windows checkbox toggled';
  }
}