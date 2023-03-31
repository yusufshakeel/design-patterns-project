import Client from '../../../../../app/structural-design-pattern/decorator/concept/Client';
import ConcreteComponent
  from '../../../../../app/structural-design-pattern/decorator/concept/ConcreteComponent';
import ConcreteDecorator
  from '../../../../../app/structural-design-pattern/decorator/concept/ConcreteDecorator';

describe('Testing decorator - concept', () => {
  test('Should be able to run simple component', () => {
    const component = new ConcreteComponent();
    const client = new Client();
    expect(client.action(component)).toBe('ConcreteComponent did something...');
  });

  test('Should be able to run decorated component', () => {
    const component = new ConcreteComponent();
    const decoratedComponent = new ConcreteDecorator(component);
    const client = new Client();
    expect(client.action(decoratedComponent)).toBe('ConcreteDecorator did something... BaseDecorator did something... ConcreteComponent did something...');
  });
});