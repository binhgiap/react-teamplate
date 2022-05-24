import { SET_IS_AUTHENTICATED } from "./constants";

export const setIsAuthenticated = (payload: any) => ({
  type: SET_IS_AUTHENTICATED,
  payload
});

