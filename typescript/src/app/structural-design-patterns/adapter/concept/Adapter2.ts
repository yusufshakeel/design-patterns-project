import ClientInterface from './ClientInterface';
import Service2 from './Service2';

export default class Adapter2 implements ClientInterface {
  private adaptee: Service2;

  constructor(adaptee: Service2) {
    this.adaptee = adaptee;
  }
  getKilometer(): number {
    return this.adaptee.getFoot() / 3280.84;
  }
}