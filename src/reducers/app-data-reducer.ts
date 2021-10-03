import update from 'immutability-helper';
import { ActionType } from 'typesafe-actions';

import * as AppActions from '../actions/app-data-actions';
import { AppDataState } from '../tools/types/state';
import { Beer } from '../tools/types/beer';
import LocalStorage from '../tools/helpers/local-storage';

const appLocalStorage = new LocalStorage();

const initFavBeers = () => {
  const storageItem = appLocalStorage.get();

  if (storageItem) {
    return storageItem.beers;
  }

  return [];
}

const INIT_STATE: AppDataState = {
  beers: [],
  favouriteBeers: initFavBeers(),
};

// eslint-disable-next-line
export default function (state: AppDataState = INIT_STATE, action: ActionType<typeof AppActions>): AppDataState {
  switch (action.type) {
    case AppActions.Keys.ADD_BEERS:
      return update(state, { beers: { $push: action.value } })

    case AppActions.Keys.ADD_TO_FAVOURITE:
      return update(state, {favouriteBeers: { $push: [action.value] }})

    case AppActions.Keys.REMOVE_FROM_FAVOURITE:
      const filteredList = state.favouriteBeers.filter((b: Beer) => b.id !== action.value)
      return update(state, {favouriteBeers: {$set: filteredList}})

    default:
      return state;
  }
}
