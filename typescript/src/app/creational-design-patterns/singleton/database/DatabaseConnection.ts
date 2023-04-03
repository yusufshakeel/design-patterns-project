export default class DatabaseConnection {
  // eslint-disable-next-line no-use-before-define
  private static instance: DatabaseConnection;
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  private constructor() {
  }
  public static getInstance() : DatabaseConnection {
    if(!DatabaseConnection.instance) {
      DatabaseConnection.instance = new DatabaseConnection();
    }
    return DatabaseConnection.instance;
  }
  public doSomething(): string {
    return 'Did something...';
  }
}