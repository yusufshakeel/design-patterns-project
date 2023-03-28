import Client from '../../../../../app/creational-design-pattern/builder/home/Client';

describe('Testing builder - home', () => {
  test('Should be able to build base home', () => {
    const client = new Client();
    const home = client.getBaseHome();
    expect(home.getHouse()).toStrictEqual({
      hasGarage: false, hasPowerBackup: false, hasWifi: true
    });
  });
  test('Should be able to build ultimate home', () => {
    const client = new Client();
    const home = client.getUltimateHome();
    expect(home.getHouse()).toStrictEqual({
      hasGarage: true, hasPowerBackup: true, hasWifi: true
    });
  });
});