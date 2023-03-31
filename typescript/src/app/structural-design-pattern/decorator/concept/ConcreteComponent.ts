// this is the class of objects that will be wrapped by decorators.
import Component from './Component';

export default class ConcreteComponent implements Component {
  doSomething(): string {
    return 'ConcreteComponent did something...';
  }
}