import { combineReducers, createStore, applyMiddleware } from 'redux'
import { logger } from 'redux-logger'
import { reducer as albums } from './reducers/albums'
import saga from './sagas'
import createSagaMiddleware from 'redux-saga'

const sagaMiddleware = createSagaMiddleware()
const albumsReducer = albums('albums')

const reducer = combineReducers({
  albums: albumsReducer
})

export const spotilyStore = () => {
  const middlewares = [sagaMiddleware, logger]
  const store = createStore(reducer, applyMiddleware(middlewares))
  sagaMiddleware.run(saga)
  return store
}
