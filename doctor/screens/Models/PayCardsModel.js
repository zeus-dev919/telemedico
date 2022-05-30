import React, { useState, useEffect } from "react";
import {
  Alert,
  Modal,
  Image,
  StyleSheet,
  Text,
  View,
  Pressable,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { COLORS } from "../../constants";
import Checkbox from "expo-checkbox";
import { CardField, initStripe, useStripe } from "@stripe/stripe-react-native";
import { useSelector } from "react-redux";
import { gql, useQuery } from "@apollo/client";
import * as WebBrowser from "expo-web-browser";
import { StripeProvider } from "@stripe/stripe-react-native";

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

  const { name, pay, navigation } = props;
  console.log("name, pay => ");
  console.log(name, pay);
  // Stripe
  const { confirmPayment } = useStripe();
  const [key, setKey] = useState("");
  // Stripe
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
  const [cardData, setcardData] = useState(null);

  //   Error data
  const [isSelectedError, setSelectedError] = useState(false);


  useEffect(() => {

    async function setStripeKey() {

      // initStripe({
      //   // publishableKey: EnvironmentVariables.UAT.stripeKey,  //pk_test_51L3CFeSIfO58XcZRgR6oWGXV6A90OC0jSQ4IYExtdNsb4806PrPZBnZ8hT1Sr6y0ZMRPcZZafcmwxRGsFOnrluBt00lHZYrUhU
      //   // merchantIdentifier: 'merchant.identifier',
      // });

      initStripe({
        publishableKey: "pk_live_HuXS0sPYQFn62lfDrx0SuoKR",
        merchantIdentifier: "merchant.identifier"
      })
    }

    setStripeKey()
  }, []);

  useEffect(async () => {

    getPaymentIntentFromServer()
  }, []);

  const handlePayment = async () => {

    console.log('--------------- test payment key ', key)
    setPaymentLoading(true);
    if (key) {

      let clientSecret = key
      confirmPayment(clientSecret,
        {
          type: 'Card',
          // billingDetails: {
          //   email: userD.email,
          //   amout: pay,
          // },
        }
      ).then(res => {

        console.log('==============-============-===========');
        console.log('res.paymentIntent', res);
        console.log('==============-============-===========');

        if (res?.paymentIntent) {

          Alert.alert(
            "Received payment",
            `Billed for $${parseInt(res.paymentIntent?.amount) / 100}`
          );
          // Success
          setPaymentLoading(false);
          setModalVisible(true);
          setSuccess(true);
        }

        if (res?.error) {

          Alert.alert(`Error code: ${res?.error?.code}`, res?.error?.message);
          setPaymentLoading(false);
          setSuccess(false);
        }

      }).catch(error => {

        console.log('Payment confirmation error ==>', error);

        setPaymentLoading(false);
        setSuccess(false);
        if (error?.message) {

          Alert.alert(`Error code: ${error.code}`, error.message);
          console.log('Payment confirmation error', error.message);

        } else {

          Alert.alert("Failed", "payment got some error");
        }
      })




      // ======================= previous code for payment =============

      //   const { paymentIntent, error } = await confirmPayment(key, {
      //     type: "Card",
      //     billingDetails: {
      //       email: userD.email,
      //       amout: pay,
      //     },
      //   });


      // console.log('--------------- paymentIntent :', paymentIntent)
      // console.log('--------------- error :', error)

      //   if (!error) {
      //     Alert.alert(
      //       "Received payment",
      //       `Billed for $${parseInt(paymentIntent?.amount) / 100}`
      //     );
      //     // Success
      //     setPaymentLoading(false);
      //     setModalVisible(true);
      //     setSuccess(true);
      //   } else {
      //     // Failed
      //     Alert.alert("Error", "Something went wrong!\nplease try again later");
      //     setPaymentLoading(false);
      //     setSuccess(false);
      //   }

      // ======================= previous code for payment =============

    } else {

      setPaymentLoading(false);
      Alert.alert("Failed", "Something went wrong!\nplease try again later");
    }
    // confirmPayment(key, {
    //   type: "Card",
    //   billingDetails: {
    //     email: userD.email,
    //   },
    // })
    //   .then((res) => {
    //     console.log("paymentIntent", res);
    //     if (res?.error) {
    //       // Failed
    //       Alert.alert("Failed", "You enterd the wrong card number...");
    //       setPaymentLoading(false);
    //       setSuccess(false);
    //     } else {
    //       // Success
    //       setPaymentLoading(false);
    //       setModalVisible(true);
    //       setSuccess(true);
    //     }
    //   })
    //   .catch((error) => {
    //     setPaymentLoading(false);

    //     if (error?.message) {
    //       Alert.alert(`Error code: ${error.code}`, error.message);
    //       console.log("Payment confirmation error", error.message);
    //     } else {
    //       Alert.alert("Failed", "payment got some error");
    //     }
    //   });
  };

  const _handlePressTerms1 = () => {
    WebBrowser.openBrowserAsync("https://medipocket.world/terms-conditions/");
  };

  const getPaymentIntentFromServer = async () => {

    console.log("get payment intent from server =-=-=-=-=-=-=-=-=-=-=-");

    try {
      // https://app.medipocket.world/payments/test-payment/   // https://pay.medipocket.world/create-payment-intent/
      await fetch("https://pay.medipocket.world/create-payment-intent/", {
        // fetch("http://192.168.43.149:3000/create-payment-intent/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        // body: `amount=${pay}`,
        body: JSON.stringify({ amount: pay }),
      })
        .then((response) => response.json())
        .then((res) => {
          console.log("Here Then line 61", res);
          // setKey(res.id);
          setKey(res.clientSecret);
        });
    } catch (err) {
      Alert.alert("Something went wrong!", "please try again later...");
      setPaymentLoading(true);
      console.log("error =====> ", err);
    }
  }

  return (
    <>

      {/* Stripe */}
      <CardField
        postalCodeEnabled={false}
        placeholder={{
          number: "Enter your card number   ",
        }}
        cardStyle={{
          backgroundColor: "#FFFFFF",
          textColor: "#000000",
          flexDirectionL:'column'
        }}
        style={{
          width: "100%",
          height: 50,
          marginVertical: 30,
        }}
        onCardChange={(cardDetails) => {
          console.log("cardDetails", cardDetails);
          setValidCard(cardDetails.complete);
          setcardData(cardDetails)
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
      {validCard && isSelected ? (
        <TouchableOpacity style={styles.button1} onPress={handlePayment}>
          {paymentLoading ? (
            <ActivityIndicator color="#ffffff" />
          ) : (
            <Text style={styles.signup}>Pay ${pay}</Text>
          )}
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
                  navigation.navigate("intakeForm", { doctorName: name });
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
    alignItems: "center",
    borderRadius: 10,
    marginBottom: 20,
  },
  buttonDisable: {
    marginVertical: 15,
    padding: 5,
    backgroundColor: COLORS.darkgray,
    justifyContent: "center",
    alignItems: "center",
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
