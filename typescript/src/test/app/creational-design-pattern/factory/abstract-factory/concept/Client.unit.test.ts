import Client from '../../../../../../app/creational-design-pattern/factory/abstract-factory/concept/Client';
import ConcreteFactory1
  from '../../../../../../app/creational-design-pattern/factory/abstract-factory/concept/ConcreteFactory1';
import ConcreteFactory2
  from '../../../../../../app/creational-design-pattern/factory/abstract-factory/concept/ConcreteFactory2';

describe('Testing abstract factory - concept', () => {
  test('Should be able to use concrete factory 1 and create family of products', () => {
    const client = new Client(new ConcreteFactory1());
    const products = client.createProducts();
    expect(products.productA.doSomething()).toBe('ConcreteProductA1 did something');
    expect(products.productB.doSomething()).toBe('ConcreteProductB1 did something');
  });

  test('Should be able to use concrete factory 2 and create family of products', () => {
    const client = new Client(new ConcreteFactory2());
    const products = client.createProducts();
    expect(products.productA.doSomething()).toBe('ConcreteProductA2 did something');
    expect(products.productB.doSomething()).toBe('ConcreteProductB2 did something');
  });
});