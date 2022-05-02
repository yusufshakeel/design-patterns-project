package factory.simple;

import factory.simple.errors.ComputerTypeNotSetError;

public class ComputerStore {
    ComputerFactory computerFactory;

    public ComputerStore(ComputerFactory computerFactory) {
        this.computerFactory = computerFactory;
    }

    public String buyComputer(ComputerType computerType) throws ComputerTypeNotSetError {
        Computer computer = computerFactory.createComputer(computerType);
        if (computer == null) {
            throw new ComputerTypeNotSetError();
        }
        return computer.getDetails();
    }
}
