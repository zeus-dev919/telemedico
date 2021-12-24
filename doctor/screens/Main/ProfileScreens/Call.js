import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { COLORS } from "../../../constants";
import AgoraUIKit from "agora-rn-uikit";

const Call = ({ navigation }) => {
  const [videoCall, setVideoCall] = useState(true);
  const rtcProps = {
    appId: "84359a98a49a41038df9ab26e2959fa2",
    channel: "test1",
  };
  return (
    <SafeAreaView style={styles.container}>
      {videoCall ? (
        <AgoraUIKit rtcProps={rtcProps} callbacks={() => setVideoCall(false)} />
      ) : (
        <Text onPress={() => setVideoCall(true)}>Start Call</Text>
      )}
    </SafeAreaView>
  );
};

export default Call;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.bgColor1,
    paddingTop: 20,
  },
});
