export default class Service {
  private mile: number;

  constructor(mile: number) {
    this.mile = mile;
  }

  public getMile() {
    return this.mile;
  }
}