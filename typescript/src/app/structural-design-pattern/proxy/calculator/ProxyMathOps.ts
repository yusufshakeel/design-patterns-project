import MathOps from './MathOps';

export default class ProxyMathOps implements MathOps {
  private mathOps: MathOps;

  constructor(mathOps: MathOps) {
    this.mathOps = mathOps;
  }

  divide(x: number, y: number): void | number {
    if (y === 0) {
      throw Error('y should not be zero.');
    }
    return this.mathOps.divide(x, y);
  }
}