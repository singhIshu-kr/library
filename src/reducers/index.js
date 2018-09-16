import { combineReducers } from 'redux';
import homeReducer from './homeReducer';
import bookReducer from './bookReducer';

export default combineReducers({
  homeReducer,
  bookReducer
})
