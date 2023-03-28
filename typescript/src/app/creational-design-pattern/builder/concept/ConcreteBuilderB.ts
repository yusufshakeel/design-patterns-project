import Builder from './Builder';
import ProductB from './ProductB';

export default class ConcreteBuilderB implements Builder {
  private product: ProductB;
  constructor() {
    this.product = new ProductB();
  }
  public reset(): void {
    this.product = new ProductB();
  }
  public withProp1(prop1: string) {
    this.product.setProp1(prop1);
  }
  public withProp2(prop2: string) {
    this.product.setProp2(prop2);
  }
  public withProp3(prop3: string) {
    this.product.setProp3(prop3);
  }
  public build(): ProductB {
    const product = this.product;
    this.reset();
    return product;
  }
}