import ConcreteHandler1
  from '../../../../../app/behavioral-design-patterns/chain-of-responsibility/concept/ConcreteHandler1';
import ConcreteHandler2
  from '../../../../../app/behavioral-design-patterns/chain-of-responsibility/concept/ConcreteHandler2';

describe('Testing chain of responsibility - concept' , () => {
  test('Should be able to create chain of responsibility', () => {
    const concreteHandler1 = new ConcreteHandler1();
    const concreteHandler2 = new ConcreteHandler2();
    concreteHandler1.setHandler(concreteHandler2);
    expect(concreteHandler1.handle('SOME_REQUEST')).toBe('ConcreteHandler1 handling... ConcreteHandler2 handling... SOME_REQUEST');
  });
});