import ApiRequest from '../../../../../app/behavioral-design-patterns/chain-of-responsibility/api-request-handler/ApiRequest';

describe('Testing api request handler - chain of responsibility', () => {
  test('Should be able to handle request', () => {
    const apiRequest = new ApiRequest();
    expect(apiRequest.action('Req')).toBe('ValidateTokenHandler passing request... RequestHandler passing request... GenerateResponseHandler generate response: Resp for request: Req');
  });
});