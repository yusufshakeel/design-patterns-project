import Subject from './Subject';

export default class ProxySubject implements Subject {
  private subject: Subject;
  constructor(subject: Subject) {
    this.subject = subject;
  }
  doSomething(): string {
    return `Proxy did something... ${this.subject.doSomething()}`;
  }
}