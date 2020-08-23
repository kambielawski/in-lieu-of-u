import React from 'react';
import { Router } from 'react-router-dom';
import Routes from './routes';
import history from './services/history';

import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {

  return (
    <Router history={history}>
      <Routes />
    </Router>
  );
};

export default App;
