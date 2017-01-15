import reactPolymer from 'react-polymer';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

reactPolymer.registerAttribute('google-map');

ReactDOM.render(
  <App />,
  document.getElementById('root')
);