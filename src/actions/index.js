import firebase from 'firebase';
import TimerMixin from 'react-timer-mixin';
import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  SIGNIN_USER_SUCCESS,
  SIGNIN_USER_FAILED,
  SIGNIN_USER_ING,
  GENERATE_NUMBERS_SUCCESS,
  GENERATE_NUMBERS_ING,
} from './types';

// section for signin users
export const emailChanged = (text) => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  };
};

export const passwordChanged = (text) => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  };
};

export const signinUser = ({ email, password }) => {
  return (dispatch) => {
    dispatch({ type: SIGNIN_USER_ING });

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => signinUserSuccess(dispatch, user))
      .catch((error) => {
        console.log(error);
        signinUserFailed(dispatch);
      });
  };
};

const signinUserSuccess = (dispatch, user) => {
  dispatch({
    type: SIGNIN_USER_SUCCESS,
    payload: user
  });
};

const signinUserFailed = (dispatch) => {
  dispatch({
      type: SIGNIN_USER_FAILED
  });
};

// section for generae numbers
export const generateNums = () => {
  return (dispatch) => {
    let fin = false;

    // dispatch({
    //   type: GENERATE_NUMBERS_ING
    // });

    this.setTimeout(() => {
      fin = true;
    }, 5000);

    this.interval = this.setInterval(() => {
      const result = numGenerator();
      if (fin === false) {
        dispatch({
          type: GENERATE_NUMBERS_ING,
          payload: result
        });
      } else if (fin === true) {
        dispatch({
          type: GENERATE_NUMBERS_SUCCESS,
          payload: result
        });
        this.clearInterval(this.interval);
      }
    }, 100);

    // const result = numGenerator();
    // dispatch({
    //   type: GENERATE_NUMBERS_SUCCESS,
    //   payload: result
    // });
  };
};

const numGenerator = () => {
  const raw = [];
  const result = [];
  const wBallNum = 69;
  const rBallNum = 26;

  // initiate the raw white ball array
  for (let i = 0; i < wBallNum; i++) {
    raw.push(i + 1);
  }

  // random select the first five white balls
  for (let i = 0; i <= 5; i++) {
    const j = Math.floor(Math.random() * (wBallNum - i), 1) + i;
    const temp = raw[i];
    raw[i] = raw[j];
    raw[j] = temp;
  }

  // random select the red ball
  const rBall = Math.floor(Math.random() * (rBallNum - 1), 1) + 1;

  // generate the final result and return
  result.push(raw[0], raw[1], raw[2], raw[3], raw[4], rBall);
  return (result);
};
