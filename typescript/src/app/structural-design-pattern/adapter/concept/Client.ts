export default class Client {
  private kilometer: number;

  constructor(kilometer: number) {
    this.kilometer = kilometer;
  }

  public getKilometer() {
    return this.kilometer;
  }
}