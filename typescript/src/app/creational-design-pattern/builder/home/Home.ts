// this is the product
export default class Home {
  private hasWifi = false;
  private hasGarage = false;
  private hasPowerBackup = false;

  withWifi() {
    this.hasWifi = true;
  }

  withGarage() {
    this.hasGarage = true;
  }

  withPowerBackup() {
    this.hasPowerBackup = true;
  }

  getHouse() {
    return {
      hasWifi: this.hasWifi,
      hasGarage: this.hasGarage,
      hasPowerBackup: this.hasPowerBackup
    };
  }
}