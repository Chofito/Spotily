import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import { reducer as albums } from './store/albums/reducer';
import { reducer as player } from './store/player/reducer';
import saga from './sagas/sagas';
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
