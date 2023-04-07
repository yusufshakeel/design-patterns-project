import Strategy from './Strategy';

export default class ConcreteStrategyB implements Strategy {
  doSomething(payload: string): string {
    return payload.toUpperCase();
  }
}