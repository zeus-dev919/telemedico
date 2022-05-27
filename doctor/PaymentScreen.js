
import React, { useRef, useEffect, useState } from 'react';
import {
  Text,
  View,
  Image,
  ScrollView,
  Alert,
  TouchableOpacity,
  Keyboard,
  Modal,
  DeviceEventEmitter,
  TextInput,
  KeyboardAvoidingView,
  Linking,
  ActivityIndicator,
  Platform,
} from 'react-native';
import HeaderLeft from '../../common/HeaderLeft/index';
import LineSpace from '../../common/LineSpace';
import {
  TextHead,
  InputContainer,
  NormalText,
  SubText,
  PaymentResult,
  StyledRawButton,
  Row,
  Line,
} from './PaymentScreen.styled';
import { Formik } from 'formik';
import StyledInput from '../../common/StyledInput/StyledInput';
import LineSeparator from '../../common/LineSeparator';
import StyledButton from '../../common/StyledButton';
import Colors from '../../constants/Colors';
import { Center } from '../AccountSettingsScreen/AccountSettingsScreen.styled';
import SDK, { orderHooks, paymentHooks, productDetailHooks } from '../../ecommerce';
import Loader from '../../common/Loader/Loader';
// import stripe from 'tipsi-stripe';
import { ApplePayButton, useApplePay } from '@stripe/stripe-react-native';

import {
  createToken,
  CardField,
  useConfirmPayment,
  updateApplePaySummaryItems,
  initStripe,
  StripeProvider,
  useStripe
} from '@stripe/stripe-react-native';
import WebView from 'react-native-webview';
import { CustomNativePackages } from '../../Utils/NativeModuleUtil';
import { EnvironmentVariables, RedirectUrls } from '../../constants/StringConstants';
import Analytics from '@react-native-firebase/analytics';
// import { AppEventsLogger } from 'react-native-fbsdk';
import { AppEventsLogger } from 'react-native-fbsdk-next';

import FloatingLabelInput from '../../common/FloatingLabelInput/FloatingLabelInput';
import { isEmpty } from 'lodash-es';
import { NavigationEvents } from 'react-navigation';


