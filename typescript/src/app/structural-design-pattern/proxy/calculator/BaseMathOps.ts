import MathOps from './MathOps';

export default class BaseMathOps implements MathOps {
  divide(x: number, y: number): number {
    return x / y;
  }
}