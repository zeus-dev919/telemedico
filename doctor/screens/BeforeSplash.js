import React, { useEffect } from "react";
import { StyleSheet, Image, View } from "react-native";
import { COLORS, images } from "../constants";

const BeforeSplash = ({ navigation }) => {
  console.log("Before Splash Screen");
  // useEffect(() => {
  //   setTimeout(() => {
  //     navigation.navigate("Splash");
  //   }, 3000);
  // }, []);

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={images.logo_white}
        resizeMode="contain"
      />
    </View>
  );
};

export default BeforeSplash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.primary,
  },
  logo: {
    width: 200,
    height: 200,
  },
});
