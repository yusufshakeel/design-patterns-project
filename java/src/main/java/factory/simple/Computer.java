package factory.simple;

public abstract class Computer {
    public abstract void setMemory(ComputerRamInMb memory);

    public abstract void setStorage(ComputerStorageInGb storage);

    public abstract void setCore(ComputerCpuCore core);

    public abstract String getDetails();
}
