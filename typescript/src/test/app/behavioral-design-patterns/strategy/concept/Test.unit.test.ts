import Context from '../../../../../app/behavioral-design-patterns/strategy/concept/Context';
import ConcreteStrategyA
  from '../../../../../app/behavioral-design-patterns/strategy/concept/ConcreteStrategyA';
import ConcreteStrategyB
  from '../../../../../app/behavioral-design-patterns/strategy/concept/ConcreteStrategyB';

describe('Testing strategy - concept', () => {
  test('Should be able to use different strategies', () => {
    const context = new Context();
    const strategyA = new ConcreteStrategyA();
    const strategyB = new ConcreteStrategyB();

    context.setStrategy(strategyA);
    const resultA = context.action('HELLO');
    expect(resultA).toBe('hello');

    context.setStrategy(strategyB);
    const resultB = context.action('hello');
    expect(resultB).toBe('HELLO');
  });
});