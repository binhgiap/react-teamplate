import React, { useReducer } from 'react';
import reducer, { initState } from './reducer';
import Context from './Context';

function Provider(children: React.ReactNode) {
  const [state, dispatch] = useReducer(reducer, initState);
  const array: any = [state, dispatch];
  return <Context.Provider value={array}>{children}</Context.Provider>;
}

export default Provider;
