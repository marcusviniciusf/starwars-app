import type {Film, SWApiPaginatedResponse} from 'types/swapi';
import {getUrlId} from 'utils';
import {multiFetcher} from 'services/fetcher';
import useSWR, {SWRResponse} from 'swr';

const responseGeneric = <T = unknown>(response: SWRResponse<T, unknown>) => {
  const {data, error, ...restProps} = response;
  return {
    ...restProps,
    error,
    data,
    isLoading: !error && !data,
  };
};

const useGetFilms = () => {
  const response = useSWR<SWApiPaginatedResponse<Film>>('/films');
  return responseGeneric(response);
};

const useGetFilmDetailByName = (list: string[], name: string) => {
  const apiIds = list.map(item => `/${name}/${getUrlId(item)}`);
  const response = useSWR(apiIds, multiFetcher);
  return responseGeneric(response);
};

export {useGetFilms, useGetFilmDetailByName};
