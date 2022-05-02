package factory.simple;

import factory.simple.errors.ComputerTypeNotSetError;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;


public class ComputerStoreTest {
    @Test
    public void shouldBeAbleToGetMiniComputer() throws ComputerTypeNotSetError {
        ComputerStore computerStore = new ComputerStore(new ComputerFactory());
        String description = computerStore.buyComputer(ComputerType.MINI_COMPUTER);
        assertEquals("CPU Cores: CPU_CORE_1 Memory MB: RAM_IN_MB_256 Storage GB: STORAGE_10_GB", description);
    }

    @Test
    public void shouldBeAbleToGetPowerComputer() throws ComputerTypeNotSetError {
        ComputerStore computerStore = new ComputerStore(new ComputerFactory());
        String description = computerStore.buyComputer(ComputerType.POWER_COMPUTER);
        assertEquals("CPU Cores: CPU_CORE_4 Memory MB: RAM_IN_MB_1024 Storage GB: STORAGE_100_GB", description);
    }

    @Test
    public void shouldReturnNullIfCorrectComputerTypeIsNotSet() throws ComputerTypeNotSetError {
        ComputerStore computerStore = new ComputerStore(new ComputerFactory());
        ComputerTypeNotSetError thrown = assertThrows(
                ComputerTypeNotSetError.class,
                () -> computerStore.buyComputer(null),
                "Should have thrown error"
        );
        assertEquals("Computer Type is not specified.", thrown.getMessage());
    }
}
