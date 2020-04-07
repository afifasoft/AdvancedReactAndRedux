import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';
import reducers from 'reducers';

//export default (props) => {
export default ({ children, initialState = {} }) =>{   // destructure props

  const store = createStore(
    reducers,
    initialState,
    applyMiddleware()
  );

  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};
