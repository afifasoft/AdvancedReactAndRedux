import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import Root from 'Root';

import App from 'components/App';
// 73
ReactDOM.render(
  // list of reducers and state
  <Root>
    <BrowserRouter>
      <Route path="/" component={App}/>
    </BrowserRouter>
</Root>,
  document.querySelector('#root')

);
