import Client from '../../../../../../app/creational-design-patterns/factory/factory-method/pizza/Client';
import DominosStore from '../../../../../../app/creational-design-patterns/factory/factory-method/pizza/DominosStore';
import PizzaHutStore from '../../../../../../app/creational-design-patterns/factory/factory-method/pizza/PizzaHutStore';

describe('Testing factory method - pizza', () => {
  describe('Dominos Pizza', () => {
    test('Should be able to make veg pizza', () => {
      const dominosStore = new Client(new DominosStore());
      expect(dominosStore.makePizza('VEG')).toBe('Making Domino\'s veg pizza.');
    });

    test('Should be able to make non veg pizza', () => {
      const dominosStore = new Client(new DominosStore());
      expect(dominosStore.makePizza('NON_VEG')).toBe('Making Domino\'s non veg pizza.');
    });
  });

  describe('Pizza Hut Pizza', () => {
    test('Should be able to make veg pizza', () => {
      const pizzaHutStore = new Client(new PizzaHutStore());
      expect(pizzaHutStore.makePizza('VEG')).toBe('Making Pizza Hut veg pizza.');
    });

    test('Should be able to make non veg pizza', () => {
      const pizzaHutStore = new Client(new PizzaHutStore());
      expect(pizzaHutStore.makePizza('NON_VEG')).toBe('Making Pizza Hut non veg pizza.');
    });
  });
});