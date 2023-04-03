// this is a concrete product
import Button from './Button';

export default class WindowsButton implements Button {
  click(): string {
    return 'Windows button clicked';
  }
}