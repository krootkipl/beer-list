import { Beer } from './beer';

export type AppDataState = {
  beers: Beer[];
  favouriteBeers: Beer[];
}

export type RootState = {
  appData: AppDataState;
}