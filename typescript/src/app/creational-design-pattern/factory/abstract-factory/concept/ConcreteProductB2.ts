import ProductB from './ProductB';

export default class ConcreteProductB2 implements ProductB {
  doSomething(): string {
    return 'ConcreteProductB2 did something';
  }
}