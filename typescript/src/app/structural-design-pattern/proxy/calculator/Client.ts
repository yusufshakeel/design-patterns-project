import MathOps from './MathOps';

export default class Client {
  private mathOps: MathOps;

  constructor(mathOps: MathOps) {
    this.mathOps = mathOps;
  }

  divide(x: number, y: number): void | number {
    return this.mathOps.divide(x, y);
  }
}