import * as types from "../../types/actionTypes";
import { actionCreatorGenerator, typeGenerator } from "../helpers";
import { UserAction } from "../../types/actions";

export const setToken = (token: string): UserAction => {
  return { type: types.SET_USER_TOKEN, token };
};

const failed = name => () => ({
  type: typeGenerator(name, types.FAILED)
});

const loading = name => () => ({
  type: typeGenerator(name, types.LOADING)
});

const succeed = name => data => ({
  type: typeGenerator(name, types.SUCCEED),
  data
});

const dataActions = (name, params) =>
  actionCreatorGenerator(
    name,
    {
      failed,
      loading,
      succeed
    },
    params
  );

export default dataActions;
