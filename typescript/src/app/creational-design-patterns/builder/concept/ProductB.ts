// this is the concrete product
export default class ProductB {
  private prop1 = '';
  private prop2 = '';
  private prop3 = '';
  public setProp1(prop1: string) {
    this.prop1 = prop1;
  }
  public setProp2(prop2: string) {
    this.prop2 = prop2;
  }
  public setProp3(prop3: string) {
    this.prop3 = prop3;
  }
  public getDetails(): string {
    return `ProductB: prop1 ${this.prop1}, prop2: ${this.prop2}, prop3: ${this.prop3}`;
  }
}