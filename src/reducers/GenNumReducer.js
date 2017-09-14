import {
  GENERATE_NUMBERS_SUCCESS,
  GENERATE_NUMBERS_ING
} from '../actions/types';

const INITIAL_STATE = {
  result: [0, 0, 0, 0, 0, 0],
  loading: false,
};

export default (state = INITIAL_STATE, action) => {
  console.log(action);

  switch (action.type) {
    case GENERATE_NUMBERS_ING:
      return { ...state, result: action.payload, loading: true };
    case GENERATE_NUMBERS_SUCCESS:
      return { ...state, loading: false, result: action.payload };
    default:
          return state;
    }
};
