import BaseHandler from './BaseHandler';

export default class RequestHandler extends BaseHandler {
  handle(request: string): string {
    return `RequestHandler passing request... ${super.handle(request)}`;
  }
}