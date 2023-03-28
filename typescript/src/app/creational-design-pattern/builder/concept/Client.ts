import Director from './Director';

export default class Client {
  private director: Director;
  constructor(director: Director) {
    this.director = director;
  }
  public getProductA() {
    return this.director.productABuilder().build();
  }
  public getProductB() {
    return this.director.productBBuilder().build();
  }
}