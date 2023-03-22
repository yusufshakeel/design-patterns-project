// this is the concrete creator
import PizzaStore from './PizzaStore';
import Pizza from './Pizza';
import VegPizza from './VegPizza';
import NonVegPizza from './NonVegPizza';

class DominosStore extends PizzaStore {
  private maker = 'Domino\'s';
  setPizzaType(pizzaType: string): Pizza {
    if (pizzaType === 'VEG') {
      return new VegPizza(this.maker);
    }
    return new NonVegPizza(this.maker);
  }
}

export default DominosStore;