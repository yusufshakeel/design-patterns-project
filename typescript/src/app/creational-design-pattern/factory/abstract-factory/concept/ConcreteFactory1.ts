import AbstractFactory from './AbstractFactory';
import ConcreteProductA1 from './ConcreteProductA1';
import ConcreteProductB1 from './ConcreteProductB1';
import ProductA from './ProductA';
import ProductB from './ProductB';

export default class ConcreteFactory1 implements AbstractFactory {
  createProductA(): ProductA {
    return new ConcreteProductA1();
  }

  createProductB(): ProductB {
    return new ConcreteProductB1();
  }
}