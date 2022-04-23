package strategy.search;

public class SearchInteger {
    private SearchAlgorithm searchAlgorithm;

    public void setSearchAlgorithm(SearchAlgorithm searchAlgorithm) {
        this.searchAlgorithm = searchAlgorithm;
    }

    public int search(int needle, int[] haystack) {
        return this.searchAlgorithm.find(needle, haystack);
    }
}
