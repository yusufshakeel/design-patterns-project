package strategy.search;

import static org.junit.jupiter.api.Assertions.assertEquals;
import org.junit.jupiter.api.Test;

public class SearchIntegerTest {
    int[] haystack = {10, 15, 20, 25, 30};

    @Test
    public void shouldReturnArrayIndexWhereTheIntegerIsFoundWhenUsingLinearSearch() {
        SearchInteger searchInteger = new SearchInteger();
        searchInteger.setSearchAlgorithm(new LinearSearch());
        assertEquals(3, searchInteger.search(25, haystack));
    }

    @Test
    public void shouldReturnArrayIndexWhereTheIntegerIsFoundWhenUsingBinarySearch() {
        SearchInteger searchInteger = new SearchInteger();
        searchInteger.setSearchAlgorithm(new BinarySearch());
        assertEquals(3, searchInteger.search(25, haystack));
        assertEquals(0, searchInteger.search(10, haystack));
    }

    @Test
    public void shouldReturnNegativeOneWhenNeedleIsNotFoundWhenUsingLinearSearch() {
        SearchInteger searchInteger = new SearchInteger();
        searchInteger.setSearchAlgorithm(new LinearSearch());
        assertEquals(-1, searchInteger.search(100, haystack));
    }

    @Test
    public void shouldReturnNegativeOneWhenNeedleIsNotFoundWhenUsingBinarySearch() {
        SearchInteger searchInteger = new SearchInteger();
        searchInteger.setSearchAlgorithm(new BinarySearch());
        assertEquals(-1, searchInteger.search(100, haystack));
    }
}
