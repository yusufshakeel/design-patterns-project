package builder.pizza;

public class Pizza {
    private final String base;
    private final String sauce;
    private final String[] toppings;

    public Pizza(String base, String sauce, String[] toppings) {
        this.base = base;
        this.sauce = sauce;
        this.toppings = toppings;
    }

    public String getPizza() {
        return "Pizza with base: " + base + ", sauce: " + sauce + ", toppings: " + String.join(",", toppings);
    }
}
