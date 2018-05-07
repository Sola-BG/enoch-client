/* tslint:disable-next-line */
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import './index.css';
// import registerServiceWorker from './registerServiceWorker';

import 'babel-polyfill';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-datepicker/dist/react-datepicker.css';
import './assets/theme.css';


ReactDOM.render(
  <Router basename={process.env.PUBLIC_URL}>
    <App />
  </Router>,
  document.getElementById('root') as HTMLElement
);
// registerServiceWorker();
