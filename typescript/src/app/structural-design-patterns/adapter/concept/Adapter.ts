import ClientInterface from './ClientInterface';
import Service from './Service';

export default class Adapter implements ClientInterface {
  private adaptee: Service;

  constructor(adaptee: Service) {
    this.adaptee = adaptee;
  }
  getKilometer(): number {
    return this.adaptee.getMile() * 1.60934;
  }
}