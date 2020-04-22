import axios from 'axios';
import { AUTH_USER, AUTH_ERROR } from './types';


export const signup = (formProps, callBack) => async (dispatch) => {

  try {
    const response = await axios.post('http://localhost:3090/signup', formProps)
    dispatch({ type: AUTH_USER, payload: response.data.token });
    localStorage.setItem('token', response.data.token );
    callBack();
  } catch (e) {

    dispatch({ type: AUTH_ERROR, payload: e.response.data.error})
  }
}

export const signout = () => {
  localStorage.removeItem('token');
  return {
    type: AUTH_USER,
    payload: ''
  }
}


export const signin = (formProps) => (dispatch) => {
  console.log('signin action ');
  console.log(formProps);
}
