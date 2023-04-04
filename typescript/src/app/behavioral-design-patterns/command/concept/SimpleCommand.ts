// this is the concrete command
import Command from './Command';

export default class SimpleCommand implements Command {
  private payload: string;

  constructor(payload: string) {
    this.payload = payload;
  }

  execute(): string {
    return `SimpleCommand executed... ${this.payload}`;
  }
}