import { getBeersService } from '../../tools/api/beer-api';
import { Beer } from '../../tools/types/beer';
import LocalStorage from '../../tools/helpers/local-storage';
import store from '../../tools/store';
import * as AppActions from '../../actions/app-data-actions'

const appLocalStorage = new LocalStorage();

export const getBeers = async (page?: number) => {
  try {
    const response = await getBeersService(page);

    store.dispatch(AppActions.addBeers(response.data))
  } catch (e) {
    console.log(e)
  }
}

export const toggleFavourite = (beer: Beer) => {
  const storageItem = appLocalStorage.get();


  if (!storageItem) {
    appLocalStorage.set([beer]);
    store.dispatch(AppActions.addToFavourite(beer))
  }

  if (storageItem) {
    if (!appLocalStorage.contains(beer.id)) {
      appLocalStorage.set([...storageItem.beers, beer]);
      store.dispatch(AppActions.addToFavourite(beer))
    } else {
      appLocalStorage.remove(beer.id)
      store.dispatch(AppActions.removeFromFavourites(beer.id))
    }
  }
}