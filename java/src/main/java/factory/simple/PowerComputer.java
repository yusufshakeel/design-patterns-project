package factory.simple;

public class PowerComputer extends Computer{
    private ComputerCpuCore core;
    private ComputerStorageInGb storage;
    private ComputerRamInMb memory;

    @Override
    public void setCore() {
        this.core = ComputerCpuCore.CPU_CORE_4;
    }

    @Override
    public void setStorage() {
        this.storage = ComputerStorageInGb.STORAGE_100_GB;
    }

    @Override
    public void setMemory() {
        this.memory = ComputerRamInMb.RAM_IN_MB_1024;
    }

    public String getDetails() {
        return "CPU Cores: " + core + " Memory MB: " + memory + " Storage GB: " + storage;
    }
}
