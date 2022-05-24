import React, { useReducer } from 'react';
import reducer, { initState } from './reducer';
import Context from './Context';

type Props = {
  children: React.ReactNode;
};

function Provider({ children }: Props) {
  const [state, dispatch] = useReducer(reducer, initState);
  return <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>;
}

export default Provider;
