import {rest} from 'msw';
import {
  mockFilm,
  mockPeople,
  mockPlanet,
  mockSpecies,
  mockStarship,
  mockVehicle,
} from 'tests/mocks/swapi';

const getFilms = rest.get('/api/films', (req, res, ctx) => {
  const response = res(ctx.json([mockFilm]));
  return response;
});
const getPeople = rest.get('/api/people', (req, res, ctx) => {
  const response = res(ctx.json(mockPeople));
  return response;
});
const getStarship = rest.get('/api/starship', (req, res, ctx) => {
  const response = res(ctx.json(mockStarship));
  return response;
});
const getVehicle = rest.get('/api/vehicle', (req, res, ctx) => {
  const response = res(ctx.json(mockVehicle));
  return response;
});
const getPlanet = rest.get('/api/planet', (req, res, ctx) => {
  const response = res(ctx.json(mockPlanet));
  return response;
});
const getSpecies = rest.get('/api/species', (req, res, ctx) => {
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
