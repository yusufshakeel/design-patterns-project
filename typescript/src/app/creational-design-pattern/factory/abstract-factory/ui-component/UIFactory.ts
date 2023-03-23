// this is the abstract factory
import Button from './Button';
import Checkbox from './Checkbox';

interface UIFactory {
  createButton(): Button;
  createCheckbox(): Checkbox;
}

export default UIFactory;