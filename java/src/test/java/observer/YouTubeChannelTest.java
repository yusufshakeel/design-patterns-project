package observer;

import org.junit.jupiter.api.Test;
import static org.mockito.Mockito.*;

public class YouTubeChannelTest {
    @Test
    public void shouldBeAbleToAddSubscribersAndSendNotification() {
        YouTubeChannel youTubeChannel = new YouTubeChannel("yusufshakeel");

        Subscriber mockedSubscriber = mock(YouTubeUser.class);
        youTubeChannel.addSubscriber(mockedSubscriber);
        youTubeChannel.uploadVideo();

        verify(mockedSubscriber, times(1)).notify("yusufshakeel uploaded a new video!");
    }

    @Test
    public void shouldBeAbleToRemoveSubscribersAndDoNotSendNotificationToUnsubscribedUsers() {
        YouTubeChannel youTubeChannel = new YouTubeChannel("yusufshakeel");

        Subscriber mockedSubscriber = mock(YouTubeUser.class);

        youTubeChannel.addSubscriber(mockedSubscriber);
        youTubeChannel.uploadVideo();

        youTubeChannel.deleteSubscriber(mockedSubscriber);
        youTubeChannel.uploadVideo();

        verify(mockedSubscriber, times(1)).notify("yusufshakeel uploaded a new video!");
    }
}
