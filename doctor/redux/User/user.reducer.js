import userTypes from "./user.types";

const INITIAL_STATE = {
  currentUser: false,
  signInSuccess: false,
  signUpSuccess: false,
  resetPasswordSuccess: false,
  userD: null,
  token: null,
  errors: [],
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // AUTH
    case userTypes.SET_CURRENT_USER_OUT:
      return {
        ...state,
        currentUser: false,
      };
    // SIGN
    case userTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        signInSuccess: true,
        currentUser: true,
        userD: action.payload,
      };
    case userTypes.SIGN_UP_SUCCESS:
      return {
        ...state,
        signUpSuccess: true,
        userD: action.payload,
      };
    case userTypes.RESET_PASSWORD_SUCCESS:
      return {
        ...state,
        resetPasswordSuccess: action.payload,
      };
    // TOKEN
    case userTypes.SET_TOKEN:
      return {
        ...state,
        token: action.payload,
      };
    case userTypes.RESET_TOKEN:
      return {
        ...state,
        token: null,
      };

    // ERRORS
    case userTypes.RESET_ERRORSSTATE_FORMS:
      return {
        ...state,
        errors: [],
      };
    case userTypes.SET_ERRORS:
      return {
        ...state,
        errors: action.payload,
      };
    case userTypes.RESET_STATES:
      return {
        currentUser: false,
        signInSuccess: false,
        signUpSuccess: false,
        resetPasswordSuccess: false,
        userD: null,
        errors: [],
      };
    // DEFAULT
    default:
      return state;
  }
};
export default userReducer;
