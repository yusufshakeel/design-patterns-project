export default class Singleton {
  // eslint-disable-next-line no-use-before-define
  private static instance: Singleton;
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  private constructor() {}
  public static getInstance(): Singleton {
    if(!Singleton.instance) {
      Singleton.instance = new Singleton();
    }
    return Singleton.instance;
  }
  public doSomething(): string {
    return 'Did something...';
  }
}