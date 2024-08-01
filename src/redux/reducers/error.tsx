import { GET_ERRORS, REMOVE_ERRORS } from "./actionTypes/types";

interface ErrorState {
    errors: Object,
}

const initialState = {
    errors: {}
}

const errorReducer = (state: ErrorState = initialState, action: any): ErrorState => {
    switch (action.type) {
        case GET_ERRORS:
            return {
                ...state,
                errors: action.payload,
            };
        case REMOVE_ERRORS:
            return {
                ...state,
                errors: {},
            };
        default:
            return state;
    }
}

export default errorReducer;