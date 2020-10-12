import React from 'react';
import ReactDOM from 'react-dom';
//!ROUTER
import { BrowserRouter } from 'react-router-dom';
//!REDUX
import { Provider } from 'react-redux';
import store from './redux/store';
//!STYLE
import './sass/index.scss';
//!COMPONENTS
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
