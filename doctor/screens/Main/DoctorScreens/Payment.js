import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../../constants";
import PayTimeModel from "../../Models/PayTimeModel";
import PayCardsModel from "../../Models/PayCardsModel";

const Payments = ({ route, navigation }) => {
  const {
    id,
    name,
    desc,
    img,
    patients,
    experience,
    speciality,
    info,
    fees,
    duration,
  } = route.params;
  console.log("LOOK1 =>", {
    name,
    desc,
    img,
    patients,
    experience,
    speciality,
    info,
    fees,
    duration,
  });
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
            <Text style={styles.title1}>Payment Method</Text>
          </View>
          <View style={{ width: 30 }}></View>
        </View>
      </View>
      {/* ScrollView */}
      <ScrollView style={styles.scrollView}>
        {/* Payment Details */}
        <PayTimeModel pay={fees} duration={duration} />
        {/* Payment Form */}
        <PayCardsModel name={name} pay={fees} navigation={navigation} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Payments;

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
});
