import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS, icons } from "../../../constants";
import TimeLeft from "../../Models/TimeLeft";

const BeforeCall = ({ navigation, route }) => {
  const { timeLeft, RTCToken, channelName } = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.subContainer}>
        {/* Red Header */}
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.headerSub}
            onPress={() => navigation.goBack()}
          >
            <Ionicons
              name="ios-arrow-back-sharp"
              size={24}
              color="black"
              style={styles.icon_style}
            />
          </TouchableOpacity>
          <View style={styles.titleConatiner}>
            <Text style={styles.title1}>My Consults</Text>
          </View>
          <View style={{ width: 30 }}></View>
        </View>
      </View>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.cardTitle2}>Waiting Room</Text>
        <View style={{ alignItems: "center" }}>
          <View style={{ marginBottom: 20 }}>
            <Image
              style={styles.icon}
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/assets%2Ficons%2Fprofile%2Fhourglass.png?alt=media&token=7c5842e7-417a-468c-9d53-7533c839a101",
              }}
              resizeMode="contain"
            />
          </View>
          <View>
            <Text style={styles.title1}>Your Consultation Starts In</Text>
            <Text style={styles.title2}>Please wait until call start</Text>
          </View>
        </View>
        <View style={styles.countdown}>
          <Text style={[styles.title1, { marginTop: 20, fontSize: 30 }]}>
            Timer
          </Text>
          <TimeLeft
            date={timeLeft}
            RTCToken={RTCToken}
            channelName={channelName}
            navigation={navigation}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default BeforeCall;

const styles = StyleSheet.create({
  // Header
  container: {
    flex: 1,
    backgroundColor: COLORS.bgColor1,
    paddingTop: 0,
  },
  subContainer: {
    // flex: 1,
    flexDirection: "column",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: COLORS.bgColor1,
    height: 60,
    paddingHorizontal: 30,
  },
  logo: {
    width: 30,
    height: 30,
  },
  headerSub: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  icon_style: {
    marginRight: 10,
  },
  titleConatiner: {
    padding: 5,
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
  //   ScrollView
  scrollView: {
    flex: 1,
    paddingHorizontal: 15,
    backgroundColor: COLORS.bgColor1,
  },
  title2: {
    color: COLORS.fontColor2,
    fontSize: 14,
    margin: 0,
    padding: 0,
    lineHeight: 20,
    textAlign: "center",
    paddingHorizontal: 20,
  },

  cardTitle2: {
    color: COLORS.fontColor2,
    fontSize: 14,
    textAlign: "center",
    marginBottom: 20,
  },
  icon: {
    width: 80,
    height: 80,
  },
  //   countdown
  countdown: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
