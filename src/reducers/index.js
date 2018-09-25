import { combineReducers } from 'redux';
import homeReducer from './homeReducer';
import bookReducer from './bookReducer';
import readerReducer from './readerReducer';

export default combineReducers({
  homeReducer,
  bookReducer,
  readerReducer
})
