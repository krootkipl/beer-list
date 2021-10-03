import React from 'react';
import './App.css';
import BeerListComponent from './modules/beer-list';
import { Layout } from 'antd';
import { Route, HashRouter as Router, Switch } from 'react-router-dom';
import { FavouriteBeers } from './modules/favourite-beers';

const { Header, Content } = Layout;

function App() {
  return (
    <div className="app">
      <Layout>
        <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
          <a href={'/'}>Beer List</a>
          <a href={'#/favourite'}>Favourite Beers</a>
        </Header>
        <Content style={{paddingTop: '60px'}}>
          <Router>
            <Switch>
              <Route exact={true} path={['/']} component={BeerListComponent}/>
              <Route path={['/favourite']} component={FavouriteBeers}/>
            </Switch>
          </Router>
        </Content>
      </Layout>

    </div>
  );
}

export default App;
