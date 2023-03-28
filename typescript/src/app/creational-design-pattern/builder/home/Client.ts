import HomeDirector from './HomeDirector';
import BaseHomeBuilder from './BaseHomeBuilder';
import UltimateHomeBuilder from './UltimateHomeBuilder';

export default class Client {
  public getBaseHome() {
    const director = new HomeDirector(new BaseHomeBuilder());
    return director.baseHomeBuilder();
  }
  public getUltimateHome() {
    const director = new HomeDirector(new UltimateHomeBuilder());
    return director.ultimateHomeBuilder();
  }
}