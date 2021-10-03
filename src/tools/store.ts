import { combineReducers, compose, createStore } from 'redux';
import appDataReducer from '../reducers/app-data-reducer';
import { RootState } from './types/state';

const composeEnhancers =
  (process.env.NODE_ENV === 'development' &&
    window?.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?.({
      trace: true,
      traceLimit: 25,
    })) ||
  compose;

const reducers = combineReducers<RootState>({
  appData: appDataReducer,
});

function configureStore() {
  const enhancer = composeEnhancers();

  return createStore(reducers, enhancer);
}

const store = configureStore();

export default store;