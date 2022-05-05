import config from 'config';

const fetcher = <T = any>(res: string, init?: RequestInit): Promise<T> =>
  fetch(`${config.SWAPI_URI}${res}`, init).then(r => r.json());

const multiFetcher = <T>(...urls: string[]): Promise<T[]> => {
  return Promise.all(urls.map(url => fetcher(url)));
};

export {fetcher, multiFetcher};
