import BaseMathOps from '../../../../../app/structural-design-pattern/proxy/calculator/BaseMathOps';
import Client from '../../../../../app/structural-design-pattern/proxy/calculator/Client';
import ProxyMathOps
  from '../../../../../app/structural-design-pattern/proxy/calculator/ProxyMathOps';

describe('Testing calculator - proxy', () => {
  describe('Testing base mathOps', () => {
    test('Should be able to divide', () => {
      const mathOps = new BaseMathOps();
      const client = new Client(mathOps);
      expect(client.divide(10, 2)).toBe(5);
    });

    test('Should not complain when dividing by 0', () => {
      const mathOps = new BaseMathOps();
      const client = new Client(mathOps);
      expect(client.divide(10, 0)).toBe(Infinity);
    });
  });

  describe('Testing proxy mathOps', () => {
    test('Should be able to divide', () => {
      const mathOps = new ProxyMathOps(new BaseMathOps());
      const client = new Client(mathOps);
      expect(client.divide(10, 2)).toBe(5);
    });

    test('Should throw error when dividing by 0', () => {
      const mathOps = new ProxyMathOps(new BaseMathOps());
      const client = new Client(mathOps);
      expect(() => client.divide(10, 0)).toThrow('y should not be zero');
    });
  });
});