import * as React from 'react';
import { useCallback } from 'react';
import { Beer } from '../../tools/types/beer';
import { BeerElement } from '../beer-list/beer-element';
import { useSelector } from 'react-redux';
import { RootState } from '../../tools/types/state';
import './style.css';

export const FavouriteBeers = () => {
  const { favouriteBeers } = useSelector((state: RootState) => state).appData;

  const renderList = useCallback(
    () => {
      if (!favouriteBeers.length) {
        return <h3>Ooops, it seems you don't like any of our beers :(</h3>
      }

      return favouriteBeers.map((b: Beer) => <div key={`fav-beers-element-${b.id}`}><BeerElement beer={b}/></div>)
    },
    [favouriteBeers],
  );


  return <div className={`fav-beer-list`}>{renderList()}</div>
}