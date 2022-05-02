package factory.simple;

public class MiniComputer extends Computer{
    private ComputerCpuCore core;
    private ComputerStorageInGb storage;
    private ComputerRamInMb memory;

    @Override
    public void setCore() {
        this.core = ComputerCpuCore.CPU_CORE_1;
    }

    @Override
    public void setStorage() {
        this.storage = ComputerStorageInGb.STORAGE_10_GB;
    }

    @Override
    public void setMemory() {
        this.memory = ComputerRamInMb.RAM_IN_MB_256;
    }

    public String getDetails() {
        return "CPU Cores: " + core + " Memory MB: " + memory + " Storage GB: " + storage;
    }
}
