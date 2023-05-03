import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { Provider } from 'react-redux';
import store from './store';
import { ToastContainer } from 'react-toastify';

ReactDOM.render(
  <Provider store={store}>
    <ToastContainer
      position="top-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
    />

    <App />
    <ToastContainer />
  </Provider>,
  document.getElementById('root')
);
