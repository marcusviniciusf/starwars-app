const mockFilm = {
  title: 'A New Hope',
  episode_id: 4,
  opening_crawl:
    "It is a period of civil war.\r\nRebel spaceships, striking\r\nfrom a hidden base, have won\r\ntheir first victory against\r\nthe evil Galactic Empire.\r\n\r\nDuring the battle, Rebel\r\nspies managed to steal secret\r\nplans to the Empire's\r\nultimate weapon, the DEATH\r\nSTAR, an armored space\r\nstation with enough power\r\nto destroy an entire planet.\r\n\r\nPursued by the Empire's\r\nsinister agents, Princess\r\nLeia races home aboard her\r\nstarship, custodian of the\r\nstolen plans that can save her\r\npeople and restore\r\nfreedom to the galaxy....",
  director: 'George Lucas',
  producer: 'Gary Kurtz, Rick McCallum',
  release_date: '1977-05-25',
  characters: [
    'https://swapi.dev/api/people/1/',
    'https://swapi.dev/api/people/2/',
  ],
  planets: ['https://swapi.dev/api/planets/1/'],
  starships: [
    'https://swapi.dev/api/starships/2/',
    'https://swapi.dev/api/starships/13/',
  ],
  vehicles: [
    'https://swapi.dev/api/vehicles/4/',
    'https://swapi.dev/api/vehicles/8/',
  ],
  species: [
    'https://swapi.dev/api/species/1/',
    'https://swapi.dev/api/species/2/',
  ],
  created: '2014-12-10T14:23:31.880000Z',
  edited: '2014-12-20T19:49:45.256000Z',
  url: 'https://swapi.dev/api/films/1/',
};

const mockVehicle = {
  name: 'Sand Crawler',
  model: 'Digger Crawler',
  manufacturer: 'Corellia Mining Corporation',
  cost_in_credits: '150000',
  length: '36.8 ',
  max_atmosphering_speed: '30',
  crew: '46',
  passengers: '30',
  cargo_capacity: '50000',
  consumables: '2 months',
  vehicle_class: 'wheeled',
  pilots: [],
  films: ['https://swapi.dev/api/films/1/', 'https://swapi.dev/api/films/5/'],
  created: '2014-12-10T15:36:25.724000Z',
  edited: '2014-12-20T21:30:21.661000Z',
  url: 'https://swapi.dev/api/vehicles/4/',
};
const mockPeople = {
  name: 'Luke Skywalker',
  height: '172',
  mass: '77',
  hair_color: 'blond',
  skin_color: 'fair',
  eye_color: 'blue',
  birth_year: '19BBY',
  gender: 'male',
  homeworld: 'https://swapi.dev/api/planets/1/',
  films: ['https://swapi.dev/api/films/1/', 'https://swapi.dev/api/films/2/'],
  species: [],
  vehicles: [
    'https://swapi.dev/api/vehicles/14/',
    'https://swapi.dev/api/vehicles/30/',
  ],
  starships: [
    'https://swapi.dev/api/starships/12/',
    'https://swapi.dev/api/starships/22/',
  ],
  created: '2014-12-09T13:50:51.644000Z',
  edited: '2014-12-20T21:17:56.891000Z',
  url: 'https://swapi.dev/api/people/1/',
};
const mockStarship = {
  name: 'CR90 corvette',
  model: 'CR90 corvette',
  manufacturer: 'Corellian Engineering Corporation',
  cost_in_credits: '3500000',
  length: '150',
  max_atmosphering_speed: '950',
  crew: '30-165',
  passengers: '600',
  cargo_capacity: '3000000',
  consumables: '1 year',
  hyperdrive_rating: '2.0',
  MGLT: '60',
  starship_class: 'corvette',
  pilots: [],
  films: [
    'https://swapi.dev/api/films/1/',
    'https://swapi.dev/api/films/3/',
    'https://swapi.dev/api/films/6/',
  ],
  created: '2014-12-10T14:20:33.369000Z',
  edited: '2014-12-20T21:23:49.867000Z',
  url: 'https://swapi.dev/api/starships/2/',
};
const mockPlanet = {
  name: 'Tatooine',
  rotation_period: '23',
  orbital_period: '304',
  diameter: '10465',
  climate: 'arid',
  gravity: '1 standard',
  terrain: 'desert',
  surface_water: '1',
  population: '200000',
  residents: [
    'https://swapi.dev/api/people/1/',
    'https://swapi.dev/api/people/2/',
  ],
  films: ['https://swapi.dev/api/films/1/', 'https://swapi.dev/api/films/3/'],
  created: '2014-12-09T13:50:49.641000Z',
  edited: '2014-12-20T20:58:18.411000Z',
  url: 'https://swapi.dev/api/planets/1/',
};
const mockSpecies = {
  name: 'Human',
  classification: 'mammal',
  designation: 'sentient',
  average_height: '180',
  skin_colors: 'caucasian, black, asian, hispanic',
  hair_colors: 'blonde, brown, black, red',
  eye_colors: 'brown, blue, green, hazel, grey, amber',
  average_lifespan: '120',
  homeworld: 'https://swapi.dev/api/planets/9/',
  language: 'Galactic Basic',
  people: [
    'https://swapi.dev/api/people/66/',
    'https://swapi.dev/api/people/67/',
    'https://swapi.dev/api/people/68/',
    'https://swapi.dev/api/people/74/',
  ],
  films: [
    'https://swapi.dev/api/films/1/',
    'https://swapi.dev/api/films/2/',
    'https://swapi.dev/api/films/3/',
    'https://swapi.dev/api/films/4/',
    'https://swapi.dev/api/films/5/',
    'https://swapi.dev/api/films/6/',
  ],
  created: '2014-12-10T13:52:11.567000Z',
  edited: '2014-12-20T21:36:42.136000Z',
  url: 'https://swapi.dev/api/species/1/',
};

export {
  mockFilm,
  mockVehicle,
  mockPeople,
  mockStarship,
  mockPlanet,
  mockSpecies,
};