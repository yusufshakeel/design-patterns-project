package builder.pizza;

public class PizzaBuilder {
    private String base;
    private String sauce;
    private String[] toppings;

    public PizzaBuilder withBase(String base) {
        this.base = base;
        return this;
    }

    public PizzaBuilder withSauce(String sauce) {
        this.sauce = sauce;
        return this;
    }

    public PizzaBuilder withToppings(String[] toppings) {
        this.toppings = toppings;
        return this;
    }

    public Pizza build() {
        return new Pizza(base, sauce, toppings);
    }
}
