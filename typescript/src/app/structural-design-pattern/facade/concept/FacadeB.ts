import SubsystemA from './SubsystemA';
import SubsystemB from './SubsystemB';

export class FacadeB {
  private subsystemA: SubsystemA;
  private subsystemB: SubsystemB;

  constructor(subsystemA: SubsystemA, subsystemB: SubsystemB) {
    this.subsystemA = subsystemA;
    this.subsystemB = subsystemB;
  }

  action() {
    return { subsystemA: this.subsystemA.doSomething(), subsystemB: this.subsystemB.doSomething() };
  }
}