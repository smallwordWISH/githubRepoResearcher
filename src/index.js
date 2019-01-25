import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router-dom';

import 'styles/style.scss';
import store from './store';
import history from 'historyLib';
import App from './components/app';

const Index = () => (
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>
);

ReactDOM.render(
  <Index />
  , document.getElementById('index'),
);
