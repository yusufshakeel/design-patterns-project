import Creator from './Creator';
import Product from './Product';

class Client {
  private creator: Creator;
  constructor(creator: Creator) {
    this.creator = creator;
  }

  public doSomething(): string  {
    const product: Product = this.creator.factoryMethod();
    return product.doSomething();
  }
}

export default Client;