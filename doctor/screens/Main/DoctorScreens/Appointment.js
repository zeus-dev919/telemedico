import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../../constants";
import DoctorCardModel from "../../Models/DoctorCardModel";
import DoctorAboutCard from "../../Models/DoctorAboutCard";
import DoctorUpcomingCard from "../../Models/DoctorUpcomingCard";

const Appointment = ({ route, navigation }) => {
  const { name, desc, img, patients, experience, speciality, info, fees, duration } =
    route.params;
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
            <Text style={styles.title1}>Doctor's Profile</Text>
          </View>
          <View style={{ width: 30 }}></View>
        </View>
      </View>
      {/* ScrollView */}
      <ScrollView style={styles.scrollView}>
        <DoctorCardModel
          name={name}
          location={desc}
          speciality={speciality}
          experience={experience}
          patients={patients}
          img={img}
          bg="1"
          navigation={navigation}
        />
        <DoctorAboutCard name="About Doctor" desc={info} />
        {/* <DoctorUpcomingCard
          day="WED"
          nbDay="11"
          spec="Heart Surgeon"
          time="9:00 am"
        />
        <DoctorUpcomingCard
          day="WED"
          nbDay="11"
          spec="Heart Surgeon"
          time="9:00 am"
        /> */}
        <View style={styles.doctorBottomCard2}>
          <TouchableOpacity
            style={[styles.doctorBtnStyle2, styles.shadow2]}
            onPress={() =>
              navigation.navigate("payment", {
                name: name,
                desc: desc,
                img: img,
                patients: patients,
                experience: experience,
                speciality: speciality,
                info: info,
                fees: fees,
                duration: duration,
              })
            }
          >
            <Text style={styles.doctorBtnStyleText2}>Book Appointment</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Appointment;

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
  // Book Appointment
  doctorBottomCard2: {
    marginTop: 15,
    marginBottom: 40,
  },
  doctorBtnStyleText2: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
    paddingVertical: 5,
  },
  shadow2: {
    shadowColor: "#2758E4",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0,
    shadowRadius: 8,

    elevation: 2,
  },
  doctorBtnStyle2: {
    backgroundColor: "#2758E4",
    borderRadius: 8,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});
