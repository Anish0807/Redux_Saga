import { combineReducers } from 'redux';
import CounterReducer from './Counter'
import LoggedReducer from './Logged'

const allReducers = {
    counter: CounterReducer,
    logged: LoggedReducer
}

export default allReducers;