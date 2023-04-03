import SubsystemA from './SubsystemA';

export class FacadeA {
  private subsystemA: SubsystemA;

  constructor(subsystemA: SubsystemA) {
    this.subsystemA = subsystemA;
  }

  action() {
    return { subsystemA: this.subsystemA.doSomething() };
  }
}