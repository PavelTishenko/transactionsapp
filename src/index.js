import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './App';
import ErrorBoundry from './components/error-boundry';

// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
//redux
import { Provider } from 'react-redux';
import { store } from './redux/store';


ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundry>
      <Provider store={store}>
        <App />
      </Provider>
    </ErrorBoundry>
  </React.StrictMode>,
  document.getElementById('root')
);


