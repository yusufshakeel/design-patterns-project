import Subscriber from './Subscriber';

export default class ConcreteSubscriberA implements Subscriber {
  private payload = '';

  update(payload: string) {
    this.payload = payload;
  }

  getPayload(): string {
    return this.payload;
  }
}