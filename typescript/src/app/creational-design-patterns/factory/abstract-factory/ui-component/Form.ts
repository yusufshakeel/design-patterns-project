// this is the client code
import UIFactory from './UIFactory';

export default class Form {
  private fatory: UIFactory;
  constructor(factory: UIFactory) {
    this.fatory = factory;
  }

  public uiComponent() {
    const button = this.fatory.createButton();
    const checkbox = this.fatory.createCheckbox();
    return { button, checkbox };
  }
}