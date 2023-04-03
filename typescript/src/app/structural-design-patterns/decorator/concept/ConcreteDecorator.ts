// concrete decorator calls the wrapped object
import BaseDecorator from './BaseDecorator';

export default class ConcreteDecorator extends BaseDecorator {
  doSomething(): string {
    return `ConcreteDecorator did something... ${super.doSomething()}`;
  }
}