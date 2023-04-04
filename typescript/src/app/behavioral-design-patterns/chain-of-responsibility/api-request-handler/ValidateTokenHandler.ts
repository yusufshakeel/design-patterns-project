import BaseHandler from './BaseHandler';

export default class ValidateTokenHandler extends BaseHandler {
  handle(request: string): string {
    return `ValidateTokenHandler passing request... ${super.handle(request)}`;
  }
}