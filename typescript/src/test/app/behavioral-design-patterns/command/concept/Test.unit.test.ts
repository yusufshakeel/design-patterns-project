import Invoker from '../../../../../app/behavioral-design-patterns/command/concept/Invoker';
import SimpleCommand
  from '../../../../../app/behavioral-design-patterns/command/concept/SimpleCommand';
import ComplexCommand
  from '../../../../../app/behavioral-design-patterns/command/concept/ComplexCommand';
import Receiver from '../../../../../app/behavioral-design-patterns/command/concept/Receiver';

describe('Testing command - concept', () => {
  test('Should be able to use simple command', () => {
    const command = new SimpleCommand('SimpleCommandPayload');
    const invoker = new Invoker(command);
    expect(invoker.doSomething()).toBe('Invoker did something... SimpleCommand executed... SimpleCommandPayload');
  });

  test('Should be able to use complex command', () => {
    const receiver = new Receiver();
    const command = new ComplexCommand(receiver, 'ComplexCommandPayload');
    const invoker = new Invoker(command);
    expect(invoker.doSomething()).toBe('Invoker did something... ComplexCommand is calling receiver... Receiver did something... ComplexCommandPayload');
  });
});