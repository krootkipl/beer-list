import * as React from 'react';
import { Beer } from '../../tools/types/beer';
import { Button, Card } from 'antd';
import { toggleFavourite } from './helpers';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useCallback } from 'react';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons'
import { faHeart as fasHeart } from '@fortawesome/free-solid-svg-icons'
import { useSelector } from 'react-redux';
import { RootState } from '../../tools/types/state';
import './beer-element.css';

interface Props {
  beer: Beer;
}

export const BeerElement = (props: Props) => {
  const { beer } = props;
  const { favouriteBeers } = useSelector((state: RootState) => state).appData;

  const isFavourite = useCallback(
    () => favouriteBeers.some((b: Beer) => b.id === beer.id),
    [favouriteBeers, beer.id],
  );


  const renderFavIcon = useCallback(
    () => {
      if (isFavourite()) {
        return <FontAwesomeIcon icon={fasHeart}/>
      }

      return <FontAwesomeIcon icon={farHeart}/>
    },
    [isFavourite],
  );

  return <Card key={`beer-element-${beer.id}`} title={beer.name}
               style={{ width: '350px', margin: '0 10px 10px 0' }}
               cover={
                 <img alt="example" src={beer.image_url}
                           style={{ maxHeight: '200px', width: 'auto', textAlign: 'center' }}/>}>
    <p>{beer.description}</p>
    <Button title={'Add to favourites'} onClick={() => toggleFavourite(beer)}>
      {renderFavIcon()}
    </Button>
  </Card>
}