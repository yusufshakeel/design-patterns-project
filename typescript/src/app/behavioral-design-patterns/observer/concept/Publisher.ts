import Subscriber from './Subscriber';

export default class Publisher {
  private subscribers: Subscriber[] = [];

  addSubscriber(subscriber: Subscriber) {
    this.subscribers.push(subscriber);
  }

  removeSubscriber(subscriber: Subscriber) {
    this.subscribers = this.subscribers.filter(s => s !== subscriber);
  }

  notify(payload: string) {
    this.subscribers.forEach(subscriber => {
      subscriber.update(payload);
    });
  }
}