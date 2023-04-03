// this defines the wrapping interface for all concrete decorators.
import Component from './Component';

export default class BaseDecorator implements Component {
  private component: Component;
  constructor(component: Component) {
    this.component = component;
  }
  doSomething(): string {
    return `BaseDecorator did something... ${this.component.doSomething()}`;
  }
}