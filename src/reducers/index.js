import { combineReducers } from 'redux';
import SignInReducer from './SignInReducer';
import GenNumReducer from './GenNumReducer';

export default combineReducers({
  signin: SignInReducer,
  genNums: GenNumReducer
});
