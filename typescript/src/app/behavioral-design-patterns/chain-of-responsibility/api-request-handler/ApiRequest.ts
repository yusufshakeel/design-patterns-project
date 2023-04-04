// this is the client
import ValidateTokenHandler from './ValidateTokenHandler';
import RequestHandler from './RequestHandler';
import GenerateResponseHandler from './GenerateResponseHandler';

export default class ApiRequest {
  action(request: string): string {
    const tokenValidator = new ValidateTokenHandler();
    const requestHandler = new RequestHandler();
    const responseGenerator = new GenerateResponseHandler();
    tokenValidator.setHandler(requestHandler);
    requestHandler.setHandler(responseGenerator);
    return tokenValidator.handle(request);
  }
}