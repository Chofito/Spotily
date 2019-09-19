import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import { reducer as player } from '../reducers/player';
import { reducer as albums } from '../reducers/albums';
import saga from '../sagas/index';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();
const albumsReducer = albums('albums');

const reducer = combineReducers({
  albums: albumsReducer,
  player,
});

export const spotilyStore = () => {
  const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware, logger))
  );
  sagaMiddleware.run(saga);
  return store;
};
