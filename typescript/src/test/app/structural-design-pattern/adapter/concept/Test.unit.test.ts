import Service from '../../../../../app/structural-design-pattern/adapter/concept/Service';
import Adapter from '../../../../../app/structural-design-pattern/adapter/concept/Adapter';
import Client from '../../../../../app/structural-design-pattern/adapter/concept/Client';

describe('Testing adapter - concept', () => {
  test('Should be able to get length in kilometer from service that has length in mile', () => {
    const service = new Service(1);
    const adapter = new Adapter(service);
    const client = new Client(adapter.getKilometer());
    expect(client.getKilometer()).toBe(1.60934);
  });
});