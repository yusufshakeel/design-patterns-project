package factory.simple;

public class MiniComputer extends Computer{
    private ComputerCpuCore core;
    private ComputerStorageInGb storage;
    private ComputerRamInMb memory;

    @Override
    public void setCore(ComputerCpuCore core) {
        this.core = core;
    }

    @Override
    public void setStorage(ComputerStorageInGb storage) {
        this.storage = storage;
    }

    @Override
    public void setMemory(ComputerRamInMb memory) {
        this.memory = memory;
    }

    public String getDetails() {
        return "CPU Cores: " + core + " Memory MB: " + memory + " Storage GB: " + storage;
    }
}
