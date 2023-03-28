import Client from '../../../../../app/creational-design-pattern/builder/concept/Client';
import Director from '../../../../../app/creational-design-pattern/builder/concept/Director';
import ConcreteBuilderA
  from '../../../../../app/creational-design-pattern/builder/concept/ConcreteBuilderA';
import ProductA from '../../../../../app/creational-design-pattern/builder/concept/ProductA';
import ConcreteBuilderB
  from '../../../../../app/creational-design-pattern/builder/concept/ConcreteBuilderB';
import ProductB from '../../../../../app/creational-design-pattern/builder/concept/ProductB';

describe('Testing building - concept', () => {
  test('Should be able to build product A', () => {
    const director = new Director(new ConcreteBuilderA());
    const client = new Client(director);
    const product: ProductA = client.getProductA();
    expect(product.getDetails()).toBe('ProductA: prop1 p1, prop2: p2, prop3: p3');
  });

  test('Should be able to build product B', () => {
    const director = new Director(new ConcreteBuilderB());
    const client = new Client(director);
    const product: ProductB = client.getProductB();
    expect(product.getDetails()).toBe('ProductB: prop1 p1, prop2: p2, prop3: p3');
  });
});