import React from "react";
import { Beer } from '../../tools/types/beer';
import { getBeers } from './helpers';

import './style.css';
import { BeerElement } from './beer-element';
import { Button } from 'antd';
import { connect } from 'react-redux'
import { RootState } from '../../tools/types/state';

interface Props {
  beers: Beer[]
}

interface State {
  page: number;
}

class BeerListComponent extends React.Component<Props, State> {
  state: State = {
    page: 1,
  }

  componentDidMount() {
    getBeers();
  }

  render() {

    return <>
      <div className={`beer-list`}>
        {this._renderBeerList()}
      </div>
      <div className={'more-beers-button'}>
        <Button onClick={() => this._getBeers()}>Load more beers</Button>
      </div>
    </>
  }

  _getBeers = async () => {
    this.setState({ page: this.state.page + 1 }, () => getBeers(this.state.page))
  }

  private _renderBeerList = () => this.props.beers.map((beer: Beer) => <div key={`beer-element-${beer.id}`}>
    <BeerElement beer={beer}/>
  </div>)
}

const mapStateToProps = (state: RootState) => {
  return {
    beers: state.appData.beers,
  };
};

export default connect(mapStateToProps)(BeerListComponent);
