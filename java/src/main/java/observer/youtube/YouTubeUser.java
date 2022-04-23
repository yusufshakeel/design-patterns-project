package observer.youtube;

import java.util.ArrayList;

public class YouTubeUser implements Subscriber{
    private final String username;

    private final ArrayList<String> notifications;

    public YouTubeUser(String username) {
        this.username = username;
        this.notifications = new ArrayList<String>();
    }

    @Override
    public void notify(String message) {
        notifications.add(message);
    }

    public ArrayList<String> getReceivedNotifications() {
        return this.notifications;
    }
}