//---------- component
const PaymentScreen = ({ navigation, isFromProductDetail, bidDetail, callBack }) => {

  //---------- state and veriables
  const ShippingAddressId = navigation.getParam('ShippingAddressId', '');
  const CouponCode = navigation.getParam('CouponCode', '');
  const payment_response = navigation.getParam('payment_response', undefined)
  const account = navigation.getParam('account', '');

  const { confirmPayment } = useStripe();
  // const { confirmPayment, loading } = useConfirmPayment();

  const [isSent, setSend] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [intentDataByServer, setIntentData] = useState(null);

  const [enableButton, setEnablebutton] = useState(false);
  const [cardData, setcardData] = useState(null);
  const [isCryptoClicked, setCryptoClicked] = useState(false);

  const [cardType, setCardType] = useState(undefined);

  const webView = useRef();

  const [isLoading, setLoading] = useState(false);
  const [isAuctionLoading, setAuctionLoading] = useState(false);

  const urlString = navigation.getParam('url', 'https://help.rtistiq.com/en/');
  const isFromPayment = navigation.getParam('fromPayment', false);
  const [showLoading, setShowLoading] = useState(true);
  const [orderDetail, setOrderDetail] = useState();
  const [flag, setFlag] = useState('');

  //---------- hooks
  const { useGetOrderDetailsById, useBidCharges, useGetBidDetail } = orderHooks;

  const {
    useStripePaymentForOrder,
    useStripePaymentIntent,
    useStripePaymentConfirmation,
    useTripleAPayment,
    useStripeAuctionPaymentIntent,
    useStripeAuctionPaymentConfirmation
  } = paymentHooks;

  const [
    getOrderDetails,
    getOrderDetailsSuccess,
    orderDetailFailed,
    getOrderDetailsLoading,
  ] = useGetOrderDetailsById();



  const [
    bidCharges,
    bidChargessSuccess,
    bidChargesFailed,
    bidChargessLoading,
  ] = useBidCharges();

  const [
    getBidDetail,
    getBidDetailSuccess,
    getBidDetailFailed,
    getBidDetailLoading,
  ] = useGetBidDetail();

  const [
    stripeAuctionPaymentIntentForBid,
    auctionIntentdata,
    auctionIntentError,
    auctionILoading,
  ] = useStripeAuctionPaymentIntent();

  const [
    stripeAuctionPaymentConfirmation,
    auctionPaymentConfirmData,
    auctionPaymentConfirmDataError,
    auctionPaymentConfirmDataLoading,
  ] = useStripeAuctionPaymentConfirmation();

  const [
    stripePaymentForOrder,
    stripePaymentSuccess,
    stripePaymentError,
    stripePaymentLoading,
  ] = useStripePaymentForOrder();
  const [
    doTripleAPayment,
    tripleAData,
    tripleError,
    tripleLoading,
  ] = useTripleAPayment();

  const [
    getPaymentIntent,
    intentdata,
    intentError,
    intentLoading,
  ] = useStripePaymentIntent();

  const [
    // stripePaymentOrderConfirmation,
    updatePaymentConfirmation,
    updateData,
    updateError,
    updateLoading,
  ] = useStripePaymentConfirmation();

  //---------- lifecycles for setup

  useEffect(() => {
    Keyboard.dismiss();
  }, []);

  useEffect(() => {
    // console.log('=======================')
    // console.log('stripe : ', stripe)
    // console.log('stripe init ====> ', EnvironmentVariables.UAT.stripeKey);
    // console.log('=======================')

    async function setStripeKey() {
      // stripe.setOptions({
      //   publishableKey: EnvironmentVariables.UAT.stripeKey,
      // });
      initStripe({
        publishableKey: EnvironmentVariables.UAT.stripeKey,
        // merchantIdentifier: 'merchant.identifier',
        merchantIdentifier: 'merchant.com.RtistiQ',
      });
    }

    setStripeKey()
  }, []);

  useEffect(() => {

    console.log('payment_response', payment_response)
    if (payment_response) {

    }

  }, [payment_response]);

  useEffect(() => {

    if (isFromProductDetail) {

      // const formData = new FormData();
      // formData.append('LotId', bidDetail.LotId);
      // formData.append('BidAmount', bidDetail.BidAmount);
      // formData.append('shippingAddressId', bidDetail.shippingAddressId);
      // formData.append('billingAddressId', bidDetail.billingAddressId);
      // formData.append('BlockchainAddress', bidDetail.BlockchainAddress);

      // getBidDetail(formData);
    } else {

      if (ShippingAddressId) {
        getOrderDetails(ShippingAddressId);
        getPaymentIntent(ShippingAddressId);
      }
    }
  }, []);

  //---------- lifecycles : for update

  //auction payment update
  useEffect(() => {

    console.log("auctionIntentdata === >", auctionIntentdata);
    console.log("auctionIntentError === >", auctionIntentError);
    if (flag === 'intent') {

      // success
      if (auctionIntentdata) {

        setIntentData(auctionIntentdata)
        setFlag('confirm_payment')
        getPaymentIntentForAuctionAndConfirmPayment('confirm_payment')
      }

      // error
      if (auctionIntentError) {


        Alert.alert("Failed", auctionIntentError.message);
      }
    }
  }, [auctionIntentdata, auctionIntentError]);

  // auction payment confirmation
  useEffect(() => {

    console.log('----=-=-====---------=-==========------')
    console.log("auctionPaymentConfirmData === >", auctionPaymentConfirmData);
    console.log("auctionPaymentConfirmDataError === >", auctionPaymentConfirmDataError);
    console.log('----=-=-====---------=-==========------')

    if (flag === 'confirm_payment') {

      // success
      if (auctionPaymentConfirmData) {

        setAuctionLoading(false);
        callBack()
      }

      // error
      if (auctionPaymentConfirmDataError) {


        Alert.alert("Failed", "payment got some error");
      }
    }
  }, [auctionPaymentConfirmData, auctionPaymentConfirmDataError]);

  // triple add data
  useEffect(() => {

    if (tripleAData) {

      let redirect_url = `https://in.yahoo.com/?p=us`

      // navigation.navigate('WebPageView', { url: tripleAData, fromPayment: true });

      if (Platform.OS === 'ios') {

        Linking.addEventListener(`${tripleAData}`, callback)

        Linking.openURL(tripleAData);
      } else {

        navigation.navigate('WebPageView', { url: tripleAData, fromPayment: true });
      }

      setTimeout(() => {
        // getOrderDetails(ShippingAddressId);
        setCryptoClicked(true);
      }, 1000);
    } else if (tripleError) {

      Alert.alert("Failed", "payment got some error");
    }

  }, [tripleAData, tripleError])

  // order detail update
  useEffect(() => {

    // success
    if (updateData) {

      getOrderDetails(ShippingAddressId);
    }

    // error
    if (updateError) {

      setLoading(false);
      Alert.alert("Failed", "payment got some error, please try after some time");
    }
    if (isFromProductDetail) {

    } else {

      getOrderDetails(ShippingAddressId);
    }
  }, [updateData, updateError]);

  // get order detail update
  useEffect(() => {

    if (getOrderDetailsSuccess) {

      console.log('=+++++++++++++++++++++++++++++++++++')

      if (
        getOrderDetailsSuccess.orderStatus === 1 ||
        getOrderDetailsSuccess.orderStatus === 3
      ) {
        triggerPaymentEvent(getOrderDetailsSuccess);
      }
      setOrderDetail(getOrderDetailsSuccess);

      setLoading(false);
    }
    // else {

    //   setLoading(false);
    //   Alert.alert("Failed", "payment got some error");
    // }

    if (orderDetailFailed) {

      setLoading(false);

      Alert.alert("Failed", "payment got some error");
    }
  }, [getOrderDetailsSuccess, orderDetailFailed]);

  // payment intent for stripe payment
  useEffect(() => {

    // success
    if (intentdata) {

      setIntentData(intentdata);
      console.log('Intent data : ', intentdata);
    }

    // error
    if (intentError) {

      console.log('Intent error : ', intentError);
      setLoading(false);
      Alert.alert("Failed", "payment got some error");
    }
  }, [intentdata, intentError]);

  // update of stripe payment
  useEffect(() => {

    console.log('stripePaymentSuccess', stripePaymentSuccess)
    console.log('stripePaymentError', stripePaymentError)

    // success
    if (stripePaymentSuccess) {

      if (ShippingAddressId) {

        setLoading(false);
        getOrderDetails(ShippingAddressId);
      }
    }

    // error
    if (stripePaymentError) {

      setLoading(false);
      Alert.alert(
        'Error',
        stripePaymentError?.message || `Plese try again!`,
      );
    }
  }, [stripePaymentSuccess, stripePaymentError]);

  //---------- user's action

  const handleAuctionPayment = () => {

    setAuctionLoading(true);
    setFlag('intent')
    getPaymentIntentForAuctionAndConfirmPayment('intent')
  }

  const getPaymentIntentForAuctionAndConfirmPayment = (key) => {

    switch (key) {

      case 'intent':

        stripeAuctionPaymentIntentForBid(bidDetail._id)
        break;

      case 'confirm_payment':

        console.log('bidDetail._id :', bidDetail._id, 'auctionIntentdata :', auctionIntentdata)

        let clientSecret = auctionIntentdata

        confirmPayment(clientSecret, { type: 'Card' }).then(res => {

          console.log('paymentIntent', res.paymentIntent);

          stripeAuctionPaymentConfirmation(bidDetail._id, res.paymentIntent.clientSecret)
        }).catch(error => {

          if (error?.message) {

            Alert.alert(`Error code: ${error.code}`, error.message);
            console.log('Payment confirmation error', error.message);
          } else {

            Alert.alert("Failed", "payment got some error");
          }
        })

        break;
      default:
        break;
    }
  }

  const doStripeNewpayment = async (intentDataByServer) => {

    console.log('intentDataByServer : ', intentDataByServer)

    setLoading(true);
    console.log('confirmPayment : ', confirmPayment)

    let clientSecret = intentDataByServer

    confirmPayment(clientSecret, { type: 'Card' }).then(res => {

      console.log('paymentIntent', res.paymentIntent);
      // setLoading(false);
      // Alert.alert(
      //   'Success',
      //   `The payment was confirmed successfully! currency: ${res?.paymentIntent?.currency
      //   }`,
      // );
      updatePaymentConfirmation(ShippingAddressId, res?.paymentIntent.id);
    }).catch(error => {

      if (error?.message) {

        Alert.alert(`Error code: ${error.code}`, error.message);
        console.log('Payment confirmation error', error.message);
      } else {

        Alert.alert("Failed", "payment got some error");
      }
      setLoading(false);
    })

    // try {

    //   const { error, paymentIntent } = await confirmPayment(intentDataByServer, {
    //     type: 'Card',
    //   });

    //   console.log('error in payment : ', error)
    //   console.log('paymentIntent : ', paymentIntent)

    //   if (error) {

    //   } else if (paymentIntent) {
    //     setLoading(false);
    //     Alert.alert(
    //       'Success',
    //       `The payment was confirmed successfully! currency: ${paymentIntent.currency
    //       }`,
    //     );
    //     // stripePaymentOrderConfirmation(ShippingAddressId, paymentIntent.id);
    //     // updatePaymentConfirmation(ShippingAddressId, paymentIntent.id);
    //     // getOrderDetails(ShippingAddressId);
    //     console.log('Success from promise', paymentIntent);
    //   }
    // } catch (error) {

    //   setLoading(false);
    //   console.log('error in try cath :', error);
    //   Alert.alert("Failed", "payment got some error");
    // }
  };

  const stripePayment = async () => {
    setLoading(true);

    var month = cardData.values.expiry.substring(0, 2);
    var year = cardData.values.expiry.slice(-2);
    var number = cardData.values.number.replace(/\s/g, '');

    // name.replace(/\s/g, '')
    console.log('Month - ', month, 'Year - ', year, 'Number - >', number);
    // return;
    const params = {
      number: cardData.values.number.replace(/\s/g, ''),
      expMonth: parseInt(month),
      expYear: parseInt(year),
      cvc: cardData.values.cvc,
    };

    // ================+OLD CODE=========++=======
    // stripe.paymentRequestWithCardForm({
    //   // Only iOS support this options
    //   //smsAutofillDisabled: false,
    //   // requiredBillingAddressFields: 'full',
    //   // prefilledInformation: {
    //   // billingAddress: {
    //   //   name: 'Enappd Store',
    //   //   line1: 'Canary Place',
    //   //   line2: '3',
    //   //   city: 'Macon',
    //   //   state: '',
    //   //   country: 'Estonia',
    //   //   postalCode: '31217',
    //   //   email: 'admin@enappd.com',
    //   // },
    //   // },
    // }).then((result)=>{
    // console.log("Success token", result,"ShippingAddressId Id =>",ShippingAddressId);
    // // stripePaymentForOrderFt(result.id);

    // }).catch((error)=>{
    // console.log("Error token", error);

    // })

    console.log('stripe : ', stripe)
    if (stripe && stripe.createTokenWithCard) {

      try {

        // const token = await stripe.createTokenWithCard(params);
        // await stripe.paymentRequestWithCardForm(params).then(token =>{
        await stripe.createTokenWithCard(params).then(async token => {

          console.log('stripe token', token);
          setLoading(false);

          // updatePaymentConfirmation(ShippingAddressId, token.tokenId);
          // stripePaymentForOrderFt(token.tokenId);
        }).catch(error => {

          console.log('error : ', error);
          setLoading(false);
          Alert.alert(
            'Error',
            `Plese try again!`,
          );
        })
        // console.log('stripe token', token.tokenId);
        // setLoading(false);
        // stripePaymentForOrderFt(token.tokenId);
      } catch (error) {

        setLoading(false);
        console.log('try catch error : ', error);
        Alert.alert(
          'Error',
          `Plese try again!`,
        );
      }
    }

    // createToken(params).then((result) => {
    //   console.log("Stripe result == ", result);
    //   // if (Platform.OS == 'android') {
    //   //   setLoading(false);
    //   //   stripePaymentForOrderFt(result.id);
    //   // } else {
    //   //   console.log("Stripe error == ", result.token.id);
    //   //   // setLoading(false);
    //   //   // stripePaymentForOrderFt(result.id);
    //   // }
    // }).catch((error) => {
    //   console.log("Stripe error == ", result.token.id);
    // })
  };

  const triggerPaymentEvent = async cData => {
    console.log('Payment Name ==== >', cData);
    let pList = [];

    if (cData && cData.productList) {
      pList = cData.productList.map(pData => {
        return {
          item_brand: '',
          item_id: pData._id,
          item_name: pData.productName,
          item_category: pData.categoryName,
        };
      });
    }
    console.log('PLit===>', pList);
    await Analytics().logPurchase({
      value: cData.subTotal,
      currency: cData.currency,
      items: pList,
    });
    AppEventsLogger.logPurchase(cData.subTotal, cData.currency, {
      productPurchased: JSON.stringify(pList),
    });
  };

  // apple pay
  const applePay = async () => {

    console.log('apple pay :')

    if (!isApplePaySupported) return;

    const { error } = await presentApplePay({
      cartItems: [{ label: 'Example item name', amount: '14.00' }],
      country: 'US',
      currency: 'USD',
      shippingMethods: [
        {
          amount: '20.00',
          identifier: 'DPS',
          label: 'Courier',
          detail: 'Delivery',
          type: 'final',
        },
      ],
      requiredShippingAddressFields: ['emailAddress', 'phoneNumber'],
      requiredBillingContactFields: ['phoneNumber', 'name'],
    });

    console.log('apple pay function done')
    
    if (error) {
      // handle error
      console.log('error : ', error)
    
    } else {

      console.log('intentDataByServer : ', intentDataByServer)

      const clientSecret = intentDataByServer

      const { error: confirmError } = await confirmApplePayPayment(
        clientSecret
      );

      console.log('confirmError : ', confirmError)

      if (confirmError) {
        // handle error
        console.log('confirmError : ', confirmError)
      }
    }

    const token = await stripe.paymentRequestWithNativePay(
      {
        // requiredBillingAddressFields: ['all'],
        // requiredShippingAddressFields: ['all'],
        shippingMethods: [
          {
            id: 'fedex',
            label: 'FedEX',
            detail: 'Test @ 10',
            amount: '10.00',
          },
        ],
      },
      [
        {
          label: 'Whisky',
          amount: '50.00',
        },
        {
          label: 'Vine',
          amount: '60.00',
        },
        {
          label: 'Tipsi',
          amount: '110.00',
        },
      ],
    );
    console.log('apple pay : ', token)

  };

  //---------- helper's

  const callback = (data) => {

    if (
      isFromPayment &&
      url?.toString()?.includes(EnvironmentVariables.UAT.fallbackURL)
    ) {
      navigation.goBack(null);
    }
  }

  const stripePaymentForOrderFt = token => {

    stripePaymentForOrder(token, ShippingAddressId);
  };

  const handleSaveCardDetail = (key, data) => {

    switch (key) {

      case 'card_input':

        // //  {"status": {"cvc": "valid", "expiry": "valid", "number": "valid"}, "valid": true, "values": {"cvc": "222", "expiry": "04/24", "number": "4242 4242 4242 4242", "type": "visa"}} : demo data
        // let card_data = {
        //   "brand": "Visa",
        //   "complete": true,
        //   "expiryMonth": 7,
        //   "expiryYear": 44,
        //   "last4": "4242"
        // }
        setcardData(data)
        setCardType('1st_input_field')
        break;

      case 'card_input_field':

        // {"brand": "Visa", "complete": true, "expiryMonth": 7, "expiryYear": 44, "last4": "4242"} : demo data

        setcardData(data)
        setCardType('2st_input_field')
        break;

      default:
        break;
    }
  }

  //---------- render

  const { isApplePaySupported } = useApplePay();

  // alert(isApplePaySupported)

  // loading
  if (isLoading || stripePaymentLoading || getOrderDetailsLoading || intentLoading || updateLoading) {

    return (
      <View>
        <Loader visible={true} />
      </View>
    )
  }

  //---------- main view

  if (isFromProductDetail) {

    return (
      <View style={{ marginLeft: 20, marginRight: 20 }}>
        <CardField
          onCardChange={cardDetails => {
            console.log('cardDetails', cardDetails);
            setEnablebutton(cardDetails.complete);
            handleSaveCardDetail('card_input_field', cardDetails)
          }}
          onFocus={focusedField => {
            console.log('focusedField', focusedField);
          }}
          style={{
            width: '100%',
            height: 50,
            marginBottom: 20,
          }}
          postalCodeEnabled={false}
        />

        <LineSpace />

        <TouchableOpacity
          disabled={!enableButton}
          onPress={() => {

            if (!isAuctionLoading) {

              handleAuctionPayment()
            }
          }}
          style={{
            backgroundColor: enableButton
              ? Colors.black
              : Colors.bodyTextColor,
            height: 40,
            justifyContent: 'center',
            flexDirection: 'row'
          }}>
          <Text style={{ color: Colors.white, alignSelf: 'center' }}>
            Proceed
          </Text>
          {
            isAuctionLoading &&
            <ActivityIndicator />
          }
        </TouchableOpacity>

        <LineSpace space={20} />

        <TouchableOpacity onPress={() => {
          doTripleAPayment(ShippingAddressId);
        }}>
          <TextHead>CryptoPayment</TextHead>
        </TouchableOpacity>
        {/* UN-COMMENT BELOW TOENABLE CRYPTO PAYMENT */}

      </View>
    )
  } else {

    return (
      <View style={{ flex: 1 }}>
        <NavigationEvents
          onWillFocus={() => {
            console.log('----------------------')
            console.log('isFromProductDetail :', isFromProductDetail)
            console.log('----------------------')
            //For call back
            if (isFromProductDetail) {

            } else {

              if (ShippingAddressId) {

                getOrderDetails(ShippingAddressId);
              }
            }
          }}
        />


        {
          // isApplePaySupported && 
          // <ApplePayButton
          //   onPress={() => applePay()}
          //   type="plain"
          //   buttonStyle="black"
          //   borderRadius={4}
          //   style={{
          //     width: '100%',
          //     height: 50,
          //   }}
          // />
        }






        {/* orderDetail && orderDetail.orderStatus === 0 &&!isCryptoClicked  */}
        {orderDetail && orderDetail.orderStatus === 0 && !isCryptoClicked && (
          <View style={{ marginLeft: 20, marginRight: 20 }}>

            {
              //---------- card input 1
            }
            {/* <CreditCardInput
            onChange={data => {
              console.log('Card data === >', data);
              if (data.valid) {
                setEnablebutton(true);
              } else {
                setEnablebutton(false);
              }
              handleSaveCardDetail('card_input', data)
            }}
          /> */}

            {
              //---------- card input 2
            }

            <CardField
              onCardChange={cardDetails => {
                console.log('cardDetails', cardDetails);
                setEnablebutton(cardDetails.complete);
                handleSaveCardDetail('card_input_field', cardDetails)
              }}
              onFocus={focusedField => {
                console.log('focusedField', focusedField);
              }}
              style={{
                width: '100%',
                height: 50,
                marginBottom: 20,
              }}
              postalCodeEnabled={false}
            />

            <LineSpace space={50} />

            <TouchableOpacity
              disabled={!enableButton}
              onPress={() => {

                // doStripeNewpayment(intentDataByServer);

                if (cardType === '1st_input_field') {

                  stripePayment();
                } else {

                  console.log('intent - ', intentDataByServer);
                  if (intentDataByServer) {

                    doStripeNewpayment(intentDataByServer);
                  } else {

                    Alert.alert('Warning', 'Please contact admin');
                  }
                }
              }}
              style={{
                backgroundColor: enableButton
                  ? Colors.black
                  : Colors.bodyTextColor,
                height: 40,
                justifyContent: 'center',
              }}>
              <Text style={{ color: Colors.white, alignSelf: 'center' }}>
                Proceed
              </Text>
            </TouchableOpacity>

            <LineSpace space={20} />

            <TouchableOpacity onPress={() => {
              doTripleAPayment(ShippingAddressId);
            }}>
              <TextHead>CryptoPayment</TextHead>
            </TouchableOpacity>
            {/* UN-COMMENT BELOW TOENABLE CRYPTO PAYMENT */}

            {/* <Row>
              <Line />
              <TextHead> OR </TextHead>
              <Line />
            </Row>

            <LineSpace space={20} />


            <Text style={{width:'80%',color: Colors.black, alignSelf: 'center',fontSize:13,textAlign:'center'}}>
                You will be redirected to CoinBase payment gateway to complete the payment.
              </Text>
              <LineSpace/>
            <TouchableOpacity
              onPress={() => {
                const urlString =
                  SDK.APIUrl.BASE_WEB_URL +
                  `OrderManagement/api/Payment/CoinbasePayment?orderId=${ShippingAddressId}`;
                Linking.openURL(urlString);
                

                setTimeout(() => {
                  // getOrderDetails(ShippingAddressId);
                  setCryptoClicked(true);
                }, 1000);
              }}
              style={{
                backgroundColor: Colors.black,
                height: 40,
                justifyContent: 'center',
              }}>
              <Text style={{color: Colors.white, alignSelf: 'center'}}>
                Pay with Crypto
              </Text>
            </TouchableOpacity> */}

            {/* <TouchableOpacity onPress={() => stripePayment()}>
              <View style={{flexDirection: 'row', alignSelf: 'center'}}>
                <Image
                  style={{width: 47, height: 33}}
                  source={require('../../assets/images/Visa_card.png')}
                />
                <LineSpace space={10} horizontal={true} />
                <Image
                  style={{width: 47, height: 33}}
                  source={require('../../assets/images/Master_Card.png')}
                />
              </View>
            </TouchableOpacity> */}
          </View>
        )}
        {orderDetail &&
          (orderDetail.orderStatus === 1 || orderDetail.orderStatus === 3) && (
            <PaymentResult>
              <Image
                style={{ width: 60, height: 60 }}
                resizeMode="contain"
                source={require('../../assets/images/available.png')}
              />
              <LineSpace />
              <TextHead style={{ textAlign: 'center' }}>
                Successfully completed the payment!
              </TextHead>
              <LineSpace />
              <NormalText style={{ textAlign: 'center' }}>
                Order number : {ShippingAddressId}
              </NormalText>
              <LineSpace space={25} />

              <StyledRawButton
                onPress={() => {
                  navigation.popToTop(),
                    // navigation.pop(),
                    navigation.navigate('MyOrders');
                  // navigation.reset('MyOrders');
                }}>
                <Text>Go to your orders</Text>
              </StyledRawButton>
            </PaymentResult>
          )}

        {orderDetail && orderDetail.orderStatus === 2 && (
          <PaymentResult>
            <Image
              style={{ width: 60, height: 60 }}
              resizeMode="contain"
              source={require('../../assets/images/close_button.png')}
            />
            <LineSpace />
            <TextHead style={{ textAlign: 'center' }}>Payment Failed!</TextHead>
            <LineSpace />
            <NormalText style={{ textAlign: 'center' }}>
              Order number : {ShippingAddressId}
            </NormalText>
            <LineSpace space={25} />

            <StyledRawButton
              key="orders"
              onPress={() => {
                navigation.popToTop(), navigation.navigate('CartScreen');
              }}>
              <Text>Go to cart</Text>
            </StyledRawButton>
          </PaymentResult>
        )}
        {/* IF PAYEMENT THRU CRTPTO SHOW THIS MESSAGE AND NAVIGATE TO ORDERS */}
        {orderDetail && orderDetail.orderStatus === 0 && isCryptoClicked && (
          <PaymentResult>
            <Image
              style={{ width: 60, height: 60 }}
              resizeMode="contain"
              source={require('../../assets/images/Warning.png')}
            />
            <LineSpace />
            <TextHead style={{ textAlign: 'center' }}>Payment Pending</TextHead>
            <LineSpace />
            <NormalText style={{ textAlign: 'center' }}>
              Order number : {ShippingAddressId}
            </NormalText>
            <SubText>
              Your order will be confirmed once your crypto payment is
              successfully completed.
            </SubText>

            <LineSpace space={25} />

            <StyledRawButton
              key="orders"
              onPress={() => {
                navigation.popToTop(), navigation.navigate('MyOrders');
              }}>
              <Text>Go to My Orders</Text>
            </StyledRawButton>
          </PaymentResult>
        )}
      </View>
    );
  }
};

