// this is concrete handler 2
import BaseHandler from './BaseHandler';

export default class ConcreteHandler2 extends BaseHandler {
  handle(request: string): string {
    return `ConcreteHandler2 handling... ${super.handle(request)}`;
  }
}