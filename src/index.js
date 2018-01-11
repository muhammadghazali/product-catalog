import React from 'react';
import ReactDOM from 'react-dom';
import * as firebase from 'firebase';

import 'foundation-sites/dist/css/foundation.css';
import 'foundation-sites/dist/css/foundation-prototype.css';
import 'foundation-sites/dist/css/foundation-float.css';
import 'foundation-sites/dist/js/foundation.js';
import 'foundation-sites/dist/js/plugins/foundation.core.js';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import 'foundation-sites';

const firebaseService = firebase.initializeApp({
  apiKey: 'AIzaSyDXrDalWKUI36m9GdZosLdIjw8gKjdPZl8',
  databaseURL: 'https://dummy-product-catalog.firebaseio.com/'
});

const $ = window.$;
$(document).foundation();

ReactDOM.render(
  <App firebaseService={firebaseService} />,
  document.getElementById('root')
);
registerServiceWorker();
