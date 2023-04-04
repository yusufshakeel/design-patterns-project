import Command from './Command';
import Receiver from './Receiver';

export default class AddCommand implements Command {
  private x: number;
  private y: number;
  private receiver: Receiver;

  constructor(receiver: Receiver, x: number, y: number) {
    this.x = x;
    this.y = y;
    this.receiver = receiver;
  }

  execute(): number {
    return this.receiver.process(this.x, this.y);
  }
}