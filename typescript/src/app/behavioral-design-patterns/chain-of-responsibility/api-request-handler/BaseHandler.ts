import Handler from './Handler';

export default abstract class BaseHandler implements Handler {
  private handler!: Handler;
  setHandler(handler: Handler) {
    this.handler = handler;
  }

  handle(request: string): string {
    if (!this.handler) {
      return request;
    }
    return this.handler.handle(request);
  }
}