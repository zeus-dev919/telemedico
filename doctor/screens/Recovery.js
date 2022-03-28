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

  const ResetForm = () => {
    onChangeEmail("");
    setError([]);
  };

  const handleReset = async (e) => {
    // await auth()
    //   .sendPasswordResetEmail(email)
    //   .then(() => {
    //     ResetForm();
    //     navigation.navigate("Login");
    //   });
    // await fetch(`https://app.medipocket.world/reset-password/?email=${email}`, {
    //   method: "GET",
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json",
    //   },
    // })
    //   .then(() => {
    //     setDoneRegister(true);
    //   })
    //   .catch(() => {
    //     setError("Something went wrong please try again ");
    //   });
    await Recovery({
      variables: {
        email: email,
      },
    })
      .then((res) => {
        if (res.data.sendPasswordResetEmail.success) setDoneRegister(true);
      })
      .catch(() => {
        setError("Something went wrong please try again ");
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
            <Text style={styles.label}>Email Adresse</Text>
            <TextInput
              style={styles.input}
              onChangeText={onChangeEmail}
              value={email}
              textContentType="emailAddress"
              placeholder="demo@demo.com"
            />
          </View>
          {error.length > 0 && <Text style={styles.error}>{error}</Text>}
          <TouchableOpacity style={styles.button1} onPress={handleReset}>
            <Text style={styles.signup}>Reset Password</Text>
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
                source={icons.accept}
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
                navigation.navigate("splash");
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
