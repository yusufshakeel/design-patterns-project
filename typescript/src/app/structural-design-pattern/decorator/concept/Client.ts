import Component from './Component';

export default class Client {
  action(component: Component): string {
    return component.doSomething();
  }
}