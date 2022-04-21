import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import IconFeather from "react-native-vector-icons/Feather";
import IconEntypo from "react-native-vector-icons/Entypo";
import { COLORS } from "../constants";
import { useDispatch, useSelector } from "react-redux";
import {
  signInUser,
  resetAllAuthForms,
  ResetErrorsState,
} from "../redux/User/user.actions.js";
import { gql, useMutation } from "@apollo/client";

const mapState = ({ user }) => ({
  currentUser: user.currentUser,
  signInSuccess: user.signInSuccess,
  token: user.token,
  errors: user.errors,
});

const REGISTER_QUERY = gql`
  mutation SignIn($email: String!, $password: String!) {
    tokenAuth(email: $email, password: $password) {
      success
      errors
      refreshToken
      token
    }
  }
`;

const Login = ({ navigation }) => {
  console.log("Property Loign Screen");
  const { currentUser, signInSuccess, token, errors } = useSelector(mapState);
  console.log("mapState =>", currentUser, signInSuccess, token, errors);
  const dispatch = useDispatch();
  dispatch(ResetErrorsState);
  const [SignIn, { data, loading }] = useMutation(REGISTER_QUERY);

  const [email, onChangeEmail] = useState("");
  const [password, onChangepassword] = useState("");
  const [emailErrors, setEmailErrors] = useState("");
  const [passwordErrors, setPasswordErrors] = useState("");
  const [isSecure, setIsSecure] = useState(true);
  const [iconPasswordName, setIconPasswordName] = useState("eye-with-line");
  const [error, setError] = useState("");
  const [indicatorLoad, setIndicatorLoad] = useState(false);

  useEffect(() => {
    if (signInSuccess) {
      navigation.navigate("Home");
      dispatch(resetAllAuthForms());
      ResetForm();
    }
  }, [signInSuccess]);

  const ResetForm = () => {
    onChangeEmail("");
    onChangepassword("");
    setIsSecure(true);
    setIconPasswordName("eye");
    setError([]);
  };

  const handlePasswordSecure = () => {
    setIsSecure(!isSecure);
    if (isSecure) {
      setIconPasswordName("eye");
    } else {
      setIconPasswordName("eye-with-line");
    }
  };

  const handleRegister = async (e) => {
    var checking_form = "true";
    console.log("From Login ===>", { email, password });
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
    if (checking_form === "true") {
      setIndicatorLoad(true);
      let emailValid = email.toLowerCase();
      await SignIn({
        variables: { email: emailValid, password: password },
      })
        .then((res) => {
          let user = {
            username: "",
            email: emailValid,
            password: password,
          };
          console.log("current Token => ", token);
          console.log("User + Token => ", user, res.data.tokenAuth.token);
          if (res.data.tokenAuth.token) {
            dispatch(signInUser(user, res.data.tokenAuth.token));
            setIndicatorLoad(false);
          } else {
            setError(
              "we do not have any account with this email. try to signed up first"
            );
          }
        })
        .catch((err) => {
          console.log("error line 156", err);
          setError(err);
          setIndicatorLoad(false);
        });
      console.log("DONE");
      setIndicatorLoad(false);
    }
  };
  const handleForget = () => {
    navigation.navigate("Recovery");
  };
  const handleSignUpBtn = () => {
    navigation.navigate("Register");
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.header}>
          <IconFeather
            name="arrow-left"
            size={25}
            color={COLORS.greyColor}
            style={styles.icon_style}
            onPress={() => navigation.goBack()}
          />
        </View>
        <View style={styles.headerTitle}>
          <Text style={styles.headerText1}>Login</Text>
        </View>
        <Text style={styles.fieldErrors2}>{errors}</Text>
        <View style={styles.content}>
          {/* Email Adresse */}
          <View style={styles.inputField}>
            <Text style={styles.label}>Email Address</Text>
            <TextInput
              style={styles.input}
              onChangeText={onChangeEmail}
              value={email}
              textContentType="emailAddress"
              placeholder="demo@demo.com"
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
          <TouchableOpacity style={styles.button1} onPress={handleRegister}>
            {indicatorLoad ? (
              <Text style={styles.signup}>
                <ActivityIndicator size="large" color="#ffffff" />
              </Text>
            ) : (
              <Text style={styles.signup}>Sign In</Text>
            )}
          </TouchableOpacity>
          {error.length > 0 && (
            <Text style={styles.fieldErrors404}>{error} </Text>
          )}
          <TouchableOpacity style={styles.already} onPress={handleForget}>
            <Text style={styles.label2}>Forget Password?</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.already} onPress={handleSignUpBtn}>
            <Text style={styles.label1}>Don't have an Account? </Text>
            <Text style={styles.label2}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  container: {
    flex: 1,
    color: COLORS.main,
    backgroundColor: COLORS.whiteColor,
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
    color: COLORS.greyColor,
    textAlign: "center",
    fontSize: 15,
    marginBottom: 0,
    lineHeight: 20,
  },
  headerText1: {
    color: "black",
    textAlign: "center",
    fontSize: 28,
    textTransform: "uppercase",
    marginBottom: 20,
  },
  content: {
    paddingHorizontal: 40,
    marginTop: 10,
  },
  inputField: {
    paddingTop: 0,
    padding: 5,
    width: "100%",
  },
  label: {
    textAlign: "left",
    fontSize: 16,
    color: COLORS.greyColor,
    marginBottom: 10,
  },
  privacy: {
    textAlign: "left",
    fontSize: 12,
    color: "white",
    // marginBottom: 10,
  },
  label1: {
    textAlign: "left",
    fontSize: 14,
    fontWeight: "600",
    letterSpacing: 0.3,
    color: COLORS.greyColor,
    marginBottom: 10,
  },
  label2: {
    textAlign: "left",
    fontSize: 14,
    fontWeight: "600",
    letterSpacing: 0.3,
    color: COLORS.blueBtn,
    textDecorationStyle: "solid",
    textDecorationColor: COLORS.greyColor,
    marginBottom: 10,
  },
  fieldErrors: {
    marginVertical: 3,
    color: "red",
    fontSize: 10,
  },
  fieldErrors2: {
    marginVertical: 3,
    color: "red",
    fontSize: 10,
    textAlign: "center",
  },
  input: {
    borderRadius: 10,
    fontSize: 14,
    color: COLORS.darkgray,
    borderWidth: 1,
    borderColor: COLORS.greyColor,
    backgroundColor: COLORS.whiteColor,
    paddingVertical: 10,
    paddingLeft: 20,
    width: "100%",
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
  signup: {
    backgroundColor: COLORS.blueBtn,
    color: "white",
    fontSize: 22,
    textAlign: "center",
    paddingVertical: 15,
    borderRadius: 10,
    // marginVertical: 20,
  },
  button1: {
    marginBottom: 20,
    padding: 5,
  },
  already: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  fieldErrors404: {
    textAlign: "center",
    color: "red",
    fontSize: 14,
    marginBottom: 15,
  },
});
