import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { COLORS, icons } from "../../constants";

const DoctorCardModel = (props) => {
  const { name, location, experience, speciality, img, bg, navigation } = props;
  var check = false;
  if (bg === "0") check = true;
  return (
    <View
      style={
        check ? [styles.card1, styles.shadow1] : [styles.card, styles.shadow1]
      }
    >
      {check ? (
        <>
          <View style={styles.doctorCard}>
            <View style={styles.doctorCardLeft}>
              <Text style={styles.cardTitle1}>{name}</Text>
              <Text style={styles.cardTitle2}>{location}</Text>
              <Text style={styles.cardTitle2}>{speciality}</Text>
            </View>
            <View style={styles.doctorCardRight}>
              <View style={styles.statusIndic}></View>
              {img.length > 0 ? (
                <Image
                  style={styles.doctorAvatar}
                  source={{
                    uri: img,
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
          </View>
          <View style={styles.doctorBottomCard}>
            <Text style={styles.doctorBottomCardLeftText}>
              {experience}yrs+
            </Text>
            <TouchableOpacity
              style={[styles.doctorBtnStyle, styles.shadow1]}
              onPress={() => navigation.navigate("appointment")}
            >
              <Text style={styles.doctorBtnStyleText}>Request Consult</Text>
            </TouchableOpacity>
          </View>
        </>
      ) : (
        <>
          <View style={styles.doctorCard}>
            <View style={styles.doctorCardLeft}>
              <Text style={styles.cardTitle1}>{name}</Text>
              <Text style={styles.cardTitle2}>{location}</Text>
              <Text style={styles.cardTitle2}>{speciality}</Text>
            </View>
            <View style={styles.doctorCardRight}>
              <View style={styles.statusIndic1}></View>
              <View style={styles.statusIndic2}></View>
              <Image
                style={styles.doctorAvatar}
                source={{
                  uri: img,
                }}
                resizeMode="cover"
              />
            </View>
          </View>
          <View style={styles.boxes}>
            <View style={styles.boxContainer}>
              <View style={[styles.box, styles.shadow1]}>
                <Text
                  style={[
                    styles.cardTitle2,
                    { marginLeft: 0, textAlign: "center" },
                  ]}
                >
                  Patients
                </Text>
                <Text style={[styles.boxNb, { color: "#f9b664" }]}>500+</Text>
              </View>
            </View>
            <View style={styles.boxContainer}>
              <View style={[styles.box, styles.shadow1]}>
                <Text
                  style={[
                    styles.cardTitle2,
                    { marginLeft: 0, textAlign: "center" },
                  ]}
                >
                  Experience
                </Text>
                <Text style={[styles.boxNb, { color: "#f660be" }]}>10yrs+</Text>
              </View>
            </View>
          </View>
          {/* <View style={styles.doctorBottomCard2}>
            <TouchableOpacity
              style={[styles.doctorBtnStyle2, styles.shadow2]}
              onPress={console.log("Book Appointemnt")}
            >
              <Text style={styles.doctorBtnStyleText2}>Book Appointment</Text>
            </TouchableOpacity>
          </View> */}
        </>
      )}
    </View>
  );
};

export default DoctorCardModel;

const styles = StyleSheet.create({
  card: {
    borderRadius: 25,
    backgroundColor: COLORS.bgColor2,
    paddingHorizontal: 20,
    paddingVertical: 20,
    margin: 10,
  },
  card1: {
    borderRadius: 25,
    backgroundColor: "white",
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
    shadowRadius: 8,

    elevation: 2,
    // Shadow End
  },
  shadow2: {
    // Shadow Start
    shadowColor: "#2758E4",
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
  doctorCardRight: {
    padding: 5,
    position: "relative",
  },
  statusIndic: {
    position: "absolute",
    width: 12,
    height: 12,
    backgroundColor: "#06babe",
    top: 13,
    right: 13,
    zIndex: 2,
    borderRadius: 50,
  },
  statusIndic1: {
    position: "absolute",
    width: 12,
    height: 12,
    backgroundColor: "#06babe",
    top: 12,
    right: 12,
    zIndex: 3,
    borderRadius: 50,
  },
  statusIndic2: {
    position: "absolute",
    width: 18,
    height: 18,
    backgroundColor: COLORS.bgColor1,
    top: 10,
    right: 10,
    zIndex: 2,
    borderRadius: 50,
  },
  doctorAvatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    zIndex: 1,
  },
  doctorBottomCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  doctorBottomCard2: {
    marginTop: 10,
  },
  doctorBottomCardLeftText: {
    color: "#f9c37e",
    marginLeft: 10,
    fontWeight: "bold",
    fontSize: 24,
  },
  doctorBtnStyle: {
    backgroundColor: "#f7f9f8",
    borderRadius: 8,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  doctorBtnStyle2: {
    backgroundColor: "#2758E4",
    borderRadius: 8,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  doctorBtnStyleText: {
    color: COLORS.fontColor4,
    fontWeight: "bold",
    fontSize: 12,
  },
  doctorBtnStyleText2: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
    paddingVertical: 5,
  },
  cardTitle1: {
    color: COLORS.fontColor4,
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10,
    margin: 0,
    lineHeight: 29,
  },
  cardTitle2: {
    color: COLORS.fontColor2,
    fontSize: 14,
    marginLeft: 10,
    margin: 0,
    lineHeight: 25,
  },
  // BOXES
  boxes: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
  },
  boxContainer: {
    width: "50%",
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
});
