import Client from '../../../../../../app/creational-design-pattern/factory/factory-method/concept/Client';
import ConcreteCreator1 from '../../../../../../app/creational-design-pattern/factory/factory-method/concept/ConcreteCreator1';
import ConcreteCreator2 from '../../../../../../app/creational-design-pattern/factory/factory-method/concept/ConcreteCreator2';

describe('Testing factor method - concept', () => {
  test('Should be able to create perform action with concrete product 1', () => {
    const client = new Client(new ConcreteCreator1());
    expect(client.doSomething()).toBe('ConcreteProduct1 did something');
  });

  test('Should be able to create perform action with concrete product 2', () => {
    const client = new Client(new ConcreteCreator2());
    expect(client.doSomething()).toBe('ConcreteProduct2 did something');
  });
});