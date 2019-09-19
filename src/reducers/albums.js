// @flow
import { LOADING, FAILED, SUCCEED, REMOVED, ADDED } from '../constants';
import { reducerGenerator } from '../utils/reduxHelpers';

const initialState = {
  albums: [],
};

const actionsHandlers = () => ({
  [FAILED]: state => ({
    ...state,
    status: FAILED,
  }),
  [LOADING]: state => ({
    ...state,
    status: LOADING,
  }),
  [SUCCEED]: (state, action) => ({
    ...state,
    albums: action.data.map(value => {
      value.isSaved = true;
      return value;
    }),
    status: SUCCEED,
  }),
  [REMOVED]: (state, action) => ({
    ...state,
    albums: state.albums.map((value, index) => {
      if (value.album.id === action.albumId[index]) value.isSaved = false;
      return value;
    }),
  }),
  [ADDED]: (state, action) => ({
    ...state,
    albums: state.albums.map((value, index) => {
      if (value.album.id === action.albumId[index]) value.isSaved = true;
      return value;
    }),
  }),
});

export const reducer = (name: string, state: any) => {
  const stateToUse = state || initialState;
  return reducerGenerator(name, actionsHandlers(), stateToUse);
};
