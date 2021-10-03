import { createCustomAction } from 'typesafe-actions';
import { Beer } from '../tools/types/beer';

export enum Keys {
  ADD_BEERS = '[APP DATA] Add beers',
  ADD_TO_FAVOURITE = '[APP DATA] Add to favourites',
  REMOVE_FROM_FAVOURITE = '[APP DATA] Remove from favourites',
}

export const addBeers = createCustomAction(Keys.ADD_BEERS, (beers: Beer[]) => ({ value: beers }));

export const addToFavourite = createCustomAction(Keys.ADD_TO_FAVOURITE, (beer: Beer) => ({ value: beer }));

export const removeFromFavourites = createCustomAction(Keys.REMOVE_FROM_FAVOURITE, (id: number) => ({ value: id }));
