// @flow
import * as types from '../../types/spotilyTypes';
import {
  actionCreatorGenerator,
  typeGenerator,
} from '../../utils/reduxHelpers';

export const setToken = (token: string) => {
  return { type: types.SET_USER_TOKEN, token };
};

const failed = name => () => ({
  type: typeGenerator(name, types.FAILED),
});

const loading = name => () => ({
  type: typeGenerator(name, types.LOADING),
});

const succeed = name => data => ({
  type: typeGenerator(name, types.SUCCEED),
  data,
});

const dataActions = (name: string, params: any): any =>
  actionCreatorGenerator(
    name,
    {
      failed,
      loading,
      succeed,
    },
    params
  );

export default dataActions;
