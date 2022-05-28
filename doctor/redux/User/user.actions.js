import userTypes from "./user.types";
import { storeData, removeStoreData, getStorage } from '../../util/AsyncStorage';

// PROPERTY
export const signUpUser = (user, token) => async (dispatch) => {
  try {
    dispatch({
      type: userTypes.SIGN_UP_SUCCESS,
      payload: user,
    });
    dispatch({
      type: userTypes.SET_TOKEN,
      payload: token,
    });
  } catch (err) {
    console.log(err);
  }
};
export const setUserame = (username, email, password) => async (dispatch) => {
  try {
    dispatch({
      type: userTypes.SET_USERNAME,
      payload: { username, email, password },
    });
  } catch (err) {
    console.log(err);
  }
};
export const signInUser = (user, token) => async (dispatch) => {
  try {
    await storeData({
      key: 'user_info',
      data: {
        isLogin: true,
        user, token,
      }
    });
    console.log("User from signInUser");
    console.log(user);
    dispatch({
      type: userTypes.SIGN_IN_SUCCESS,
      payload: user,
    });
    dispatch({
      type: userTypes.SET_TOKEN,
      payload: token,
    });
  } catch (err) {
    console.log(err);
  }
};
export const signOutUser = () => async (dispatch) => {

  await removeStoreData('user_info')
  try {
    dispatch({
      type: userTypes.SET_CURRENT_USER_OUT,
    });
  } catch (err) {
    console.log(err);
  }
};

export const setUser = (user) => async (dispatch) => {
  try {
    dispatch({
      type: userTypes.SET_USER,
      payload: user,
    });
  } catch (err) {
    console.log("error from setUser catch !!");
    console.log(err);
  }
};
export const setProfile = (user) => async (dispatch) => {
  console.log("Here setProfile Redux");
  try {
    dispatch({
      type: userTypes.SET_PROFILE_DATA,
      payload: user,
    });
  } catch (err) {
    console.log("error from setProfile catch !!");
    console.log(err);
  }
};
export const setDoctor = (user) => async (dispatch) => {
  try {
    dispatch({
      type: userTypes.SET_DOCTOR,
      payload: user,
    });
  } catch (err) {
    console.log("error from setDoctor catch !!");
    console.log(err);
  }
};
export const getUser = (email) => async (dispatch) => {
  try {
    console.log("Get User");
  } catch (err) {
    console.log("error from fetchPrperty catch !!");
    console.log(err);
  }
};
export const getPrevRoute = (value) => async (dispatch) => {
  try {
    console.log("getPrevRoute", value);
    dispatch({
      type: userTypes.SET_PREV_ROUTE,
      payload: value,
    });
  } catch (err) {
    console.log("error from fetchPrperty catch !!");
    console.log(err);
  }
};
// Token
export const resetToken = () => ({
  type: userTypes.RESET_TOKEN,
});
// OTHERS
export const resetAllAuthForms = () => ({
  type: userTypes.RESET_AUTH_FORMS,
});
export const ResetErrorsState = () => ({
  type: userTypes.RESET_ERRORSSTATE_FORMS,
});
export const ResetStates = () => ({
  type: userTypes.RESET_STATES,
});
