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
import DoctorCardModel from "../Models/DoctorCardModel";

const Doctors = ({ navigation }) => {
  const [search, setSearch] = useState("");
  const handleDoctorList = () => {
    console.log("doctorList Clicked !!");
    navigation.navigate("doctorList");
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.subContainer}>
        {/* Red Header */}
        <View style={styles.header}>
          <View>
            <Image
              style={styles.avatar}
              source={icons.avatar}
              resizeMode="contain"
            />
          </View>
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
        </View>
      </View>
      {/* ScrollView */}
      <ScrollView style={styles.scrollView}>
        {/* Card1 */}
        <View style={[styles.card, styles.shadow1]}>
          <Text style={styles.cardTitle}>Best USA </Text>
          <Text style={styles.cardTitle}>Specialists</Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={styles.icons}>
              {/* lungs */}
              <TouchableOpacity
                onPress={handleDoctorList}
                style={[styles.iconContainer, styles.shadow]}
              >
                <Image
                  style={styles.icon}
                  source={icons.lungs}
                  resizeMode="contain"
                />
              </TouchableOpacity>
              {/* thyroid */}
              <TouchableOpacity
                onPress={handleDoctorList}
                style={[styles.iconContainer, styles.shadow]}
              >
                <Image
                  style={styles.icon}
                  source={icons.thyroid}
                  resizeMode="contain"
                />
              </TouchableOpacity>
              {/* heart */}
              <TouchableOpacity
                onPress={handleDoctorList}
                style={[styles.iconContainer, styles.shadow]}
              >
                <Image
                  style={styles.icon}
                  source={icons.heart}
                  resizeMode="contain"
                />
              </TouchableOpacity>
              {/* joints */}
              <TouchableOpacity
                onPress={handleDoctorList}
                style={[styles.iconContainer, styles.shadow]}
              >
                <Image
                  style={styles.icon}
                  source={icons.joints}
                  resizeMode="contain"
                />
              </TouchableOpacity>
              {/* reproductive */}
              <TouchableOpacity
                onPress={handleDoctorList}
                style={[styles.iconContainer, styles.shadow]}
              >
                <Image
                  style={styles.icon}
                  source={icons.reproductive}
                  resizeMode="contain"
                />
              </TouchableOpacity>
              {/* anatomy */}
              <TouchableOpacity
                onPress={handleDoctorList}
                style={[styles.iconContainer, styles.shadow]}
              >
                <Image
                  style={styles.icon}
                  source={icons.anatomy}
                  resizeMode="contain"
                />
              </TouchableOpacity>
              {/* psychology */}
              <TouchableOpacity
                onPress={handleDoctorList}
                style={[styles.iconContainer, styles.shadow]}
              >
                <Image
                  style={styles.icon}
                  source={icons.psychology}
                  resizeMode="contain"
                />
              </TouchableOpacity>
              {/* dermis */}
              <TouchableOpacity
                onPress={handleDoctorList}
                style={[styles.iconContainer, styles.shadow]}
              >
                <Image
                  style={styles.icon}
                  source={icons.dermis}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            </View>
          </ScrollView>

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
              placeholder="Search by specialization"
              placeholderTextColor="#b2b8cc"
            />
          </View>
        </View>
        {/* Card3 */}
        <DoctorCardModel
          name="Dr. Lida Gutierrez"
          location="Los Angeles, USA"
          speciality="Heart Surgeon"
          experience="10"
          img="https://image.shutterstock.com/image-photo/profile-side-photo-young-woman-260nw-1961318188.jpg"
          bg="0"
          navigation={navigation}
        />
        {/* Card3 */}
        <DoctorCardModel
          name="Dr. Lida Gutierrez"
          location="Los Angeles, USA"
          speciality="Heart Surgeon"
          experience="10"
          img="https://image.shutterstock.com/image-photo/profile-side-photo-young-woman-260nw-1961318188.jpg"
          bg="0"
          navigation={navigation}
        />
        {/* Card3 */}
        <DoctorCardModel
          name="Dr. Lida Gutierrez"
          location="Los Angeles, USA"
          speciality="Heart Surgeon"
          experience="10"
          img="https://image.shutterstock.com/image-photo/profile-side-photo-young-woman-260nw-1961318188.jpg"
          bg="0"
          navigation={navigation}
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
    width: 80,
    height: 80,
    marginTop: 5,
  },
  avatar: {
    width: 30,
    height: 30,
    marginTop: 5,
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
    padding: 10,
  },
  icon: {
    width: 25,
    height: 25,
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
    shadowRadius: 2,

    elevation: 2,
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
    shadowRadius: 8,

    elevation: 2,
    // Shadow End
  },
});
