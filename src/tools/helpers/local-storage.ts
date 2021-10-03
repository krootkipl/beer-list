import { Beer } from '../types/beer';
import { LOCAL_STORAGE_KEY } from '../consts';


export interface AppLocalStorage {
 beers: Beer[]
}

export default class LocalStorage {
  public get(): AppLocalStorage | null {
    const item = localStorage.getItem(LOCAL_STORAGE_KEY);

    if (item) {
      return this._isJson(item) ? JSON.parse(item) : item;
    }

    return null;
  }

  public set(value: Beer[]): void {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify({beers: value}));
  }

  public remove(id: number): void {
    const storageItem = this.get();

    if (storageItem) {
      const filteredBeers = storageItem.beers.filter((b: Beer) => b.id !== id)

      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify({beers: filteredBeers}));
    }
  }

  public contains(id: number) {
    const storageItem = this.get();

    if (storageItem) {
      return storageItem.beers.some((b: Beer) => b.id === id);
    }

    return false;
  }

  private _isJson(item: string | null): boolean {
    if (item) {
      try {
        item = JSON.parse(item);
      } catch (error) {
        console.error(error)
        return false;
      }

      return typeof item === 'object' && item !== null;
    }

    return false;
  }
}