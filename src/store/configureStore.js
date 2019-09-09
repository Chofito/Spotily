import { combineReducers, createStore, applyMiddleware } from "redux";
import { logger } from "redux-logger";
import { reducer as albums } from "./reducers/albums";
import saga from "./saga";
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();
const albumsReducer = albums("albums", { albums: [] });

const reducer = combineReducers({
  albums: albumsReducer
});

export const spotilyStore = () => {
  const store = createStore(reducer, applyMiddleware(sagaMiddleware, logger));
  sagaMiddleware.run(saga);
  return store;
};
