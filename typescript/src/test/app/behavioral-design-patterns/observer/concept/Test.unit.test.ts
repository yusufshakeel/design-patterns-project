import ConcreteSubscriberA
  from '../../../../../app/behavioral-design-patterns/observer/concept/ConcreteSubscriberA';
import ConcreteSubscriberB
  from '../../../../../app/behavioral-design-patterns/observer/concept/ConcreteSubscriberB';
import Publisher from '../../../../../app/behavioral-design-patterns/observer/concept/Publisher';

describe('Testing observer - concept', () => {
  test('Should be able to publish message', () => {
    const subscriberA = new ConcreteSubscriberA();
    const subscriberB = new ConcreteSubscriberB();
    const publisher = new Publisher();

    publisher.addSubscriber(subscriberA);
    publisher.addSubscriber(subscriberB);

    publisher.notify('Hello, World!');

    expect(subscriberA.getPayload()).toBe('Hello, World!');
    expect(subscriberB.getPayload()).toBe('Hello, World!');

    publisher.removeSubscriber(subscriberA);

    publisher.notify('New message!');

    expect(subscriberA.getPayload()).toBe('Hello, World!');
    expect(subscriberB.getPayload()).toBe('New message!');
  });
});