import React from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS, icons, images } from "../../../constants";
import DoctorCardModel2 from "../../Models/DoctorCardModel2";
const DoctorsList = ({ navigation }) => {
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
            <Text style={styles.title1}>Doctor List</Text>
          </View>
          <View style={{ width: 30 }}></View>
        </View>
      </View>
      {/* ScrollView */}
      <ScrollView style={styles.scrollView}>
        <View style={styles.doctorCards}>
          {/* Card */}
          <DoctorCardModel2
            name="Christina Frazier"
            desc="Heart Surgeon, London"
            img="https://image.shutterstock.com/image-photo/profile-side-photo-young-woman-260nw-1961318188.jpg"
            navigation={navigation}
          />
          {/* Card */}
          <DoctorCardModel2
            name="Jane Andrews"
            desc="Heart Surgeon, London"
            img="https://image.shutterstock.com/image-photo/profile-side-photo-young-woman-260nw-1961318188.jpg"
            navigation={navigation}
          />
          {/* Card */}
          <DoctorCardModel2
            name="Alma Wallace"
            desc="Heart Surgeon, London"
            img="https://image.shutterstock.com/image-photo/profile-side-photo-young-woman-260nw-1961318188.jpg"
            navigation={navigation}
          />
          {/* Card */}
          <DoctorCardModel2
            name="Mayme Gomez"
            desc="Heart Surgeon, London"
            img="https://image.shutterstock.com/image-photo/profile-side-photo-young-woman-260nw-1961318188.jpg"
            navigation={navigation}
          />
          {/* Card */}
          <DoctorCardModel2
            name="Iva Carpenter"
            desc="Heart Surgeon, London"
            img="https://image.shutterstock.com/image-photo/profile-side-photo-young-woman-260nw-1961318188.jpg"
            navigation={navigation}
          />
          {/* Card */}
          <DoctorCardModel2
            name="Chester Huff"
            desc="Heart Surgeon, London"
            img="https://image.shutterstock.com/image-photo/profile-side-photo-young-woman-260nw-1961318188.jpg"
            navigation={navigation}
          />
          <DoctorCardModel2
            name="Christina Frazier"
            desc="Heart Surgeon, London"
            img="https://image.shutterstock.com/image-photo/profile-side-photo-young-woman-260nw-1961318188.jpg"
            navigation={navigation}
          />
          {/* Card */}
          <DoctorCardModel2
            name="Jane Andrews"
            desc="Heart Surgeon, London"
            img="https://image.shutterstock.com/image-photo/profile-side-photo-young-woman-260nw-1961318188.jpg"
            navigation={navigation}
          />
          {/* Card */}
          <DoctorCardModel2
            name="Alma Wallace"
            desc="Heart Surgeon, London"
            img="https://image.shutterstock.com/image-photo/profile-side-photo-young-woman-260nw-1961318188.jpg"
            navigation={navigation}
          />
          {/* Card */}
          <DoctorCardModel2
            name="Mayme Gomez"
            desc="Heart Surgeon, London"
            img="https://image.shutterstock.com/image-photo/profile-side-photo-young-woman-260nw-1961318188.jpg"
            navigation={navigation}
          />
          {/* Card */}
          <DoctorCardModel2
            name="Iva Carpenter"
            desc="Heart Surgeon, London"
            img="https://image.shutterstock.com/image-photo/profile-side-photo-young-woman-260nw-1961318188.jpg"
            navigation={navigation}
          />
          {/* Card */}
          <DoctorCardModel2
            name="Chester Huff"
            desc="Heart Surgeon, London"
            img="https://image.shutterstock.com/image-photo/profile-side-photo-young-woman-260nw-1961318188.jpg"
            navigation={navigation}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DoctorsList;

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
  doctorCards: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
});
