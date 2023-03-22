import Product from './Product';

class ConcreteProduct1 implements Product {
  doSomething(): string {
    return 'ConcreteProduct1 did something';
  }
}

export default ConcreteProduct1;