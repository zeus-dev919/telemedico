/* eslint-disable prettier/prettier */
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
import { COLORS } from "../constants";
import auth from "@react-native-firebase/auth";

const Recovery = ({ navigation }) => {
  const [email, onChangeEmail] = useState("");

  const ResetForm = () => {
    onChangeEmail("");
    setError([]);
  };

  const handleReset = async (e) => {
    await auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        ResetForm();
        navigation.navigate("Login");
      });
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
          <Text style={styles.headerText1}>Reset Password</Text>
          {/* <Text style={styles.headerText}>
            Lorem ipsum dolor sit amet, consectuteur
          </Text>
          <Text style={styles.headerText}>
            adipiscing elit, sed do eiusmod tempor
          </Text>
          <Text style={styles.headerText}>incoididunt ut labore</Text> */}
        </View>
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
            />
          </View>

          <TouchableOpacity style={styles.button1} onPress={handleReset}>
            <Text style={styles.signup}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Recovery;

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
    marginTop: 50,
  },
  inputField: {
    paddingTop: 0,
    padding: 5,
    width: "100%",
    marginVertical: 20,
  },
  label: {
    textAlign: "left",
    fontSize: 16,
    color: COLORS.greyColor,
    marginBottom: 10,
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
  signup: {
    backgroundColor: COLORS.blueBtn,
    color: "white",
    fontSize: 22,
    textAlign: "center",
    paddingVertical: 15,
    borderRadius: 10,
  },
  button1: {
    marginBottom: 20,
    padding: 5,
  },
});
