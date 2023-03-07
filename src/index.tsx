import React from 'react';
const ReactDOM = require('react-dom/client');
import './index.css';
import App from './App';
const { Provider } = require('react-redux');
const { store } = require('./redux/store/store')
// import { store } from './redux/store/store';
const { BrowserRouter } = require('react-router-dom');
const { UserProvider } = require('./context/userContext');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <UserProvider>
    <Provider store={store}>
      <React.StrictMode>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </React.StrictMode>
    </Provider>
  </UserProvider>
);