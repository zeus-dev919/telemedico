import userTypes from "./user.types";
import { auth, db, storage } from "../../firebase/utils";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";
import uuid from "react-native-uuid";
import { collection, addDoc } from "firebase/firestore";

// AUTHENTICATION
export const recoveryUser =
  ({ email }) =>
  async (dispatch) => {
    try {
      await sendPasswordResetEmail(auth, email)
        .then(() => {
          dispatch({
            type: userTypes.USER_RECOVERY_SUCCESS,
            payload: true,
          });
        })
        .catch(() => {
          const err = ["Email Not Found! Please Enter A Valid Email"];
          dispatch({
            type: userTypes.SET_ERRORS,
            payload: err,
          });
        });
    } catch (err) {
      console.log(err);
    }
  };

export const signOutUser = () => async (dispatch) => {
  try {
    signOut(auth).then(() => {
      console.log("User signed out!");
      dispatch({
        type: userTypes.OUT_CURRENT_USER,
      });
      console.log("User Signed out From Action ::");
    });
  } catch (err) {
    console.log("Error from Sign out action !!");
    console.log(err);
  }
};

export const signInUser =
  ({ email, password }) =>
  async (dispatch) => {
    try {
      console.log("From Sign In action");
      await signInWithEmailAndPassword(auth, email, password)
        .then(() => {
          dispatch({
            type: userTypes.USER_SIGN_IN_SUCCESS,
            payload: true,
          });
        })
        .catch((err) => {
          console.log(err);
          const error = ["These credientials dosn't much !!"];
          dispatch({
            type: userTypes.SET_ERRORS,
            payload: error,
          });
        });
    } catch (err) {
      console.log("from catch in login redux actions");
      const error = ["Login problem"];
      dispatch({
        type: userTypes.SET_ERRORS,
        payload: error,
      });
    }
  };

export const signUpUser =
  ({ firstName, email, password }) =>
  async (dispatch) => {
    let rule = 0;
    let createdAt = new Date();
    let updatedAt = new Date();
    let deletedAt = new Date();
    let myObj = {
      rule: rule,
      fullname: firstName,
      email: email,
      password: password,
      createdAt: createdAt,
      updatedAt: updatedAt,
      deletedAt: deletedAt,
    };
    console.log("MyObj => ", myObj);
    try {
      console.log("Line 118 ACTION");
      await createUserWithEmailAndPassword(auth, email, password)
        .then(async () => {
          console.log("Line 122 ACTION");
          const docRef = await addDoc(collection(db, "users"), {
            rule: rule,
            fullname: firstName,
            email: email,
            password: password,
            createdAt: createdAt,
            updatedAt: updatedAt,
            deletedAt: deletedAt,
          });
          console.log("Document written with ID: ", docRef.id);
          dispatch({
            type: userTypes.USER_SIGN_UP_SUCCESS,
            payload: true,
          });
        })
        .catch((err) => {
          if (err.code === "auth/email-already-in-use") {
            const error = "This email address is already in use!";
            console.log(error);
            dispatch({
              type: userTypes.SET_ERRORS,
              payload: error,
            });
          }
          if (err.code === "auth/invalid-email") {
            const error = "This email address is invalid!";
            console.log(error);
            dispatch({
              type: userTypes.SET_ERRORS,
              payload: error,
            });
          }
          console.log(err);
        });
    } catch (err) {
      const error = "Please check your information again";
      dispatch({
        type: userTypes.SET_ERRORS,
        payload: error,
      });
      console.log(err);
    }
  };

// PROPERTY
export const fetchUser = () => async (dispatch) => {
  try {
    console.log("From fetchContact Action");
    const { IDFound, currentID } = await isPropertyIdFound();
    console.log("HERE FROM isPropertyIdFound()........................");
    console.log({ IDFound, currentID });
    if (IDFound) {
      const contactsListRef = firestore().doc(`property/${currentID}`);
      const contactsList = await contactsListRef.get();
      const contactsArray = contactsList.data();
      dispatch({
        type: userTypes.FETCH_PROPERTY,
        payload: contactsArray,
      });
    } else {
      const error = "Something Went Wrong !!";
      dispatch({
        type: userTypes.SET_ERRORS,
        payload: error,
      });
    }
  } catch (err) {
    console.log("error from fetchPrperty catch !!");
    console.log(err);
  }
};
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
