import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { COLORS, icons } from "../../constants";
import DayModel from "./DayModel";

const DoctorUpcomingConsult = (props) => {
  const { day, nbDay, time, spec, doctorImg, navigation } = props;
  const handleJoin = () => {
    navigation.navigate("beforecall");
  };
  return (
    <View style={[styles.card1, styles.shadow1]}>
      <View style={styles.doctorCard}>
        <View style={styles.doctorCardLeft}>
          <Text style={styles.cardTitle1}>Upcoming Consult</Text>
          <View style={styles.containerBoxes}>
            <View style={styles.box}>
              <DayModel day={day} monthnb={nbDay} isSelected={false} bg="1" />
              <View style={styles.textContainer}>
                <Text style={styles.cardTitle3}>{spec}</Text>
                <Text style={styles.cardTitle4}>{time}</Text>
              </View>
              {doctorImg ? (
                <Image
                  style={styles.doctorAvatar}
                  source={{
                    uri: "https://9to5mac.com/wp-content/uploads/sites/6/2021/09/Apple-TV.png?w=1600",
                  }}
                  resizeMode="cover"
                />
              ) : (
                <Image
                  style={styles.doctorAvatar}
                  source={icons.placeholder}
                  resizeMode="cover"
                />
              )}
            </View>
            <View style={styles.joinContainer}>
              <TouchableOpacity
                onPress={handleJoin}
                style={[styles.doctorBtnStyle, styles.shadow1]}
              >
                <Text style={styles.doctorBtnStyleText}>Join Call</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default DoctorUpcomingConsult;

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
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  box: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    paddingRight: 10,
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
  joinContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  doctorBtnStyle: {
    // backgroundColor: "#f7f9f8",
    backgroundColor: "#2758E4",
    borderRadius: 8,
    paddingHorizontal: 40,
    paddingVertical: 10,
    marginTop: 10,
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
  doctorAvatar: {
    width: 50,
    height: 50,
    borderRadius: 50,
    zIndex: 1,
  },
});
