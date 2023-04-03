// this is a concrete builder
import HomeBuilder from './HomeBuilder';
import Home from './Home';

export default class UltimateHomeBuilder implements HomeBuilder {
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
  withGarage() {
    this.home.withGarage();
  }
  withPowerBackup() {
    this.home.withPowerBackup();
  }
  build() {
    const home = this.home;
    this.reset();
    return home;
  }
}