import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { COLORS } from "../../constants";

const PayTimeModel = (props) => {
  const { pay, duration } = props;
  return (
    <View style={styles.boxes}>
      <View style={styles.boxContainer}>
        <View style={[styles.box, styles.shadow1]}>
          <Text
            style={[
              styles.cardTitle2,
              { marginLeft: 0, textAlign: "center", marginBottom: 10 },
            ]}
          >
            Total Payable
          </Text>
          <Text style={[styles.boxNb, { color: "#f9b664", marginBottom: 20}]}>${pay}</Text>
          <Text
            style={[
              styles.cardTitle2,
              { fontSize: 14, textAlign: "center", lineHeight: 18 },
            ]}
          >
            Your payment will be processed in your local currency with no
            additional charges
          </Text>
        </View>
      </View>
      {/* <View style={styles.boxContainer}>
        <View style={[styles.box, styles.shadow1]}>
          <Text
            style={[styles.cardTitle2, { marginLeft: 0, textAlign: "center" }]}
          >
            Consultation
          </Text>
          <Text
            style={[styles.cardTitle2, { marginLeft: 0, textAlign: "center" }]}
          >
            Time
          </Text>
          <Text style={[styles.boxNb, { color: "#f660be" }]}>
            {duration} min
          </Text>
        </View>
      </View> */}
    </View>
  );
};

export default PayTimeModel;

const styles = StyleSheet.create({
  // BOXES
  boxes: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
  },
  boxContainer: {
    width: "100%",
  },
  box: {
    backgroundColor: "white",
    padding: 20,
    alignItems: "center",
    borderRadius: 15,
    margin: 10,
  },
  boxTopText: {
    fontSize: 14,
  },
  boxNb: {
    fontSize: 24,
    fontWeight: "bold",
  },
  shadow1: {
    shadowColor: "#cdcddd",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0,
    shadowRadius: 8,
    elevation: 2,
  },
  cardTitle2: {
    color: COLORS.fontColor2,
    fontSize: 14,
    marginLeft: 10,
    margin: 0,
    lineHeight: 25,
  },
});
