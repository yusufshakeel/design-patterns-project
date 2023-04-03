import Subject from './Subject';

export default class Client {
  action(subject: Subject): string {
    return subject.doSomething();
  }
}