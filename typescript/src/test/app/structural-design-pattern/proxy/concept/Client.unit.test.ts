import RealSubject from '../../../../../app/structural-design-pattern/proxy/concept/RealSubject';
import Client from '../../../../../app/structural-design-pattern/proxy/concept/Client';
import ProxySubject from '../../../../../app/structural-design-pattern/proxy/concept/ProxySubject';

describe('Testing proxy - concept', () => {
  test('Should be able to use real subject', () => {
    const subject = new RealSubject();
    const client = new Client();
    expect(client.action(subject)).toBe('RealSubject did something...');
  });

  test('Should be able to use proxy subject', () => {
    const subject = new ProxySubject(new RealSubject());
    const client = new Client();
    expect(client.action(subject)).toBe('Proxy did something... RealSubject did something...');
  });
});