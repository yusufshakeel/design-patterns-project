package observer;

import java.util.ArrayList;

public class YouTubeChannel implements Publisher{
    private final ArrayList<Subscriber> subscribers;

    private final String channelName;

    public YouTubeChannel(String channelName) {
        this.channelName = channelName;
        subscribers = new ArrayList<Subscriber>();
    }

    @Override
    public void addSubscriber(Subscriber subscriber) {
        this.subscribers.add(subscriber);
    }

    @Override
    public void deleteSubscriber(Subscriber subscriber) {
        this.subscribers.remove(subscriber);
    }

    @Override
    public void notifySubscribers(String message) {
        for(Subscriber subscriber: subscribers) {
            subscriber.notify(message);
        }
    }

    public void uploadVideo() {
        String message = this.channelName + " uploaded a new video!";
        this.notifySubscribers(message);
    }
}
