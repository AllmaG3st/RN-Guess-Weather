import cities from '../data/cityNames.json';

export const CITIES_LENGTH = cities.length;

export const GAME_STATE = {
  easy: {
    rounds: 10,
    variants: 2,
    mistakes: 1,
  },
  medium: {
    rounds: 15,
    variants: 3,
    mistakes: 1,
  },
  hard: {
    rounds: 20,
    variants: 4,
    mistakes: 1,
  },
} as const;
