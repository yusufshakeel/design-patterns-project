// this is the product
abstract class Pizza {
  protected maker: string;

  constructor(maker: string) {
    this.maker = maker;
  }

  abstract makePizza(): string;
}

export default Pizza;