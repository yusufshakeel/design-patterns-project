import message from '../src/index';
describe('This is a sample test', () => {
  test('Should always pass', () => {
    expect(message()).toBe('Hello, World!');
  });
});