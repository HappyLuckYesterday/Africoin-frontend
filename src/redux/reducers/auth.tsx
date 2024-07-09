import { SET_CURRENT_USER } from "./actionTypes/types";
import isEmpty from "../../utils/isEmpty";

interface AuthState {
    isAuthenticated: boolean;
    user: object;
}

const initialState = {
    isAuthenticated: false,
    user: {},
}

const authReducer = (state: AuthState = initialState, action: any): AuthState => {
    switch (action.type) {
        case SET_CURRENT_USER:
            return {
                ...state,
                isAuthenticated: !isEmpty(action.payload),
                user: action.payload,
            };
        default:
            return state;
    }
}

export default authReducer;