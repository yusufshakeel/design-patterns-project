// this the concrete builder
import HomeBuilder from './HomeBuilder';
import Home from './Home';

export default class BaseHomeBuilder implements HomeBuilder {
  private home!: Home;
  constructor() {
    this.reset();
  }
  reset() {
    this.home = new Home();
  }
  withWifi() {
    this.home.withWifi();
  }
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  withGarage() {
  }
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  withPowerBackup() {
  }
  build() {
    const home = this.home;
    this.reset();
    return home;
  }
}