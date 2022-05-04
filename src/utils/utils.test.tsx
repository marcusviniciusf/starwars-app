import {getUrlId} from './utils';

describe('Utils', () => {
  it('GetUrlId - get id from valid url', () => {
    const id = getUrlId('https://swapi.dev/api/people/1/');
    expect(id).toBe('1');
  });
  it('GetUrlId - get empty string from invalid url', () => {
    const id = getUrlId('');
    expect(id).toBe('');
  });
});
