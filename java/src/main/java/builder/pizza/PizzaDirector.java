package builder.pizza;

public class PizzaDirector {
    public Pizza getThinCrustExtraSaucePaneerPizza() {
        String[] toppings = {"Paneer", "Onion", "Capsicum"};
        PizzaBuilder pizzaBuilder = new PizzaBuilder();
        return pizzaBuilder
                .withBase("Thin Crust")
                .withSauce("Extra Tomato Sauce")
                .withToppings(toppings)
                .build();
    }

    public Pizza getHandTossedExtraCheeseVegPizza() {
        String[] toppings = {"Olives", "Onion", "Capsicum", "Bell Pepper", "Extra Cheese"};
        PizzaBuilder pizzaBuilder = new PizzaBuilder();
        return pizzaBuilder
                .withBase("Hand tossed")
                .withSauce("Tomato Sauce")
                .withToppings(toppings)
                .build();
    }
}
