import AbstractFactory from './AbstractFactory';
import ConcreteProductA2 from './ConcreteProductA2';
import ConcreteProductB2 from './ConcreteProductB2';
import ProductA from './ProductA';
import ProductB from './ProductB';

export default class ConcreteFactory2 implements AbstractFactory {
  createProductA(): ProductA {
    return new ConcreteProductA2();
  }

  createProductB(): ProductB {
    return new ConcreteProductB2();
  }
}