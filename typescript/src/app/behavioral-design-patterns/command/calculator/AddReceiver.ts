import Receiver from './Receiver';

export default class AddReceiver implements Receiver {
  process(x: number, y: number): number {
    return x + y;
  }
}