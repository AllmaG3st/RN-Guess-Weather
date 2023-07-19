import cities from '../data/cityNames.json';

export const CITIES_LENGTH = cities.length;

export const GAME_STATE = {
  easy: {
    rounds: 10,
    variants: 2,
  },
  medium: {
    rounds: 15,
    variants: 3,
  },
  hard: {
    rounds: 20,
    variants: 4,
  },
} as const;
