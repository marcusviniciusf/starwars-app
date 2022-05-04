import {server} from './server';
import {fetch, Headers, Request, Response} from 'cross-fetch';
import AbortController from 'abort-controller';

global.fetch = fetch;
global.Headers = Headers;
global.Request = Request;
global.Response = Response;
global.AbortController = AbortController;

beforeAll(() => {
  server.listen();
});
afterEach(() => {
  server.resetHandlers();
});
afterAll(() => {
  server.close();
});
