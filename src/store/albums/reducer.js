// @flow
import { LOADING, FAILED, SUCCEED } from "../../types/spotilyTypes";
import { reducerGenerator } from "../../utils/reduxHelpers";

const initialState = {
  albums: []
};

const actionsHandlers = () => ({
  [FAILED]: state => ({
    ...state,
    status: FAILED
  }),
  [LOADING]: state => ({
    ...state,
    status: LOADING
  }),
  [SUCCEED]: (state, action) => ({
    ...state,
    albums: action.data,
    status: SUCCEED
  })
});

export const reducer = (name: string, state: any) => {
  const stateToUse = state || initialState;
  return reducerGenerator(name, actionsHandlers(), stateToUse);
};
