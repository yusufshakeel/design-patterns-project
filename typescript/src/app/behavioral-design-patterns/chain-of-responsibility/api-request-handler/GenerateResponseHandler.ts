import BaseHandler from './BaseHandler';

export default class GenerateResponseHandler extends BaseHandler {
  handle(request: string): string {
    return `GenerateResponseHandler generate response: Resp for request: ${super.handle(request)}`;
  }
}