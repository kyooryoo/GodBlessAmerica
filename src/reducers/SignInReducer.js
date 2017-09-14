import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  SIGNIN_USER_ING,
  SIGNIN_USER_SUCCESS,
  SIGNIN_USER_FAILED,
} from '../actions/types';

const INITIAL_STATE = {
  email: '',
  password: '',
  user: null,
  loading: false,
};

export default (state = INITIAL_STATE, action) => {
  console.log(action);

  switch (action.type) {
    case EMAIL_CHANGED:
      return { ...state, email: action.payload };
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload };
    case SIGNIN_USER_ING:
      return { ...state, loading: true, error: '' };
    case SIGNIN_USER_SUCCESS:
      return { ...state, ...INITIAL_STATE, user: action.payload };
    case SIGNIN_USER_FAILED:
      return { ...state, error: 'Authentication Failed', password: '', loading: false };
    default:
      return state;
    }
};
