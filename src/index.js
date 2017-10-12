import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { createStore, applyMiddleware } from 'redux';
import queensmanApp from './reducers';
import './index.css';
import App from './App';


let store = createStore(
  queensmanApp,
  applyMiddleware(
    thunkMiddleware,
    createLogger(),
  )
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
