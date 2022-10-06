import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore, applyMiddleware } from 'redux';
import allReducers from './reducers';
import { Provider } from 'react-redux';
import createSagaMiddleware from '@redux-saga/core';
import { firstSaga } from './sagas/firstSaga';
import { configureStore } from '@reduxjs/toolkit';

const sagaMiddleWare = createSagaMiddleware();
/*const store = createStore(allReducers, applyMiddleware(sagaMiddleWare) ,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() );*/

const store = configureStore({ reducer: allReducers, middleware: [sagaMiddleWare] });

sagaMiddleWare.run(firstSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals