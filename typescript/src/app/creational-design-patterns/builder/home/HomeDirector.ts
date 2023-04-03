import HomeBuilder from './HomeBuilder';
import BaseHomeBuilder from './BaseHomeBuilder';
import UltimateHomeBuilder from './UltimateHomeBuilder';

export default class HomeDirector {
  private builder: HomeBuilder;
  constructor(builder: HomeBuilder) {
    this.builder = builder;
  }
  baseHomeBuilder() {
    this.builder.withWifi();
    this.builder.withGarage();
    this.builder.withPowerBackup();
    const builder = <BaseHomeBuilder>this.builder;
    return builder.build();
  }
  ultimateHomeBuilder() {
    this.builder.withWifi();
    this.builder.withGarage();
    this.builder.withPowerBackup();
    const builder = <UltimateHomeBuilder>this.builder;
    return builder.build();
  }
}