// this is the concrete creator
import PizzaStore from './PizzaStore';
import Pizza from './Pizza';
import VegPizza from './VegPizza';
import NonVegPizza from './NonVegPizza';

class PizzaHutStore extends PizzaStore {
  private maker = 'Pizza Hut';
  setPizzaType(pizzaType: string): Pizza {
    if (pizzaType === 'VEG') {
      return new VegPizza(this.maker);
    }
    return new NonVegPizza(this.maker);
  }
}

export default PizzaHutStore;