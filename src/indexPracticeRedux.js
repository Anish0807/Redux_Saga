import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux';

//ACTION
const increment = (mul) => {
  return {
    type: 'INCREMENT',
    payload: mul
  }
}
const decrement = () => {
  return {
    type: 'DECREMENT'
  }
}

//REDUCERS
const myReducer = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + action.payload;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}

const store = createStore(myReducer);

store.subscribe(() => console.log(store.getState()));

store.dispatch(increment(5))
store.dispatch(decrement())

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals