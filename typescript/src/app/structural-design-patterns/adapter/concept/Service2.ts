export default class Service2 {
  private foot: number;

  constructor(foot: number) {
    this.foot = foot;
  }

  public getFoot() {
    return this.foot;
  }
}