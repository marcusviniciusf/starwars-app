import type {
  Film,
  People,
  Starship,
  Vehicle,
  Species,
  Planet,
  SWApiPaginatedResponse,
} from 'types/swapi';
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
const useGetPeople = (peopleId: string) => {
  const response = useSWR<People>(`/people/${peopleId}`);
  return responseGeneric(response);
};
const useGetStarship = (starshipId: string) => {
  const response = useSWR<Starship>(`/starships/${starshipId}`);
  return responseGeneric(response);
};
const useGetVehicle = (vehicleId: string) => {
  const response = useSWR<Vehicle>(`/vehicles/${vehicleId}`);
  return responseGeneric(response);
};
const useGetSpecies = (speciesId: string) => {
  const response = useSWR<Species>(`/species/${speciesId}`);
  return responseGeneric(response);
};
const useGetPlanet = (planetId: string) => {
  const response = useSWR<Planet>(`/planets/${planetId}`);
  return responseGeneric(response);
};

export {
  useGetFilms,
  useGetPeople,
  useGetStarship,
  useGetVehicle,
  useGetSpecies,
  useGetPlanet,
};
