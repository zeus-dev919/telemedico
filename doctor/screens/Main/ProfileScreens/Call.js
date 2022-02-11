import React, { useState } from "react";
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { COLORS, icons } from "../../../constants";
import AgoraUIKit from "agora-rn-uikit";

const Call = ({ navigation }) => {
  const [videoCall, setVideoCall] = useState(true);
  const rtcProps = {
    appId: "bd08af716cc44039a1d69c7b912974c6",
    channel: "beta_testing",
    token:
      "006bd08af716cc44039a1d69c7b912974c6IAAgbic1m/7YKXcXu9w7l/rKIECywDsCflllaEaDRqKXMpXaHNMAAAAAEAAxc9bWtO8HYgEAAQC07wdi",
    layout: 1,
    mode: 0,
  };
  const callbacks = {
    EndCall: () => setVideoCall(false),
  };
  return (
    <SafeAreaView style={styles.container}>
      {videoCall ? (
        <View style={{ flex: 1, width: "100%", height: "100%" }}>
          <AgoraUIKit rtcProps={rtcProps} callbacks={callbacks} />
        </View>
      ) : (
        <View
          style={{
            flex: 1,
            justifyContent: "space-around",
            alignItems: "center",
            padding: 50,
          }}
        >
          <View style={{ marginBottom: 20 }}>
            <Text style={styles.title1}>Waiting Room</Text>
          </View>
          <View style={{ marginBottom: 20 }}>
            <Image
              style={styles.icon}
              source={icons.videoCall}
              resizeMode="contain"
            />
          </View>
          <TouchableOpacity
            style={[styles.button1, styles.signup]}
            onPress={() => setVideoCall(true)}
          >
            <Text style={styles.signupText}>Rejoin</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button1, styles.signup]}
            onPress={() => navigation.navigate("home")}
          >
            <Text style={styles.signupText}>Back Home</Text>
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
};

export default Call;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.bgColor1,
    paddingTop: 0,
  },
  title1: {
    color: COLORS.fontColor4,
    fontSize: 22,
    fontWeight: "bold",
    margin: 0,
    lineHeight: 29,
    textAlign: "center",
  },
  title2: {
    color: COLORS.fontColor2,
    fontSize: 12,
    margin: 0,
    padding: 0,
    lineHeight: 29,
    textAlign: "center",
  },
  icon: {
    width: 150,
    height: 150,
  },
  // Btn
  button1: {
    width: "100%",
    marginVertical: 15,
    padding: 5,
  },
  signup: {
    backgroundColor: COLORS.blueBtn,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderRadius: 10,
    marginVertical: 10,
    paddingHorizontal: 20,
  },
  signupText: {
    color: "white",
    fontSize: 22,
    textAlign: "center",
    paddingVertical: 10,
  },
});
