import Builder from './Builder';
import ProductA from './ProductA';

export default class ConcreteBuilderA implements Builder {
  private product: ProductA;
  constructor() {
    this.product = new ProductA();
  }
  public reset(): void {
    this.product = new ProductA();
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
  public build(): ProductA {
    const product = this.product;
    this.reset();
    return product;
  }
}