package strategy.search;

public class BinarySearch implements SearchAlgorithm{
    @Override
    public int find(int needle, int[] haystack) {
        int begin = 0, end = haystack.length - 1, middle = (begin + end) / 2;
        while (begin <= end && haystack[middle] != needle) {
            if (needle < haystack[middle]) {
                end = middle - 1;
            } else {
                begin = middle + 1;
            }
            middle = (begin + end) / 2;
        }
        if (begin > end) {
            return -1;
        }
        return middle;
    }
}
