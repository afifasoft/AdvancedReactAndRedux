import React from 'react';
import ReactDOM from 'react-dom';
import Root from 'Root';

import App from 'components/App';
// 62
ReactDOM.render(
  // list of reducers and state
  <Root>
    <App />
  </Root>,
  document.querySelector('#root')

);
