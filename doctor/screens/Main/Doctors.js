import React, { useState } from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import IconFeather from "react-native-vector-icons/Feather";
import { COLORS, icons, images } from "../../constants";
import DayModel from "../Models/DayModel";
import DoctorCardModel from "../Models/DoctorCardModel";

const Doctors = ({ navigation }) => {
  const [search, setSearch] = useState("");
  const [selectedDate, setSelectedDate] = useState(true);
  const handleDoctorList = () => {
    console.log("doctorList Clicked !!");
    navigation.navigate("doctorList");
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.subContainer}>
        {/* Red Header */}
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.headerSub}
            onPress={() => navigation.openDrawer()}
          >
            <IconFeather
              name="menu"
              size={20}
              color="black"
              style={styles.icon_style}
            />
          </TouchableOpacity>
          <View>
            <Image
              style={styles.logo}
              source={icons.avatar}
              resizeMode="contain"
            />
          </View>
        </View>
      </View>
      {/* ScrollView */}
      <ScrollView style={styles.scrollView}>
        {/* Card1 */}
        <View style={[styles.card, styles.shadow1]}>
          <Text style={styles.cardTitle}>Let's Find Your</Text>
          <Text style={styles.cardTitle}>Doctor</Text>
          <View style={styles.icons}>
            {/* tooth */}
            <TouchableOpacity
              onPress={handleDoctorList}
              style={[styles.iconContainer, styles.shadow]}
            >
              <Image
                style={styles.icon}
                source={icons.tooth2}
                resizeMode="contain"
              />
            </TouchableOpacity>
            {/* Heart */}
            <TouchableOpacity
              onPress={handleDoctorList}
              style={[styles.iconContainer, styles.shadow]}
            >
              <Image
                style={styles.icon}
                source={icons.heart2}
                resizeMode="contain"
              />
            </TouchableOpacity>
            {/* Eye */}
            <TouchableOpacity
              onPress={handleDoctorList}
              style={[styles.iconContainer, styles.shadow]}
            >
              <Image
                style={styles.icon}
                source={icons.eye}
                resizeMode="contain"
              />
            </TouchableOpacity>
            {/* Vaccin */}
            <TouchableOpacity
              onPress={handleDoctorList}
              style={[styles.iconContainer, styles.shadow]}
            >
              <Image
                style={styles.icon}
                source={icons.syringe}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
          <View style={[styles.searchContainer, styles.shadow]}>
            <Image
              style={styles.search}
              source={icons.search}
              resizeMode="contain"
            />
            <TextInput
              style={styles.searchInput}
              value={search}
              onChangeText={setSearch}
              placeholder="Search Doctor"
              placeholderTextColor="#b2b8cc"
            />
          </View>
        </View>
        {/* Card2 */}
        <View style={[styles.card, styles.shadow1]}>
          <Text style={styles.cardTitle1}>December, 2021</Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={styles.icons}>
              {/* Week */}
              <DayModel day="MON" monthnb="9" isSelected={selectedDate} />
              <DayModel day="TUE" monthnb="10" isSelected={selectedDate} />
              <DayModel day="WED" monthnb="11" isSelected={!selectedDate} />
              <DayModel day="THU" monthnb="12" isSelected={selectedDate} />
              <DayModel day="FRI" monthnb="13" isSelected={selectedDate} />
              <DayModel day="SAT" monthnb="14" isSelected={selectedDate} />
              {/* Week */}
              <DayModel day="MON" monthnb="16" isSelected={selectedDate} />
              <DayModel day="TUE" monthnb="17" isSelected={selectedDate} />
              <DayModel day="WED" monthnb="18" isSelected={selectedDate} />
              <DayModel day="THU" monthnb="19" isSelected={selectedDate} />
              <DayModel day="FRI" monthnb="20" isSelected={selectedDate} />
              <DayModel day="SAT" monthnb="21" isSelected={selectedDate} />
              {/* Week */}
              <DayModel day="MON" monthnb="23" isSelected={selectedDate} />
              <DayModel day="TUE" monthnb="24" isSelected={selectedDate} />
              <DayModel day="WED" monthnb="25" isSelected={selectedDate} />
              <DayModel day="THU" monthnb="26" isSelected={selectedDate} />
              <DayModel day="FRI" monthnb="27" isSelected={selectedDate} />
              <DayModel day="SAT" monthnb="28" isSelected={selectedDate} />
              {/* Week */}
              <DayModel day="MON" monthnb="30" isSelected={selectedDate} />
              <DayModel day="TUE" monthnb="31" isSelected={selectedDate} />
              <DayModel day="WED" monthnb="1" isSelected={selectedDate} />
              <DayModel day="THU" monthnb="2" isSelected={selectedDate} />
              <DayModel day="FRI" monthnb="3" isSelected={selectedDate} />
              <DayModel day="SAT" monthnb="4" isSelected={selectedDate} />
            </View>
          </ScrollView>
        </View>
        {/* Card3 */}
        <DoctorCardModel
          name="Dr. Lida Gutierrez"
          desc="Heart Surgeon, London, England"
          img="https://image.shutterstock.com/image-photo/profile-side-photo-young-woman-260nw-1961318188.jpg"
          bg="0"
        />
        {/* Card3 */}
        <DoctorCardModel
          name="Dr. Lida Gutierrez"
          desc="Heart Surgeon, London, England"
          img="https://image.shutterstock.com/image-photo/profile-side-photo-young-woman-260nw-1961318188.jpg"
          bg="0"
        />
        {/* Card3 */}
        <DoctorCardModel
          name="Dr. Lida Gutierrez"
          desc="Heart Surgeon, London, England"
          img="https://image.shutterstock.com/image-photo/profile-side-photo-young-woman-260nw-1961318188.jpg"
          bg="0"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Doctors;

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
  //   ScrollView
  scrollView: {
    flex: 1,
    paddingHorizontal: 15,
    backgroundColor: COLORS.bgColor1,
  },

  // Card
  card: {
    borderRadius: 25,
    backgroundColor: COLORS.bgColor2,
    paddingHorizontal: 20,
    paddingVertical: 30,
    margin: 10,
  },

  //   Find Doctor
  cardTitle: {
    color: COLORS.fontColor4,
    fontSize: 30,
    fontWeight: "bold",
    marginLeft: 10,
    margin: 0,
    lineHeight: 29,
  },
  cardTitle1: {
    color: COLORS.fontColor4,
    fontSize: 22,
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
    lineHeight: 29,
  },
  icons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
  iconContainer: {
    backgroundColor: "white",
    width: 45,
    height: 45,
    marginHorizontal: 10,
    borderRadius: 50,
    padding: 13,
  },
  icon: {
    width: 20,
    height: 20,
  },
  //   Search Box
  searchContainer: {
    backgroundColor: "white",
    color: COLORS.primary,
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderRadius: 8,
  },
  search: {
    width: 15,
    height: 15,
    marginRight: 10,
  },
  searchInput: {
    fontSize: 16,
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
});
