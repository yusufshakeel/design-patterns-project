import AbstractFactory from './AbstractFactory';

export default class Client {
  private factory: AbstractFactory;
  constructor(factory: AbstractFactory) {
    this.factory = factory;
  }

  public createProducts() {
    const productA = this.factory.createProductA();
    const productB = this.factory.createProductB();
    return { productA, productB };
  }
}