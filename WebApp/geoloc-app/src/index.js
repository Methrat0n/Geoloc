import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

require('./API/Schema/require');

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);