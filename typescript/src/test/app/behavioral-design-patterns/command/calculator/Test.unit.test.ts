import AddReceiver
  from '../../../../../app/behavioral-design-patterns/command/calculator/AddReceiver';
import AddCommand
  from '../../../../../app/behavioral-design-patterns/command/calculator/AddCommand';
import Invoker from '../../../../../app/behavioral-design-patterns/command/calculator/invoker';

describe('Testing calculator - command', () => {
  test('Should be able to add', () => {
    const receiver = new AddReceiver();
    const addCommand = new AddCommand(receiver, 2, 3);
    const invoker = new Invoker(addCommand);
    expect(invoker.invoke()).toBe(5);
  });
});