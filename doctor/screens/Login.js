import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
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

const mapState = ({ user }) => ({
  currentProperty: user.currentProperty,
  propertySignInSuccess: user.propertySignInSuccess,
  errors: user.errors,
});

const Login = ({ navigation }) => {
  console.log("Property Loign Screen");
  const { currentProperty, propertySignInSuccess, errors } =
    useSelector(mapState);
  const dispatch = useDispatch();
  dispatch(ResetErrorsState);

  const [email, onChangeEmail] = useState("Alex@gmail.com");
  const [password, onChangepassword] = useState("hellodude");
  const [emailErrors, setEmailErrors] = useState("");
  const [passwordErrors, setPasswordErrors] = useState("");
  const [isSecure, setIsSecure] = useState(true);
  const [iconPasswordName, setIconPasswordName] = useState("eye-with-line");
  const [error, setError] = useState("");

  useEffect(() => {
    if (propertySignInSuccess && currentProperty) {
      ResetForm();
      dispatch(resetAllAuthForms());
      navigation.navigate("Home");
    }
  }, [propertySignInSuccess]);

  useEffect(() => {
    if (Array.isArray(errors) && errors.length > 0) {
      setError(errors);
    }
  }, [propertySignInSuccess]);

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

  useEffect(() => {
    console.log("From Login ===>", { email, password });
  }, [email, password]);

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
      dispatch(signInUser({ email, password }));
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
          {/* <Text  
            style={styles.headerText}
          >Lorem ipsum dolor sit amet, consectuteur</Text>
          <Text  
            style={styles.headerText}
          >adipiscing elit, sed do eiusmod tempor</Text>
          <Text  
            style={styles.headerText}
          >incoididunt ut labore</Text> */}
        </View>
        <Text style={styles.fieldErrors2}>{errors}</Text>
        <View style={styles.content}>
          {/* Email Adresse */}
          <View style={styles.inputField}>
            <Text style={styles.label}>Email Adresse</Text>
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
            <Text style={styles.signup}>Sign In</Text>
          </TouchableOpacity>

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
    marginTop: 30,
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
    marginBottom: 25,
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
    color: COLORS.redColor,
    fontSize: 12,
  },
  fieldErrors2: {
    marginVertical: 3,
    color: COLORS.darkRedColor,
    fontSize: 14,
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
  terms: {
    flexDirection: "row",
    alignItems: "center",
  },
  checkbox: {
    marginRight: 10,
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
    marginBottom: 20,
  },
});
