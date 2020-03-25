import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from 'reducers';

import App from 'components/App';
// 38
ReactDOM.render(
  // list of reducers and state 
  <Provider store={createStore(reducers, {})}>
    <App />
  </Provider>,
  document.querySelector('#root')

);
