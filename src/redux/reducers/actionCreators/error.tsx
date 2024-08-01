import { REMOVE_ERRORS } from "../actionTypes/types";

export const removeErrors = (keys: string[], dispatch: any) => dispatch(
    {
    type: REMOVE_ERRORS,
    payload: { keys },
  }
);