import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { COLORS, icons } from "../../constants";
import DayModel from "./DayModel";

const DoctorUpcomingCard = (props) => {
  const { day, nbDay, time, spec } = props;
  return (
    <View style={[styles.card1, styles.shadow1]}>
      <View style={styles.doctorCard}>
        <View style={styles.doctorCardLeft}>
          <Text style={styles.cardTitle1}>Upcoming Schedule</Text>
          <View style={styles.box}>
            <DayModel day={day} monthnb={nbDay} isSelected={false} bg="1" />
            <View style={styles.textContainer}>
              <Text style={styles.cardTitle3}>{spec}</Text>
              <Text style={styles.cardTitle4}>{time}</Text>
            </View>
            <View style={styles.callIconBox}>
              <Image
                style={styles.icon}
                source={icons.phone}
                resizeMode="contain"
              />
            </View>
            <View style={styles.callIconBox}>
              <Image
                style={styles.icon}
                source={icons.video}
                resizeMode="contain"
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default DoctorUpcomingCard;

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

    elevation: 8,
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
    marginBottom: 15,
  },
  cardTitle2: {
    color: COLORS.fontColor2,
    fontSize: 15,
    marginLeft: 10,
    margin: 0,
    lineHeight: 24,
  },
  cardTitle3: {
    color: COLORS.fontColor4,
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 10,
    margin: 0,
    lineHeight: 29,
  },
  cardTitle4: {
    color: COLORS.fontColor2,
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10,
    margin: 0,
    lineHeight: 29,
    marginBottom: 5,
  },
  box: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 30,
    width: "100%",
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  textContainer: {
    marginRight: 20,
  },
  callIconBox: {
    width: 35,
    height: 35,
    borderRadius: 50,
    backgroundColor: COLORS.bgColor2,
    marginRight: 10,
    padding: 8,
  },
  icon: {
    width: 20,
    height: 20,
  },
});
