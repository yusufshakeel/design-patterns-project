import ProductA from './ProductA';

export default class ConcreteProductA1 implements ProductA {
  doSomething(): string {
    return 'ConcreteProductA1 did something';
  }
}