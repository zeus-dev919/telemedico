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
  ActivityIndicator
} from "react-native";
import { COLORS, icons } from "../../constants";
import Checkbox from "expo-checkbox";
import {
  CardField,
  useConfirmPayment,
  useStripe,
} from "@stripe/stripe-react-native";
import { useSelector } from "react-redux";
import { gql, useQuery } from "@apollo/client";
import * as WebBrowser from "expo-web-browser";

const ME_QUERY = gql`
  query {
    me {
      email
    }
  }
`;

const mapState = ({ user }) => ({
  userD: user.userD,
});

const PayCardsModel = (props) => {
  const { pay, navigation } = props;
  // const { confirmPayment, loading } = useConfirmPayment();
  const { confirmPayment } = useStripe();
  const { userD } = useSelector(mapState);
  const { data, loading } = useQuery(ME_QUERY);
  // data
  const [isSelected, setSelected] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);
  const [success, setSuccess] = useState(false);
  const [paymentLoading, setPaymentLoading] = useState(false);
  const [failed, setFailed] = useState(false);
  const [validCard, setValidCard] = useState(false);
  //   Error data
  const [isSelectedError, setSelectedError] = useState(false);

  const fetchPaymentIntentClientSecret = async () => {
    const response = await fetch(
      `https://pay.medipocket.world/payments/save-stripe-info/`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: 2000,
          currency: "pln",
          payment_method_id: "card",
          email: "test2022@example.com",
        }),
      }
    );
    const { clientSecret } = await response.json();

    return clientSecret;
  };
  const handlePayPress = async () => {
    // Gather the customer's billing information (for example, email)
    const billingDetails = {
      email: "stripeFeb@gmail.com",
    };

    // Fetch the intent client secret from the backend
    const clientSecret = await fetchPaymentIntentClientSecret();

    // Confirm the payment with the card details
    const { paymentIntent, error } = await confirmPayment(clientSecret, {
      paymentMethodId: "pm_1KRlaEB4dG8o0LochuEVhWjA",
      billingDetails,
    });

    if (error) {
      console.log("Payment confirmation error", error);
    } else if (paymentIntent) {
      console.log("Success from promise", paymentIntent);
    }
  };

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

  const [key, setKey] = useState("");
  useEffect(() => {
    try {
      fetch("https://pay.medipocket.world/create-payment-intent/", {
        method: "POST",
      })
        .then((res) => res.json())
        .then((res) => {
          console.log("=====>", res);
          const intent = res;
          setKey(intent.clientSecret);
        });
    } catch (err) {
      console.log("error => ", err);
    }
  }, []);

  const handlePayment = async () => {

    setPaymentLoading(true)

    confirmPayment(key, {
      type: 'Card',
      billingDetails: {
        email: userD.email,
      },
    }).then(res => {

      console.log('paymentIntent', res);

      if(res?.error){

        Alert.alert("Failed", "You enterd the wrong card number...");
      }else{

        setPaymentLoading(false)
        setModalVisible(true);
        setSuccess(true);
      }

    }).catch(error => {

      setPaymentLoading(false)

      if (error?.message) {
        Alert.alert(`Error code: ${error.code}`, error.message); console.log('Payment confirmation error', error.message);
      } else {
        Alert.alert("Failed", "payment got some error");
      }
    })

    // try {
    //   const { error } = await confirmPayment(key, {
    //     type: "Card",
    //     billingDetails: {
    //       email: userD.email,
    //     },
    //   });

    //   if (error) {
    //     Alert.alert("Error : ", error);
    //   } else {
    //     setModalVisible(true);
    //     setSuccess(true);
    //   }
    // } catch (err) {
    //   setFailed(true);
    // }
    // setPaymentLoading(false)
  };

  const handlePa = () => {
    let check = true;
    if (!isSelected) {
      setSelectedError("* Agree to the Terms & Conditions is required");
      check = false;
    } else {
      setSelectedError("");
    }
    if (check) {
      let amount = 1500;
      if (pay !== "--") amount = pay;
      handlePayPress();
      setModalVisible(true);
      setSuccess(true);
    }
  };
  const _handlePressTerms1 = () => {
    WebBrowser.openBrowserAsync("https://medipocket.world/terms-conditions/");
  };
  return (
    <>
      {/* Stripe */}
      <CardField
        postalCodeEnabled={false}
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
          setValidCard(cardDetails.complete);
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
        <Text style={styles.privacy}>Agree to </Text>
        <TouchableOpacity onPress={_handlePressTerms1}>
          <Text style={[styles.privacy, { textDecorationLine: "underline" }]}>
            the Terms & Conditions
          </Text>
        </TouchableOpacity>
      </View>
      {isSelectedError.length === 0 ? null : (
        <Text style={styles.error}>{isSelectedError}</Text>
      )}
      {/* Pay */}
      {
        validCard && isSelected ?
          (
            <TouchableOpacity style={styles.button1} onPress={handlePayment}>
              {
                paymentLoading ?
                  <ActivityIndicator color="#ffffff" />
                  :
                  <Text style={styles.signup}>Pay ${pay}</Text>
              }
            </TouchableOpacity>
          ) : (
            <TouchableOpacity style={styles.buttonDisable} disabled={true}>
              <Text style={styles.signup5}>Pay ${pay}</Text>
            </TouchableOpacity>
          )}
      {success && (
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
                  source={{
                    uri: "https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/assets%2Ficons%2Fpayments%2Faccept.png?alt=media&token=3d1f009d-14be-45d9-80cb-75e1d9878a45",
                  }}
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
                about your health and put 3 main questions you want to address
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
      {failed && (
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible2}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible2(!modalVisible2);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <View style={styles.ModelTitleView}>
                <Text style={styles.titleModal}>Something went wrong!</Text>
              </View>
              <Text style={styles.titleModal}>Note!</Text>
              <Text style={styles.modalText}>Please try again later</Text>
              <Pressable
                style={styles.signup2}
                onPress={() => {
                  setModalVisible2(!modalVisible2);
                  navigation.navigate("Home");
                }}
              >
                <Text style={styles.textStyle}>Back home</Text>
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
    backgroundColor: COLORS.blueBtn,
    justifyContent: "center",
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 20,
  },
  buttonDisable: {
    marginVertical: 15,
    padding: 5,
    backgroundColor: COLORS.darkgray,
    justifyContent: "center",
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 20,
  },
  signup: {
    color: "white",
    fontSize: 22,
  },
  signup5: {
    color: "white",
    fontSize: 22,
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
