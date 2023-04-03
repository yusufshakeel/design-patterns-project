// this is the concrete pizza
import Pizza from './Pizza';

class NonVegPizza extends Pizza {
  constructor(maker: string) {
    super(maker);
  }
  makePizza(): string {
    return `Making ${this.maker} non veg pizza.`;
  }
}

export default NonVegPizza;