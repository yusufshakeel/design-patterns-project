// this is a concrete command
import Command from './Command';
import Receiver from './Receiver';

export default class ComplexCommand implements Command {
  private receiver: Receiver;
  private payload: string;

  constructor(receiver: Receiver, payload: string) {
    this.receiver = receiver;
    this.payload = payload;
  }

  execute(): string {
    return `ComplexCommand is calling receiver... ${this.receiver.doSomething(this.payload)}`;
  }
}