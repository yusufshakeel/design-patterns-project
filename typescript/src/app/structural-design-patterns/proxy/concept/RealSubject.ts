import Subject from './Subject';

export default class RealSubject implements Subject {
  doSomething(): string {
    return 'RealSubject did something...';
  }
}