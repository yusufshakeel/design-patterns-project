package factory.simple.errors;

public class ComputerTypeNotSetError extends Exception {
    public ComputerTypeNotSetError() {
        super("Computer Type is not specified.");
    }
}
