// this is the concrete handler 1
import BaseHandler from './BaseHandler';

export default class ConcreteHandler1 extends BaseHandler {
  handle(request: string): string {
    return `ConcreteHandler1 handling... ${super.handle(request)}`;
  }
}