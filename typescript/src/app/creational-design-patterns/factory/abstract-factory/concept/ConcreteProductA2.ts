import ProductA from './ProductA';

export default class ConcreteProductA2 implements ProductA {
  doSomething(): string {
    return 'ConcreteProductA2 did something';
  }
}