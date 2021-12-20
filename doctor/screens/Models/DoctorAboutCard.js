import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { COLORS } from "../../constants";

const DoctorAboutCard = (props) => {
  const { name, desc } = props;
  return (
    <View style={[styles.card1, styles.shadow1]}>
      <View style={styles.doctorCard}>
        <View style={styles.doctorCardLeft}>
          <Text style={styles.cardTitle1}>{name}</Text>
          <Text style={styles.cardTitle2}>{desc}</Text>
        </View>
      </View>
    </View>
  );
};

export default DoctorAboutCard;

const styles = StyleSheet.create({
  card1: {
    borderRadius: 25,
    backgroundColor: COLORS.bgColor2,
    paddingHorizontal: 20,
    paddingVertical: 20,
    margin: 10,
  },
  shadow1: {
    // Shadow Start
    shadowColor: "#cdcddd",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0,
    shadowRadius: 18,

    elevation: 2,
    // Shadow End
  },
  // Doctor Card
  doctorCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  doctorCardLeft: {
    padding: 0,
  },
  cardTitle1: {
    color: COLORS.fontColor4,
    fontSize: 22,
    fontWeight: "bold",
    marginLeft: 10,
    margin: 0,
    lineHeight: 29,
    marginBottom: 5,
  },
  cardTitle2: {
    color: COLORS.fontColor2,
    fontSize: 15,
    marginLeft: 10,
    margin: 0,
    lineHeight: 24,
  },
});
