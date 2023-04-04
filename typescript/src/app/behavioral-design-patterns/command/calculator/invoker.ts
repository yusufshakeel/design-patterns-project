import Command from './Command';

export default class Invoker {
  private command: Command;
  constructor(command: Command) {
    this.command = command;
  }
  invoke() {
    return this.command.execute();
  }
}