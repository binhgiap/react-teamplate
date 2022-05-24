import { SET_IS_AUTHENTICATED } from './constants';

const initState: any = {
  isAuthenticated: false,
};

function reducer(state: any, action: any) {
  switch (action.type) {
    case SET_IS_AUTHENTICATED:
      return {
        ...state,
        isAuthenticated: action.payload,
      };
  }
}

export { initState };
export default reducer;
