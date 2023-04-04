// this is the handler interface
interface Handler {
  // eslint-disable-next-line no-unused-vars
  setHandler(handler: Handler): void;

  // eslint-disable-next-line no-unused-vars
  handle(request: string): string;
}

export default Handler;