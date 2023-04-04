import Command from './Command';

export default class Invoker {
  private command: Command;
  constructor(command: Command) {
    this.command = command;
  }
  doSomething(): string {
    return `Invoker did something... ${this.command.execute()}`;
  }
}