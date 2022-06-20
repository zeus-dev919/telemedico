import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { COLORS, icons } from "../../constants";

const DoctorPaymentModel = (props) => {
  const { day, month, time, doctorFees, timeLeft, startTime } = props;
  console.log("Hello from Line 7");
  // console.log(time.toString().substr(0, 4));
  // let ch = time.toString().substr(0, 4);
  const [collapsed, setCollapsed] = useState(false);
  return (
    <View style={styles.containerBoxes}>
      <View style={styles.box}>
        <View style={styles.textContainer}>
          <Text style={styles.cardTitle3}>Consultation Earnings</Text>
          <Text style={styles.cardTitle3}>
            {day} {month} {time.toString().substr(0, 4)} at {startTime}
          </Text>
          <Text style={styles.cardTitle4}>
            {doctorFees ? `$${doctorFees}` : "$0"}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default DoctorPaymentModel;

const styles = StyleSheet.create({
  containerBoxes: {
    backgroundColor: "white",
    width: "100%",
    borderRadius: 30,
    paddingHorizontal: 10,
    paddingVertical: 15,
    marginBottom: 15,
  },
  box: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    paddingRight: 10,
  },
  textContainer: {
    flex: 1,
    paddingRight: 20,
    width: "100%",
  },
  cardTitle3: {
    color: COLORS.fontColor4,
    fontSize: 16,
    fontWeight: "bold",
    paddingLeft: 10,
    margin: 0,
    lineHeight: 29,
  },
  cardTitle4: {
    color: COLORS.fontColor2,
    fontSize: 18,
    fontWeight: "bold",
    paddingLeft: 10,
    margin: 0,
    lineHeight: 29,
    marginBottom: 5,
  },
  icon: {
    width: 23,
    height: 23,
    borderRadius: 50,
    tintColor: "white",
    zIndex: 1,
  },
  icon2: {
    width: 23,
    height: 23,
    borderRadius: 50,
    tintColor: "white",
    zIndex: 1,
    transform: [{ rotate: "180deg" }],
  },
  joinContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  doctorBtnStyle: {
    // backgroundColor: "#f7f9f8",
    backgroundColor: "#2758E4",
    borderRadius: 50,
    padding: 10,
  },
  doctorBtnStyleText: {
    // color: COLORS.fontColor4,
    color: "white",
    fontWeight: "bold",
    fontSize: 12,
  },
  shadow1: {
    shadowColor: "#cdcddd",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0,
    shadowRadius: 18,
    elevation: 8,
  },
});
