package builder.pizza;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.Test;

public class PizzaDirectorTest {
    @Test
    public void shouldBeAbleToCreatePaneerPizza() {
        PizzaDirector pizzaDirector = new PizzaDirector();
        Pizza paneerPizza = pizzaDirector.getThinCrustExtraSaucePaneerPizza();
        assertEquals("Pizza with base: Thin Crust, sauce: Extra Tomato Sauce, toppings: Paneer,Onion,Capsicum", paneerPizza.getPizza());
    }

    @Test
    public void shouldBeAbleToCreateVegPizza() {
        PizzaDirector pizzaDirector = new PizzaDirector();
        Pizza paneerPizza = pizzaDirector.getHandTossedExtraCheeseVegPizza();
        assertEquals("Pizza with base: Hand tossed, sauce: Tomato Sauce, toppings: Olives,Onion,Capsicum,Bell Pepper,Extra Cheese", paneerPizza.getPizza());
    }
}
