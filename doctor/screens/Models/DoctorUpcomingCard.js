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
          <View style={styles.containerBoxes}>
            <View style={styles.box}>
              <DayModel day={day} monthnb={nbDay} isSelected={false} bg="1" />
              <View style={styles.textContainer}>
                <Text style={styles.cardTitle3}>{spec}</Text>
                <Text style={styles.cardTitle4}>{time}</Text>
              </View>
              <View style={styles.box2}>
                <View style={styles.callIconBox}>
                  <Image
                    style={styles.icon}
                    source={{
                      uri: "https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/assets%2Ficons%2Fphone.png?alt=media&token=09a45e97-b8fd-42d1-92b6-264bcf0b5d4f",
                    }}
                    resizeMode="contain"
                  />
                </View>
                <View style={styles.callIconBox}>
                  <Image
                    style={styles.icon}
                    source={{
                      uri: "https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/assets%2Ficons%2Fvideo-camera.png?alt=media&token=32d77f62-426d-42ae-83d2-806a6b45e51a",
                    }}
                    resizeMode="contain"
                  />
                </View>
              </View>
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
    shadowColor: "#cdcddd",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0,
    shadowRadius: 18,

    elevation: 2,
  },
  // Doctor Card
  doctorCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  doctorCardLeft: {
    padding: 0,
    width: "100%",
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
    fontSize: 14,
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
  containerBoxes: {
    backgroundColor: "white",
    width: "100%",
    borderRadius: 30,
  },
  box: {
    flexDirection: "row",
    alignItems: "center",

    paddingHorizontal: 10,
    paddingVertical: 15,
    width: "100%",
  },
  box2: {
    flexDirection: "column",
    alignItems: "center",
  },
  textContainer: {
    flex: 1,
    paddingRight: 20,
    width: "100%",
  },
  callIconBox: {
    width: 40,
    height: 40,
    borderRadius: 50,
    backgroundColor: COLORS.bgColor2,
    marginRight: 10,
    marginBottom: 5,
    padding: 10,
  },
  icon: {
    width: 20,
    height: 20,
  },
});
