import { GET_USER_FAIL } from "./../Actions/user-action-type";
import { GET_USER, STORE_USER } from "../Actions/user-action-type";

export const userReducers = (state = { user: undefined }, action: any) => {
  const { type, payload } = action;
  switch (type) {
    case GET_USER:
      return { user: payload };
    case STORE_USER:
      return { user: payload };
    case GET_USER_FAIL:
      return { data: undefined };
    default:
      return { user: undefined };
  }
};
