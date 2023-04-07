import Subscriber from './Subscriber';

export default class ConcreteSubscriberB implements Subscriber {
  private payload = '';

  update(payload: string) {
    this.payload = payload;
  }

  getPayload(): string {
    return this.payload;
  }
}