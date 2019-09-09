import type { UserAction } from "../types/actions";
import { SET_USER_TOKEN } from "../types/actionTypes";

type State = { user_token?: string };

export const user = (state: State, action: UserAction) => {
    switch (action.type) {
        case SET_USER_TOKEN:
            return {
                ...state,
                user_token: action.token
            };
        default:
            return state;
    }
};
