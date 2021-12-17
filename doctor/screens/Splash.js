import React, { useEffect } from "react";
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

var count = 0;

const Splash = ({ navigation }) => {
  console.log("Splash Screen");
  console.log("count =>", count);
  const dispatch = useDispatch();

  useEffect(() => {
    if (count == 0) {
      dispatch(ResetStates());
      count++;
    }
  }, [count]);

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

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.flexContainer}>
          <Image
            style={styles.logo}
            source={images.logo_white}
            resizeMode="contain"
          />
          <View style={{ height: 250, paddingTop: 40, paddingHorizontal: 20 }}>
            <Text
              style={{
                fontSize: 30,
                fontWeight: "bold",
                color: "white",
                textAlign: "center",
                marginVertical: 20,
              }}
            >
              Dr, AI
            </Text>
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
            >
              <View style={styles.slide}>
                <Text style={styles.slideText}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry
                </Text>
              </View>
              <View style={styles.slide}>
                <Text style={styles.slideText}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry
                </Text>
              </View>
              <View style={styles.slide}>
                <Text style={styles.slideText}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry
                </Text>
              </View>
            </Swiper>
          </View>
          <View style={{ marginBottom: 200 }}>
            <TouchableOpacity onPress={RedirectRegister}>
              <Text style={styles.u_btn}>Sign Up</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={RedirectLogin}>
              <Text style={styles.u_btn2}>Sign In</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.already} onPress={handleForget}>
              {/* <Text style={styles.label2}>Forget your Password?</Text> */}
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <ImageBackground
        style={[styles.fixed, styles.bgcontainer, { zIndex: -1 }]}
        source={images.bg}
      />
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
  },
  slideText: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
  },
});
