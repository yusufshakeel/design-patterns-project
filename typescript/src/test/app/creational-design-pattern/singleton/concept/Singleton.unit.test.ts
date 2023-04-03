import Singleton from '../../../../../app/creational-design-patterns/singleton/concept/Singleton';

describe('Testing Singleton - concept', () => {
  test('Should be able to create only one instance', () => {
    const instance1 = Singleton.getInstance();
    const instance2 = Singleton.getInstance();
    expect(instance1).toStrictEqual(instance2);
    expect(instance1.doSomething()).toBe('Did something...');
  });
});