import * as AuthType from './auth.types';

export const loadUserStart = () => ({
  type: AuthType.LOAD_USER_START
});

export const loadUserSuccess = (currentUser) => ({
  type: AuthType.LOAD_USER_SUCCESS,
  payload: currentUser
});

export const loadUserFail = (error) => ({
  type: AuthType.LOAD_USER_FAILURE,
  payload: error
});

export const signinStart = (formData, callback) => ({
  type: AuthType.SIGN_IN_START,
  payload: { formData, callback }
});

export const signinSuccess = (data) => ({
  type: AuthType.SIGN_IN_SUCCESS,
  payload: data
});

export const signinFail = (error) => ({
  type: AuthType.SIGN_IN_FAILURE,
  payload: error
});

export const signupStart = (formData, callback) => ({
  type: AuthType.SIGN_UP_START,
  payload: { formData, callback }
});

export const signupSuccess = (user) => ({
  type: AuthType.SIGN_UP_SUCCESS,
  payload: user
});

export const signupFail = (error) => ({
  type: AuthType.SIGN_UP_FAILURE,
  payload: error
});

export const signoutStart = (callback) => ({
  type: AuthType.SIGN_OUT_START,
  payload: { callback }
});

export const signoutSuccess = () => ({
  type: AuthType.SIGN_OUT_SUCCESS
});

export const signoutFail = (error) => ({
  type: AuthType.SIGN_OUT_FAILURE,
  payload: error
});

export const clearErrorLog = () => ({
  type: AuthType.CLEAR_ERROR_LOG
});
