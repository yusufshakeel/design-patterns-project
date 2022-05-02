package factory.simple;

public class ComputerFactory {
    public Computer createComputer(ComputerType type) {
        Computer computer;
        if(type == ComputerType.MINI_COMPUTER) {
            computer = new MiniComputer();
        }
        else if(type == ComputerType.POWER_COMPUTER) {
            computer = new PowerComputer();
        } else {
            computer = null;
        }
        return computer;
    }
}
