import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { App } from './components/App';
// import './styles/scss/sb-admin-2.scss';

ReactDOM.render(
  <BrowserRouter basename="/rotf-2021">
    <App />
  </BrowserRouter>,
  document.getElementById('root'),
);
