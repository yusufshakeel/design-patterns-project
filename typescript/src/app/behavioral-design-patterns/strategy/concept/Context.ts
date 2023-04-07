import Strategy from './Strategy';

export default class Context {
  private strategy!: Strategy;

  setStrategy(strategy: Strategy) {
    this.strategy = strategy;
  }

  action(payload: string): string {
    return this.strategy.doSomething(payload);
  }
}