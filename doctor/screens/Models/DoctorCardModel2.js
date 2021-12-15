import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { COLORS } from "../../constants";

const DoctorCardModel2 = (props) => {
  const { name, desc, img, navigation } = props;
  const handleAppointment = () => {
    console.log("Appointment Clicked !!");
    navigation.navigate("appointment");
  };
  return (
    <View style={styles.doctorCard}>
      <View style={[styles.card, styles.shadow]}>
        <View style={styles.ImgContainer}>
          <View style={styles.doctorCardRight}>
            <View style={styles.statusIndic}></View>
            <Image
              style={styles.doctorAvatar}
              source={{
                uri: img,
              }}
              resizeMode="cover"
            />
          </View>
        </View>
        <Text style={styles.title1}>{name}</Text>
        <Text style={styles.title2}>{desc}</Text>
        <TouchableOpacity
          onPress={handleAppointment}
          style={[styles.doctorBtnStyle, styles.shadow1]}
        >
          <Text style={styles.doctorBtnStyleText}>Appointment</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DoctorCardModel2;

const styles = StyleSheet.create({
  //   Card
  doctorCard: {
    position: "relative",
    marginTop: 40,
  },
  card: {
    borderRadius: 25,
    backgroundColor: COLORS.bgColor2,
    paddingHorizontal: 15,
    paddingVertical: 30,
    margin: 10,
    alignItems: "center",
  },
  shadow: {
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
  ImgContainer: {
    position: "absolute",
    top: -30,
  },
  doctorCardRight: {
    padding: 5,
    position: "relative",
  },
  statusIndic: {
    position: "absolute",
    width: 10,
    height: 10,
    backgroundColor: "#06babe",
    top: 7,
    right: 7,
    zIndex: 2,
    borderRadius: 50,
  },
  doctorAvatar: {
    width: 50,
    height: 50,
    borderRadius: 50,
    zIndex: 1,
  },
  doctorBtnStyle: {
    backgroundColor: "#f7f9f8",
    borderRadius: 8,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginTop: 10,
  },
  doctorBtnStyleText: {
    color: COLORS.fontColor4,
    fontWeight: "bold",
    fontSize: 12,
  },
  title1: {
    color: COLORS.fontColor4,
    fontSize: 14,
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
});
