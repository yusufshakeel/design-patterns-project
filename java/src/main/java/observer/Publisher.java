package observer;

public interface Publisher {
    public void addSubscriber(Subscriber subscriber);
    public void deleteSubscriber(Subscriber subscriber);
    public void notifySubscribers(String message);
}
