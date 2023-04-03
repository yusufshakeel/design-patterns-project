import ProductB from './ProductB';

export default class ConcreteProductB1 implements ProductB {
  doSomething(): string {
    return 'ConcreteProductB1 did something';
  }
}