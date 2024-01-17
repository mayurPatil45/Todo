import todoReducer from './reducers';
import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
const reducer = combineReducers({
    todoReducer,
})
const store = configureStore({
    reducer,
})
export default store;