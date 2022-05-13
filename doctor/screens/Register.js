import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  Dimensions,
  ActivityIndicator,
  Modal,
  Pressable,
  Image,
  Alert,
} from "react-native";
import IconFeather from "react-native-vector-icons/Feather";
import IconEntypo from "react-native-vector-icons/Entypo";
import Checkbox from "expo-checkbox";
import { icons, COLORS } from "../constants";
import { useDispatch, useSelector } from "react-redux";
import {
  signUpUser,
  resetAllAuthForms,
  ResetErrorsState,
} from "../redux/User/user.actions";
import * as WebBrowser from "expo-web-browser";
import { gql, useMutation } from "@apollo/client";

const mapState = ({ user }) => ({
  currentUser: user.currentUser,
  signUpSuccess: user.signUpSuccess,
  token: user.token,
  errors: user.errors,
});

const REGISTER_QUERY = gql`
  mutation SignUp($email: String!, $firstName: String!, $password: String!) {
    register(
      email: $email
      username: $firstName
      password1: $password
      password2: $password
    ) {
      success
      errors
      refreshToken
      token
    }
  }
`;

const Register = ({ navigation }) => {
  const { currentUser, signUpSuccess, token, errors } = useSelector(mapState);
  const dispatch = useDispatch();
  dispatch(ResetErrorsState);
  const [SignUp, { data, loading }] = useMutation(REGISTER_QUERY);

  const [doneRegister, setDoneRegister] = useState(false);
  const [firstName, onChangefirstName] = useState("");
  const [email, onChangeEmail] = useState("");
  const [password, onChangepassword] = useState("");
  const [isSelected, setSelected] = useState(true);
  const [isSelected1, setSelected1] = useState(true);
  const [isSecure, setIsSecure] = useState(true);
  const [iconPasswordName, setIconPasswordName] = useState("eye-with-line");
  const [error, setError] = useState(null);
  const [indicatorLoad, setIndicatorLoad] = useState(false);
  const [firstNameErrors, setFirstNameErrors] = useState("");
  const [emailErrors, setEmailErrors] = useState("");
  const [passwordErrors, setPasswordErrors] = useState("");
  const [termsErrors, setTermsErrors] = useState("");
  const [terms2Errors, setTerms2Errors] = useState("");
  const [grapherror1, setGraphError1] = useState(null);
  const [grapherror2, setGraphError2] = useState(null);
  const [grapherror3, setGraphError3] = useState(null);

  useEffect(() => {
    if (signUpSuccess) {
      ResetForm();
      setDoneRegister(false);
      dispatch(resetAllAuthForms);
    }
  }, [signUpSuccess]);

  const ResetForm = () => {
    onChangefirstName("");
    onChangeEmail("");
    onChangepassword("");
    setIsSecure(true);
    setIconPasswordName("eye");
    setSelected(false);
    setSelected1(false);
    setError([]);
  };

  const handlePasswordSecure = () => {
    setIsSecure(!isSecure);
    if (isSecure) {
      setIconPasswordName("eye-with-line");
    } else {
      setIconPasswordName("eye");
    }
  };

  const handleRegister = async (e) => {
    var checking_form = "true";
    if (firstName.length === 0) {
      setFirstNameErrors("* First Name Field Required");
      checking_form = "false";
    } else {
      setFirstNameErrors("");
    }
    if (email.length === 0 || email.indexOf("@") === -1) {
      setEmailErrors("* Email Field Required");
      checking_form = "false";
    } else {
      setEmailErrors("");
    }
    if (password.length < 6) {
      setPasswordErrors("* Password Field Required, 6 caracter min");
      checking_form = "false";
    } else {
      setPasswordErrors("");
    }
    if (isSelected !== true) {
      setTermsErrors("* Agree to the Terms and Conditions is required");
      checking_form = "false";
    } else {
      setTermsErrors("");
    }
    if (isSelected1 !== true) {
      setTerms2Errors("* Agree to the Conscent Form is required");
      checking_form = "false";
    } else {
      setTerms2Errors("");
    }
    if (checking_form === "true") {
      setIndicatorLoad(true);
      let emailValid = email.toLowerCase();
      emailValid = emailValid.replace(/\s/g, "");
      let firstName2 = firstName;
      firstName2 = firstName2.replace(/ /g, "_");
      console.log(" Submitted => ");
      console.log({
        email: emailValid,
        firstName: firstName2,
        password: password,
      });

      await SignUp({
        variables: {
          email: emailValid,
          firstName: firstName2,
          password: password,
        },
      })
        .then((res) => {
          console.log("Response from register: ");
          console.log(res);
          let user = {
            email: emailValid,
            firstName: firstName,
            password: password,
          };
          setFirstNameErrors(
            res.data.register?.errors?.username
              ? res.data.register?.errors?.username[0]?.message
              : ""
          );
          setEmailErrors(
            res.data.register?.errors?.email
              ? res.data.register?.errors?.email[0]?.message
              : ""
          );
          setPasswordErrors(
            res.data.register?.errors?.password2
              ? res.data.register?.errors?.password2[0]?.message
              : ""
          );
          if (!res.data.register.errors) {
            dispatch(signUpUser(user, res.data.register.token));
          }
          setIndicatorLoad(false);
        })
        .catch((err) => {
          console.log("error line 156", err);
          setIndicatorLoad(false);
        });
      console.log("DONE");
      setIndicatorLoad(false);
    }
  };
  const handleSignIn = () => {
    navigation.navigate("Login");
  };
  const _handlePressTerms = () => {
    WebBrowser.openBrowserAsync("https://medipocket.world/privacy-policy/");
  };
  const _handlePressTerms1 = () => {
    WebBrowser.openBrowserAsync("https://medipocket.world/terms-conditions/");
  };
  const _handlePressConscent = () => {
    navigation.navigate("Conscent");
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.header}>
          <IconFeather
            name="arrow-left"
            size={25}
            color="black"
            style={styles.icon_style}
            onPress={() => navigation.goBack()}
          />
        </View>
        <View style={styles.headerTitle}>
          <Text style={styles.headerText1}>Register</Text>
          <Text style={styles.headerText}>Create Account</Text>
          <Text style={styles.fieldErrors3}>{error}</Text>
        </View>
        <View style={styles.content}>
          {/* First Name */}
          <View style={styles.inputField}>
            <Text style={styles.label}>Full Name</Text>
            <TextInput
              style={styles.input}
              onChangeText={onChangefirstName}
              value={firstName}
              placeholder=""
              placeholderTextColor={"grey"}
            />
            <Text style={styles.fieldErrors}>{firstNameErrors}</Text>
          </View>
          {/* Email Adress */}
          <View style={styles.inputField}>
            <Text style={styles.label}>Email Address</Text>
            <TextInput
              style={styles.input}
              onChangeText={onChangeEmail}
              value={email}
              placeholder=""
              placeholderTextColor={"grey"}
            />
            <Text style={styles.fieldErrors}>{emailErrors}</Text>
          </View>
          {/* Password */}
          <View style={styles.inputField}>
            <Text style={styles.label}>Password</Text>
            <View style={styles.passwordField}>
              <TextInput
                style={styles.input}
                onChangeText={onChangepassword}
                value={password}
                secureTextEntry={isSecure}
                placeholder=""
                placeholderTextColor={"grey"}
              />
              <IconEntypo
                style={styles.eyeIcon}
                name={iconPasswordName}
                fontSize={25}
                color={COLORS.main}
                onPress={handlePasswordSecure}
              />
            </View>
            <Text style={styles.fieldErrors}>{passwordErrors}</Text>
            <Text style={styles.privacy}>
              * Uppercase characters (A-Z){"\n"}* Lowercase characters (a-z)
              {"\n"}* Digits (0-9){"\n"}* Special characters (~!@#$%^&*_-+=`|\()
              {"{"}
              {"}"}
              {"["}
              {"]"}:;"',.?/)
            </Text>
          </View>
          {/* Terms and Condition */}
          <View style={styles.terms}>
            <Checkbox
              value={isSelected}
              onValueChange={setSelected}
              style={styles.checkbox}
              color={"#40e0d0"}
            />
            {/* <View style={{ flexDirection: "row", alignItems: "center" }}> */}
            <Text style={styles.privacy}>I agree with</Text>
            <Text
              onPress={_handlePressTerms}
              style={[styles.privacy, { textDecorationLine: "underline" }]}
            >
              the privacy policies,
            </Text>
            <Text
              onPress={_handlePressTerms1}
              style={[styles.privacy, { textDecorationLine: "underline" }]}
            >
              terms & conditions
            </Text>
            {/* </View> */}
          </View>
          <Text style={styles.fieldErrors}>{termsErrors}</Text>
          {/* Terms and Condition */}
          <View style={styles.terms}>
            <Checkbox
              value={isSelected1}
              onValueChange={setSelected1}
              style={styles.checkbox}
              color={"#40e0d0"}
            />
            {/* <View style={{ flexDirection: "row", alignItems: "center" }}> */}
            <Text style={styles.privacy}>
              Yes, I consent as user, patient and caregiver to avail
              consultation via telemedicine with foreign specialists through
              MediPocket platform
              <Text
                onPress={_handlePressConscent}
                style={[styles.privacy, { textDecorationLine: "underline" }]}
              >
                Conscent Form
              </Text>
            </Text>
            {/* </View> */}
          </View>
          <Text style={styles.fieldErrors}>{terms2Errors}</Text>
          <TouchableOpacity style={styles.button1} onPress={handleRegister}>
            {indicatorLoad ? (
              <ActivityIndicator color="#ffffff" />
            ) : (
              <Text style={styles.signup}>Submit</Text>
            )}
          </TouchableOpacity>
          {/* {grapherror1 !== null && grapherror1.length !== 0 && (
            <Text style={styles.fieldErrors404}>{grapherror1}</Text>
          )}
          {grapherror2 !== null && grapherror2.length !== 0 && (
            <Text style={styles.fieldErrors404}>{grapherror2}</Text>
          )}
          {grapherror3 !== null && grapherror3.length !== 0 && (
            <Text style={styles.fieldErrors404}>{grapherror3}</Text>
          )} */}
          <Text style={styles.fieldErrors2}>{errors}</Text>
          <TouchableOpacity style={styles.already} onPress={handleSignIn}>
            <Text style={styles.label1}>Already have an Account? </Text>
            <Text style={styles.label2}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <Modal
        animationType="slide"
        transparent={true}
        visible={doneRegister}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setDoneRegister(!doneRegister);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.ModelTitleView}>
              <Image
                style={styles.ModelIcon}
                source={{
                  uri: "https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/assets%2Ficons%2Fpayments%2Faccept.png?alt=media&token=3d1f009d-14be-45d9-80cb-75e1d9878a45",
                }}
                resizeMode="contain"
              />
              <Text style={styles.titleModal}>Registration done!</Text>
            </View>
            <Text style={styles.modalText}>If this email is yours,</Text>
            <Text style={styles.modalText}>
              Check you email to activate your account.
            </Text>
            <Pressable
              style={styles.signup3}
              onPress={() => {
                setDoneRegister(!doneRegister);
                navigation.navigate("Login");
              }}
            >
              <Text style={styles.textStyle}>Login</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default Register;

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: "transparent",
  },
  container: {
    flex: 1,
    // backgroundColor: "transparent",
  },
  bgContainter: {
    width: Dimensions.get("window").width, //for full screen
    height: Dimensions.get("window").height, //for full screen
  },
  fixed: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 5,
  },
  icon_style: {
    flex: 0.45,
    padding: 20,
    // marginTop: 30,
  },
  headerTitle: {
    paddingVertical: 10,
  },
  headerText: {
    color: "black",
    textAlign: "center",
    fontSize: 18,
    // marginBottom: 10,
  },
  fieldErrors2: {
    color: "red",
    textAlign: "center",
    fontSize: 10,
    marginBottom: 10,
  },
  fieldErrors3: {
    color: "red",
    textAlign: "center",
    fontSize: 12,
    marginBottom: 10,
    marginTop: 20,
  },
  headerText1: {
    color: "black",
    textAlign: "center",
    fontSize: 28,
    textTransform: "uppercase",
    marginBottom: 5,
  },
  content: {
    paddingHorizontal: 40,
    marginTop: 20,
  },
  inputField: {
    paddingTop: 0,
    padding: 5,
    width: "100%",
  },
  label: {
    textAlign: "left",
    fontSize: 16,
    color: "black",
    marginBottom: 10,
  },
  privacy: {
    textAlign: "left",
    fontSize: 12,
    color: "black",
    marginRight: 3,
    // marginTop: 10,
  },
  label1: {
    textAlign: "left",
    fontSize: 14,
    color: "black",
    marginBottom: 10,
  },
  label2: {
    textAlign: "left",
    fontSize: 14,
    color: COLORS.blueBtn,
    textDecorationStyle: "solid",
    textDecorationColor: "black",
    marginBottom: 10,
  },
  fieldErrors: {
    color: "red",
    fontSize: 10,
  },
  fieldErrors404: {
    textAlign: "center",
    color: "red",
    fontSize: 14,
  },
  input: {
    borderRadius: 10,
    fontSize: 14,
    color: COLORS.greyColor,
    backgroundColor: "white",
    paddingVertical: 8,
    paddingLeft: 20,
    width: "100%",
    borderWidth: 1,
    borderColor: "grey",
  },
  passwordField: {
    position: "relative",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  eyeIcon: {
    position: "absolute",
    right: 20,
    fontSize: 25,
  },
  terms: {
    flexDirection: "row",
    // justifyContent: "flex-start",
    // alignItems: "center",
    padding: 5,
    maxWidth: "100%",
  },
  checkbox: {
    marginRight: 10,
    borderRadius: 6,
  },
  signup: {
    backgroundColor: COLORS.blueBtn,
    color: "white",
    fontSize: 22,
    textAlign: "center",
    // paddingVertical: 15,
    // borderRadius: 10,
    // marginVertical: 20,
  },
  signup2: {
    backgroundColor: "grey",
    color: "white",
    fontSize: 22,
    textAlign: "center",
    paddingVertical: 15,
    borderRadius: 10,
    // marginVertical: 20,
  },
  signup3: {
    backgroundColor: COLORS.blueBtn,
    color: "white",
    fontSize: 22,
    textAlign: "center",
    paddingVertical: 10,
    borderRadius: 10,
    paddingHorizontal: 50,
    // marginVertical: 20,
  },
  button1: {
    backgroundColor: COLORS.blueBtn,
    marginBottom: 20,
    padding: 5,
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  errors: {
    paddingVertical: 10,
  },
  error: {
    color: "red",
    fontSize: 18,
    fontWeight: "600",
  },
  already: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 50,
  },
  //   Model
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 20,
    textAlign: "center",
  },
  ModelTitleView: {
    flexDirection: "row",
    marginBottom: 20,
  },
  titleModal: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  ModelIcon: {
    width: 22,
    height: 22,
    marginRight: 10,
    marginTop: 2,
  },
});
