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

const Appointment = ({ navigation }) => {
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
            <Text style={styles.title1}>Appointment</Text>
          </View>
          <View style={{ width: 30 }}></View>
        </View>
      </View>
      {/* ScrollView */}
      <ScrollView style={styles.scrollView}>
        <DoctorCardModel
          name="Dr. Lida Gutierrez"
          desc="Heart Surgeon, London, England"
          img="https://image.shutterstock.com/image-photo/profile-side-photo-young-woman-260nw-1961318188.jpg"
          bg="1"
        />
        <DoctorAboutCard
          name="About Doctor"
          desc="Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Praesent sapîan massa, convallis a pellentesque nec, egestas non"
        />
        <DoctorUpcomingCard
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
        />
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
    paddingTop: 20,
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
