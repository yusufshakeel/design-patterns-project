// this is the concrete pizza
import Pizza from './Pizza';

class VegPizza extends Pizza {
  constructor(maker: string) {
    super(maker);
  }

  makePizza(): string {
    return `Making ${this.maker} veg pizza.`;
  }
}

export default VegPizza;