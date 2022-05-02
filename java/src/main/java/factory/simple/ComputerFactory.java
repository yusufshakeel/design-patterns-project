package factory.simple;

public class ComputerFactory {
    public Computer createComputer(ComputerType type) {
        Computer computer;
        if(type == ComputerType.MINI_COMPUTER) {
            computer = new MiniComputer();
            computer.setCore(ComputerCpuCore.CPU_CORE_1);
            computer.setMemory(ComputerRamInMb.RAM_IN_MB_256);
            computer.setStorage(ComputerStorageInGb.STORAGE_10_GB);
        }
        else if(type == ComputerType.POWER_COMPUTER) {
            computer = new PowerComputer();
            computer.setCore(ComputerCpuCore.CPU_CORE_4);
            computer.setMemory(ComputerRamInMb.RAM_IN_MB_1024);
            computer.setStorage(ComputerStorageInGb.STORAGE_100_GB);
        } else {
            computer = null;
        }
        return computer;
    }
}
