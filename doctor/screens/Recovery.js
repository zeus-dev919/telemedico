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
  Modal,
  Image,
  Pressable,
  Alert,
  ActivityIndicator,
} from "react-native";
import IconFeather from "react-native-vector-icons/Feather";
import { COLORS, icons } from "../constants";
import auth from "@react-native-firebase/auth";
import { gql, useMutation } from "@apollo/client";

const RECOVERY_QUERY = gql`
  mutation Recovery($email: String!) {
    sendPasswordEmail(email: $email) {
      success
      errors
    }
  }
`;

const Recovery = ({ navigation }) => {
  const [email, onChangeEmail] = useState("");
  const [error, setError] = useState("");
  const [doneRegister, setDoneRegister] = useState(false);
  const [Recovery, { data, loading }] = useMutation(RECOVERY_QUERY);
  const [indicatorLoad, setIndicatorLoad] = useState(false);

  const ResetForm = () => {
    onChangeEmail("");
    setError([]);
  };

  const handleReset = async (e) => {
    setIndicatorLoad(true);
    let emailValid = email.toLowerCase();
    emailValid = emailValid.replace(/\s/g, "");
    await Recovery({
      variables: {
        email: emailValid,
      },
    })
      .then((res) => {
        setIndicatorLoad(false);
        console.log("Res =>");
        console.log(res);
        if (res.data.sendPasswordEmail.success) setDoneRegister(true);
      })
      .catch((err) => {
        setIndicatorLoad(false);
        setError("Something went wrong please try again ");
        setError(err);
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
        </View>
        <View style={styles.content}>
          {/* Email Adresse */}
          <View style={styles.inputField}>
            <Text style={styles.label}>Email Address</Text>
            <TextInput
              style={styles.input}
              onChangeText={onChangeEmail}
              value={email}
              placeholder=""
            />
          </View>
          {error.length > 0 && <Text style={styles.error}>{error}</Text>}
          <TouchableOpacity style={styles.button1} onPress={handleReset}>
            {indicatorLoad ? (
              <ActivityIndicator color="#ffffff" />
            ) : (
              <Text style={styles.signup}>Reset Password</Text>
            )}
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
              <Text style={styles.titleModal}>Reset Password</Text>
            </View>
            <Text style={styles.modalText}>If this email exist,</Text>
            <Text style={styles.modalText}>
              Check you email to reset your password.
            </Text>
            <Pressable
              style={styles.signup3}
              onPress={() => {
                setDoneRegister(!doneRegister);
                navigation.navigate("Splash");
              }}
            >
              <Text style={styles.textStyle}>Back Home</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
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
    paddingVertical: 8,
    paddingLeft: 20,
    width: "100%",
  },
  signup: {
    color: "white",
    fontSize: 22,
    textAlign: "center",
  },
  button1: {
    backgroundColor: COLORS.blueBtn,
    marginBottom: 20,
    padding: 5,
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
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
  // error
  error: {
    color: "red",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
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
});
