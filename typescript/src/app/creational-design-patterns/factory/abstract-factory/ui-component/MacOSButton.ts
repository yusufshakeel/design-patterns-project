// this is a concrete product
import Button from './Button';

export default class MacOSButton implements Button {
  click(): string {
    return 'macOS button clicked';
  }
}