//---------- header

PaymentScreen.navigationOptions = ({ navigation }) => {
  return {
    headerLeft: (
      <HeaderLeft
        header={'Payment options'}
        onPress={() => navigation.goBack(null)}
      />
    ),

    headerStyle: {
      marginBottom: 15,
      shadowColor: 'transparent',
      borderBottomWidth: 0,
      elevation: 0,
      shadowOpacity: 0,
    },
  };
};

//---------- export component
export default PaymentScreen;



// <<<<<<<<<<<<  test after done >>>>>>>>>>>>>>>

  // useEffect(() => {
  //   setLoading(false);
  //   if (checkOutCartData) {
  //     Alert.alert('Checked out Successfully!', 'success');
  //     navigation.navigate('MyOrders');
  //     //Move to Myorders
  //   } else if (checkOutCartError) {
  //     Alert.alert('Failed to checkout from cart!', 'error');
  //   }
  // }, [checkOutCartData, checkOutCartError]);

  // const renderSwitchCase = async status => {
  //   console.log('SwitchRender===>', status);
  //   if (status === 0) {
  //     paymentRender();
  //   } else if (status === 1 || status === 3) {
  //     successResult();
  //   } else if (status === 2) {
  //     failureResult();
  //   } else {
  //     return <View />;
  //   }
  //   // switch (status) {
  //   //   case 0:
  //   //     // [PENDING PAYMENT]
  //   //     return paymentRender();
  //   //   case 1:
  //   //   case 3:
  //   //     // [SUCCESS PAYMENT]
  //   //     // triggerPaymentEvent(orderDetail);
  //   //     return successResult();
  //   //   case 2:
  //   //     // [FAILURE PAYMENT]
  //   //     return failureResult();
  //   //   default:
  //   //     return <View />;
  //   // }
  // };

  // const paymentRender = () => {
  //   return (
  //     <View>
  //       {/* <ActivityIndicator/> */}
  //       {/* <TouchableOpacity
  //         onPress={() => {

  //           // setShowModal(true);
  //         }}
  //         style={{
  //           marginTop: 10,
  //           width: '85%',
  //           alignSelf: 'center',
  //           borderColor: '#AEAEAE',
  //           backgroundColor: '#F8F8F8',
  //           borderWidth: 1,
  //         }}>

  //       </TouchableOpacity> */}

  //       {/* <LineSpace space={30} />
  //     <TouchableOpacity
  //       onPress={() => applePay()}
  //       style={{overflow: 'hidden'}}>
  //       <Image
  //         style={{alignSelf: 'center'}}
  //         resizeMode="contain"
  //         source={require('../../assets/images/Apple_Pay_Mark_CMYK_041619.png')}
  //       />
  //     </TouchableOpacity>
  //     <LineSpace space={30} />
  //     <View
  //       style={{
  //         flexDirection: 'row',
  //         width: '100%',
  //         alignSelf: 'center',
  //         justifyContent: 'center',
  //       }}>
  //       <View
  //         style={{
  //           width: '35%',
  //           backgroundColor: '#AEAEAE',
  //           height: 1,
  //           marginTop: 8,
  //         }}
  //       />
  //       <Text style={{marginLeft: 3, marginRight: 3}}>OR</Text>

  //       <View
  //         style={{
  //           width: '35%',
  //           backgroundColor: '#AEAEAE',
  //           height: 1,
  //           marginTop: 8,
  //         }}
  //       />
  //     </View>*/}
  //       <LineSpace space={25} />

  //       <TextHead>Credit / Debit Card</TextHead>
  //       <LineSpace space={20} />

  //       <TouchableOpacity onPress={() => stripePayment()}>
  //         <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
  //           <Image
  //             style={{ width: 47, height: 33 }}
  //             source={require('../../assets/images/Visa_card.png')}
  //           />
  //           <LineSpace space={10} horizontal={true} />
  //           <Image
  //             style={{ width: 47, height: 33 }}
  //             source={require('../../assets/images/Master_Card.png')}
  //           />
  //         </View>
  //       </TouchableOpacity>
  //       <LineSpace space={20} />

  //     </View>
  //   );
  // };

  // const successResult = () => (
  //   <PaymentResult>
  //     <Image
  //       style={{ width: 60, height: 60 }}
  //       resizeMode="contain"
  //       source={require('../../assets/images/available.png')}
  //     />
  //     <LineSpace />
  //     <TextHead style={{ textAlign: 'center' }}>
  //       Successfully completed the payment!
  //     </TextHead>
  //     <LineSpace />
  //     <NormalText style={{ textAlign: 'center' }}>
  //       Order number : {ShippingAddressId}
  //     </NormalText>
  //     <LineSpace space={25} />

  //     <StyledRawButton
  //       onPress={() => {
  //         navigation.popToTop(), navigation.navigate('MyOrders');
  //       }}>
  //       <Text>Go to your orders</Text>
  //     </StyledRawButton>
  //   </PaymentResult>
  // );

  // const failureResult = () => (
  //   <PaymentResult>
  //     <Image
  //       style={{ width: 60, height: 60 }}
  //       resizeMode="contain"
  //       source={require('../../assets/images/close_button.png')}
  //     />
  //     <LineSpace />
  //     <TextHead style={{ textAlign: 'center' }}>Payment Failed!</TextHead>
  //     <LineSpace />
  //     <NormalText style={{ textAlign: 'center' }}>
  //       Order number : {ShippingAddressId}
  //     </NormalText>
  //     <LineSpace space={25} />

  //     <StyledRawButton
  //       key="orders"
  //       onPress={() => {
  //         navigation.popToTop(), navigation.navigate('CartScreen');
  //       }}>
  //       <Text>Go to cart</Text>
  //     </StyledRawButton>
  //   </PaymentResult>
  // );

  // const expiredResult = () => (
  //   <PaymentResult>
  //     <Image
  //       style={{ width: 60, height: 60 }}
  //       resizeMode="contain"
  //       source={require('../../assets/images/close_button.png')}
  //     />
  //     <LineSpace />
  //     <TextHead style={{ textAlign: 'center' }}>Expired</TextHead>
  //     <LineSpace />
  //     <NormalText style={{ textAlign: 'center' }}>
  //       Order number : {ShippingAddressId}
  //     </NormalText>
  //     <LineSpace space={25} />

  //     <StyledRawButton
  //       key="orders"
  //       onPress={() => {
  //         navigation.popToTop(), navigation.navigate('CartScreen');
  //       }}>
  //       <Text>Go to cart</Text>
  //     </StyledRawButton>
  //   </PaymentResult>
  // );

// <<<<<<<<<<<<  test after done >>>>>>>>>>>>>>>
