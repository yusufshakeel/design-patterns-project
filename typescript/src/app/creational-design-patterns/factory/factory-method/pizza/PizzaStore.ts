// this is the creator
import Pizza from './Pizza';

abstract class PizzaStore {
  // eslint-disable-next-line no-unused-vars
  abstract setPizzaType(pizzaType: string): Pizza;
}

export default PizzaStore;