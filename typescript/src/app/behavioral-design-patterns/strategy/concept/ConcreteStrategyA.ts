import Strategy from './Strategy';

export default class ConcreteStrategyA implements Strategy {
  doSomething(payload: string): string {
    return payload.toLowerCase();
  }
}