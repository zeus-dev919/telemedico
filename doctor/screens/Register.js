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
} from "react-native";
import IconFeather from "react-native-vector-icons/Feather";
import IconEntypo from "react-native-vector-icons/Entypo";
import Checkbox from "expo-checkbox";
import { COLORS } from "../constants";
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
  console.log("Property Register Screen");
  const { currentUser, signUpSuccess, token, errors } =
    useSelector(mapState);
  console.log("mapState =>", currentUser, signUpSuccess, token, errors);
  const dispatch = useDispatch();
  dispatch(ResetErrorsState);
  const [SignUp, { data, loading }] = useMutation(REGISTER_QUERY);

  const [firstName, onChangefirstName] = useState("user218");
  const [email, onChangeEmail] = useState("user218@gmail.com");
  const [password, onChangepassword] = useState("hellodude");
  const [isSelected, setSelected] = useState(true);
  const [isSelected1, setSelected1] = useState(true);
  const [isSecure, setIsSecure] = useState(true);
  const [iconPasswordName, setIconPasswordName] = useState("eye-with-line");
  const [error, setError] = useState(null);
  const [indicatorLoad, setIndicatorLoad] = useState(false);
  // const [_token, setToken] = useState(false);
  // Hnadle Errors
  const [firstNameErrors, setFirstNameErrors] = useState("");
  const [emailErrors, setEmailErrors] = useState("");
  const [passwordErrors, setPasswordErrors] = useState("");
  const [termsErrors, setTermsErrors] = useState("");
  const [terms2Errors, setTerms2Errors] = useState("");

  useEffect(() => {
    if (signUpSuccess) {
      ResetForm();
      navigation.navigate("Login");
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
      await SignUp({
        variables: { email: email, firstName: firstName, password: password },
      })
        .then((res) => {
          let user = {
            email: email,
            firstName: firstName,
            password: password,
          };
          console.log("User + Token => ", user, res.data.register.token);
          dispatch(signUpUser(user, res.data.register.token));
          setIndicatorLoad(false);
        })
        .catch((err) => {
          console.log("error line 156", err);
        });
      console.log("DONE");
    }
  };
  const handleSignIn = () => {
    navigation.navigate("Login");
  };
  const _handlePressTerms = () => {
    WebBrowser.openBrowserAsync("http://medipocket.world/privacy-policy/");
  };
  const _handlePressTerms1 = () => {
    WebBrowser.openBrowserAsync("http://medipocket.world/terms-conditions/");
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
              placeholder="Full Name"
              placeholderTextColor={"grey"}
            />
            <Text style={styles.fieldErrors}>{firstNameErrors}</Text>
          </View>
          {/* Email Adress */}
          <View style={styles.inputField}>
            <Text style={styles.label}>Email Adress</Text>
            <TextInput
              style={styles.input}
              onChangeText={onChangeEmail}
              value={email}
              textContentType="emailAddress"
              placeholder="Email"
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
                placeholder="Password"
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
              <Text style={styles.signup}>
                <ActivityIndicator size="large" color="#ffffff" />
              </Text>
            ) : (
              <Text style={styles.signup}>Submit</Text>
            )}
          </TouchableOpacity>
          <Text style={styles.fieldErrors2}>{errors}</Text>
          <TouchableOpacity style={styles.already} onPress={handleSignIn}>
            <Text style={styles.label1}>Already have an Account? </Text>
            <Text style={styles.label2}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
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
    fontSize: 10,
    color: "black",
    marginRight: 3,
    // marginBottom: 10,
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
  input: {
    borderRadius: 10,
    fontSize: 14,
    color: COLORS.greyColor,
    backgroundColor: "white",
    paddingVertical: 10,
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
    paddingVertical: 15,
    borderRadius: 10,
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
  button1: {
    marginVertical: 15,
    padding: 5,
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
});
