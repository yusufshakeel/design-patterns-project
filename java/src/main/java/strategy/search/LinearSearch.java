package strategy.search;

public class LinearSearch implements SearchAlgorithm{
    @Override
    public int find(int needle, int[] haystack) {
        for(int index = 0; index < haystack.length; index++) {
            if (haystack[index] == needle) {
                return index;
            }
        }
        return -1;
    }
}
