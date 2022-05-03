import {rest} from 'msw';
import {setupServer} from 'msw/node';
import {SWApiHandlers} from './handlers';

const handlers = [...SWApiHandlers];

const server = setupServer(...handlers);
export {server, rest};
