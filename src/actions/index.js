// @flow
import * as types from '../types/spotilyTypes';
import { actionCreatorGenerator, typeGenerator } from '../utils/reduxHelpers';

export const setToken = (token: string) => {
  return { type: types.SET_USER_TOKEN, token };
};

const failed = (name: string) => () => ({
  type: typeGenerator(name, types.FAILED),
});

const loading = (name: string) => () => ({
  type: typeGenerator(name, types.LOADING),
});

const succeed = (name: string) => data => ({
  type: typeGenerator(name, types.SUCCEED),
  data,
});

export const dataActions = (name: string, params: any): any =>
  actionCreatorGenerator(
    name,
    {
      failed,
      loading,
      succeed,
    },
    params
  );

export const changePlayingElement = (newMedia: string | Array<string>) => ({
  type: 'CHANGE_MEDIA',
  payload: {
    newMedia,
  },
});
