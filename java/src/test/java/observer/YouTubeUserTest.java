package observer;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.Test;
import java.util.ArrayList;
import java.util.Arrays;

public class YouTubeUserTest {
    @Test
    public void shouldReturnReceivedNotifications() {
        YouTubeUser janeDoe = new YouTubeUser("janedoe");

        janeDoe.notify("Notification #1");
        janeDoe.notify("Notification #2");

        ArrayList<String> fetchedNotifications = janeDoe.getReceivedNotifications();

        // can assert length
        assertEquals(2, fetchedNotifications.size());

        // can individually assert message
        assertEquals(fetchedNotifications.get(0), "Notification #1");
        assertEquals(fetchedNotifications.get(1), "Notification #2");

        // can assert all messages in the list
        assertEquals(Arrays.asList("Notification #1", "Notification #2"), fetchedNotifications);
    }
}
