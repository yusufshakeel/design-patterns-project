import Product from './Product';

class ConcreteProduct2 implements Product {
  doSomething(): string {
    return 'ConcreteProduct2 did something';
  }
}

export default ConcreteProduct2;