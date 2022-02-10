import userTypes from "./user.types";

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
export const signInUser = (user, token) => async (dispatch) => {
  try {
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
export const signOutUser = () => (dispatch) => {
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
    console.log("error from fetchPrperty catch !!");
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
