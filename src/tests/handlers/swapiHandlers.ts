import {rest} from 'msw';
import {
  mockFilm,
  mockPeople,
  mockPlanet,
  mockSpecies,
  mockStarship,
  mockVehicle,
} from 'tests/mocks/swapi';
import config from 'config';

const getFilms = rest.get(config.SWAPI_URI + '/films', (req, res, ctx) => {
  const response = res(
    ctx.json({
      count: 1,
      next: null,
      previous: null,
      results: [mockFilm],
    }),
  );
  return response;
});
const getPeople = rest.get(config.SWAPI_URI + '/people', (req, res, ctx) => {
  const response = res(ctx.json(mockPeople));
  return response;
});
const getStarship = rest.get(
  config.SWAPI_URI + '/starships',
  (req, res, ctx) => {
    const response = res(ctx.json(mockStarship));
    return response;
  },
);
const getVehicle = rest.get(config.SWAPI_URI + '/vehicles', (req, res, ctx) => {
  const response = res(ctx.json(mockVehicle));
  return response;
});
const getPlanet = rest.get(config.SWAPI_URI + '/planets', (req, res, ctx) => {
  const response = res(ctx.json(mockPlanet));
  return response;
});
const getSpecies = rest.get(config.SWAPI_URI + '/species', (req, res, ctx) => {
  const response = res(ctx.json(mockSpecies));
  return response;
});

export default [
  getFilms,
  getPeople,
  getStarship,
  getVehicle,
  getPlanet,
  getSpecies,
];
