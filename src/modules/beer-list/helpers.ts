import { getBeersService } from '../../tools/api/beer-api';
import { Beer } from '../../tools/types/beer';
import LocalStorage from '../../tools/helpers/local-storage';

const appLocalStorage = new LocalStorage();

export const getBeers = async () => {
  try {
    const response = await getBeersService();

    return response.data;
  } catch (e) {
    console.log(e)
  }
}

export const toggleFavourite = (beer: Beer) => {
  const storageItem = appLocalStorage.get();

  if (!storageItem) {
    appLocalStorage.set([beer]);
  }

  if (storageItem) {
    if (!appLocalStorage.contains(beer.id)) {
      appLocalStorage.set([...storageItem.beers, beer]);
    } else {
      appLocalStorage.remove(beer.id)
    }
  }
}