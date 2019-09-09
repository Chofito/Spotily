import { LOADING, FAILED, SUCCEED } from "../../types/actionTypes";
import { reducerGenerator } from "../helpers";

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

export const reducer = (name: string, state) => {
  const stateToUse = state || initialState;
  return reducerGenerator(name, actionsHandlers(), stateToUse);
};
