import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
  ImageBackground,
  ScrollView,
} from "react-native";
import { COLORS, images } from "../constants";
import { useDispatch } from "react-redux";
import { ResetStates } from "../redux/User/user.actions";
import Swiper from "react-native-swiper";

const Splash = ({ navigation }) => {
  console.log("Splash Screen");
  const [index, setIndex] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ResetStates());
  }, []);

  const RedirectRegister = () => {
    console.log("RedirectRegister Clicked !!");
    navigation.navigate("Register");
  };

  const RedirectLogin = () => {
    console.log("RedirectLogin Clicked !!");
    navigation.navigate("Login");
  };

  const handleForget = () => {
    navigation.navigate("Recovery");
  };
  const renderBg = () => {
    if (index === 0)
      return (
        <ImageBackground
          style={[styles.fixed, styles.bgcontainer, { zIndex: -1 }]}
          source={images.bg}
        />
      );
    if (index === 1)
      return (
        <ImageBackground
          style={[styles.fixed, styles.bgcontainer, { zIndex: -1 }]}
          source={images.bg1}
        />
      );
    if (index === 2)
      return (
        <ImageBackground
          style={[styles.fixed, styles.bgcontainer, { zIndex: -1 }]}
          source={images.bg2}
        />
      );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.flexContainer}>
          <Image
            style={styles.logo}
            source={images.logo_white}
            resizeMode="contain"
          />
          <View style={{ height: 250, paddingTop: 10, paddingHorizontal: 0 }}>
            <Swiper
              style={styles.wrapper}
              activeDot={
                <View
                  style={{
                    backgroundColor: COLORS.primary,
                    width: 8,
                    height: 8,
                    borderRadius: 4,
                    marginLeft: 3,
                    marginRight: 3,
                    marginTop: 3,
                    marginBottom: 3,
                  }}
                />
              }
              showsButtons={false}
              onIndexChanged={(i) => setIndex(i)}
            >
              <View style={styles.slide}>
                <Text style={styles.slideTitle}>Telehealth</Text>
                <Text style={styles.slideText}>
                  Affordable, Cross Border Care Access best qulity doctors cross
                  border 24 x 7
                </Text>
              </View>
              <View style={styles.slide}>
                <Text style={styles.slideTitle}>Dr. AI</Text>
                <Text style={styles.slideText}>
                  Personalized AI Powered Symptom Checker Check your symtoms on
                  a medically designed engineering powered platform 24 x 7 for
                  FREE
                </Text>
              </View>
              <View style={styles.slide}>
                <Text style={styles.slideTitle}>MyHealthPocket</Text>
                <Text style={styles.slideText}>
                  Carry your health records in pocket Get in control of your
                  health records by storing, accessing sharing whenever and
                  however you want.
                </Text>
              </View>
            </Swiper>
          </View>
          <View>
            <TouchableOpacity onPress={RedirectLogin}>
              <Text style={styles.u_btn}>LOGIN</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={RedirectRegister}>
              <Text style={styles.u_btn2}>SIGN UP</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.already} onPress={handleForget}>
              {/* <Text style={styles.label2}>Forget your Password?</Text> */}
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      {renderBg()}
    </SafeAreaView>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // position: "relative",
    // color: COLORS.primary,
    //   backgroundColor: "transparent",
  },
  flexContainer: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    // backgroundColor: "transparent",
  },
  logo: {
    width: 150,
    height: 150,
    marginTop: 50,
  },
  betweenLogin: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginVertical: 10,
  },
  hline: {
    borderBottomWidth: 0.5,
    borderBottomColor: "black",
    width: 100,
  },
  p_btn: {
    backgroundColor: COLORS.redColor,
    color: "white",
    fontSize: 15,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    paddingVertical: 12,
    paddingHorizontal: 35,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "transparent",
    marginVertical: 10,
    fontWeight: "600",
    width: 300,
  },
  u_btn: {
    backgroundColor: COLORS.blueColor,
    color: "black",
    fontSize: 15,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    paddingVertical: 12,
    paddingHorizontal: 35,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "transparent",
    marginVertical: 10,
    fontWeight: "600",
    width: 300,
  },
  u_btn2: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "white",
    color: "white",
    fontSize: 15,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    paddingVertical: 12,
    paddingHorizontal: 35,
    borderRadius: 10,
    marginVertical: 10,
    fontWeight: "600",
    width: 300,
  },
  label2: {
    textAlign: "left",
    fontSize: 14,
    fontWeight: "600",
    letterSpacing: 0.3,
    color: "black",
    textDecorationStyle: "solid",
    textDecorationColor: COLORS.greyColor,
    marginBottom: 10,
    marginLeft: 10,
  },
  already: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginBottom: 20,
  },
  // background
  bgcontainer: {
    width: Dimensions.get("window").width, //for full screen
    height: Dimensions.get("window").height, //for full screen
    // backgroundColor: "rgba(0, 0, 0, 1)",
    // opacity: 0.5,
  },
  fixed: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    opacity: 1,
  },
  // Slider
  slide: {
    // height: 200,
    // maxWidth: "100%",
    // alignItems: "center",
    // paddingHorizontal: 5,
  },
  slideTitle: {
    fontSize: 26,
    fontWeight: "bold",
    color: "rgba(256,256,256,0.7)",
    textAlign: "center",
    marginVertical: 20,
  },
  slideText: {
    color: "rgba(256,256,256,0.5)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
    lineHeight: 18,
    marginBottom: 5,
    paddingHorizontal: 10,
  },
});
