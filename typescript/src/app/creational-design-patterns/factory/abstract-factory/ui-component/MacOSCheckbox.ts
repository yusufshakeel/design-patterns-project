// this is a concrete product
import Checkbox from './Checkbox';

export default class MacOSCheckbox implements Checkbox {
  toggle(): string {
    return 'macOS checkbox toggled';
  }
}