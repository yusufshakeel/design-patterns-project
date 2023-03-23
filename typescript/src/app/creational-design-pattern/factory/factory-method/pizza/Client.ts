// this is the client code
import PizzaStore from './PizzaStore';

export default class Client {
  private pizzaStore: PizzaStore;
  constructor(pizzaStore: PizzaStore) {
    this.pizzaStore = pizzaStore;
  }

  public makePizza(pizzaType: string): string {
    return this.pizzaStore.setPizzaType(pizzaType).makePizza();
  }
}