import React, { useState, useEffect } from "react";
import {
  Alert,
  Modal,
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { COLORS, icons } from "../../constants";
import Checkbox from "expo-checkbox";
import { CardField, useStripe } from "@stripe/stripe-react-native";
import { gql, useQuery } from "@apollo/client";

const ME_QUERY = gql`
  query {
    me {
      email
    }
  }
`;

const PayCardsModel = (props) => {
  const { pay, navigation } = props;
  const { initPaymentSheet, presentPaymentSheet } = useStripe();
  const { data, loading } = useQuery(ME_QUERY);
  // data
  const [isSelected, setSelected] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [success, setSuccess] = useState(false);
  //   Error data
  const [isSelectedError, setSelectedError] = useState(false);

  const fetchPaymentSheetParams = async (data = {}) => {
    const response = await fetch(
      `http://164.52.218.166:8000/payments/save-stripe-info/`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    const { paymentIntent, ephemeralKey, customer } = await response.json();

    return {
      paymentIntent,
      ephemeralKey,
      customer,
    };
  };

  const initializePaymentSheet = async () => {
    const { paymentIntent, ephemeralKey, customer, publishableKey } =
      await fetchPaymentSheetParams();

    const { error } = await initPaymentSheet({
      customerId: customer,
      customerEphemeralKeySecret: ephemeralKey,
      paymentIntentClientSecret: paymentIntent,
      // Set `allowsDelayedPaymentMethods` to true if your business can handle payment
      //methods that complete payment after a delay, like SEPA Debit and Sofort.
      allowsDelayedPaymentMethods: true,
    });
    if (!error) {
      setLoading(true);
    }
  };

  const openPaymentSheet = async () => {
    const { error } = await presentPaymentSheet();

    if (error) {
      Alert.alert(`Error code: ${error.code}`, error.message);
    } else {
      Alert.alert("Success", "Your order is confirmed!");
    }
  };

  useEffect(() => {
    initializePaymentSheet();
  }, []);

  const handleRegister = () => {
    let check = true;
    if (name.length === 0) {
      setNameError("* Card Name Field is required");
      check = false;
    } else {
      setNameError("");
    }
    if (number.length === 0) {
      setNumberError("* Card Number Field is required");
      check = false;
    } else {
      setNumberError("");
    }
    if (date.length === 0) {
      setDateError("* Expiration Date Field is required");
      check = false;
    } else {
      setDateError("");
    }
    if (cvc.length === 0) {
      setCvcError("* CV Code Field is required");
      check = false;
    } else {
      setCvcError("");
    }
    if (!isSelected) {
      setSelectedError("* Agree to the Terms & Conditions is required");
      check = false;
    } else {
      setSelectedError("");
    }
    if (check) {
      console.log("DATA =>", { name, number, isSelected });
      setModalVisible(true);
      setSuccess(true);
    }
  };
  const handlePayment = () => {
    let check = true;
    if (!isSelected) {
      setSelectedError("* Agree to the Terms & Conditions is required");
      check = false;
    } else {
      setSelectedError("");
    }
    if (check) {
      let amount = 100;
      if (pay !== "--") amount = pay;
      fetchPaymentSheetParams({
        email: data.me.email,
        paymentMethod: "card",
        currency: 'pln',
        amount: amount,
      }).then((data) => {
        console.log("data", data);
      });
      setModalVisible(true);
      setSuccess(true);
    }
  };
  return (
    <>
      {/* Stripe */}
      <CardField
        postalCodeEnabled={true}
        placeholder={{
          number: "4242 4242 4242 4242",
        }}
        cardStyle={{
          backgroundColor: "#FFFFFF",
          textColor: "#000000",
        }}
        style={{
          width: "100%",
          height: 50,
          marginVertical: 30,
          borderRadius: 8,
        }}
        onCardChange={(cardDetails) => {
          console.log("cardDetails", cardDetails);
        }}
        onFocus={(focusedField) => {
          console.log("focusField", focusedField);
        }}
      />
      {/* Terms and Condition */}
      <View style={styles.terms}>
        <Checkbox
          value={isSelected}
          onValueChange={setSelected}
          style={styles.checkbox}
          color={"#40e0d0"}
        />
        <Text style={styles.privacy}>Agree to the Terms & Conditions</Text>
      </View>
      {isSelectedError.length === 0 ? null : (
        <Text style={styles.error}>{isSelectedError}</Text>
      )}
      {/* Pay */}
      <TouchableOpacity style={styles.button1} onPress={handlePayment}>
        <Text style={styles.signup}>Pay {pay}$</Text>
      </TouchableOpacity>
      {!success ? (
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Hello World!</Text>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>Hide Modal</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      ) : (
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
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
                <Text style={styles.titleModal}>
                  Payment Successfully done!
                </Text>
              </View>
              <Text style={styles.titleModal}>Note!</Text>
              <Text style={styles.modalText}>
                Your specialists have been informed of your appointment request!
                Please fill the Patient Intake Form for your specialists to know
                about your health and put 5 main questions you want to address
                during the consultation
              </Text>
              <Pressable
                style={styles.signup2}
                onPress={() => {
                  setModalVisible(!modalVisible);
                  navigation.navigate("intakeForm");
                }}
              >
                <Text style={styles.textStyle}>Patient Intake Form</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      )}
      {/* {success ? (
        <PaySuccessModel status={true} />
      ) : (
        <PaySuccessModel status="failed" />
      )} */}
    </>
  );
};

export default PayCardsModel;

const styles = StyleSheet.create({
  payIcons: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 15,
    width: "100%",
    backgroundColor: "white",
    padding: 10,
    borderRadius: 20,
  },
  payIconContainer: {
    position: "relative",
    width: "33%",
    alignItems: "center",
  },
  payIcon: {
    width: "60%",
    height: 60,
    marginBottom: 10,
  },
  underPayIcon: {
    color: COLORS.fontColor2,
    fontSize: 12,
    lineHeight: 15,
    marginBottom: 5,
  },
  //   Input
  inputsContainer: {
    alignItems: "center",
    marginVertical: 15,
    width: "100%",
    backgroundColor: "white",
    padding: 15,
    // paddingVertical: 20,
    borderRadius: 20,
    marginBottom: 20,
  },
  inputContainer: {
    width: "100%",
  },
  inputContainer2: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    fontSize: 14,
    backgroundColor: COLORS.bgColor1,
    borderRadius: 8,
    padding: 10,
    width: "100%",
    marginTop: 15,
    color: "black",
  },
  codeContainer: {
    width: "45%",
  },
  //   Terms
  terms: {
    flexDirection: "row",
    padding: 5,
    maxWidth: "100%",
  },
  checkbox: {
    marginRight: 10,
    borderRadius: 6,
  },
  privacy: {
    textAlign: "left",
    fontSize: 10,
    color: "black",
    marginRight: 3,
  },
  //   Btn
  button1: {
    marginVertical: 15,
    padding: 5,
  },
  signup: {
    backgroundColor: COLORS.blueBtn,
    color: "white",
    fontSize: 22,
    textAlign: "center",
    paddingVertical: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  signup2: {
    backgroundColor: COLORS.blueBtn,
    color: "white",
    fontSize: 18,
    textAlign: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  //   Clicked Card
  clickedCard: {
    position: "absolute",
    top: 0,
    right: 20,
    backgroundColor: "green",
    width: 20,
    height: 20,
    borderRadius: 50,
    zIndex: 5,
  },
  //   Error
  error: {
    fontSize: 10,
    color: "red",
    marginBottom: 5,
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
  //   button: {
  //     borderRadius: 20,
  //     padding: 10,
  //     elevation: 2,
  //   },
  //   buttonOpen: {
  //     backgroundColor: "#F194FF",
  //   },
  //   buttonClose: {
  //     backgroundColor: "#2196F3",
  //   },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  ModelTitleView: {
    flexDirection: "row",
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
