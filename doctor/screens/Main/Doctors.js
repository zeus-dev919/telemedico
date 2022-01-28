import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
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
import Header from "../Models/Header";
import { gql, useQuery } from "@apollo/client";

const DOCTOR_QUERY = gql`
  query {
    allDoctors {
      firstName
      lastName
      country
      state
      specialization {
        specializationName
      }
      consultationFees
      info
      consultationTime
    }
  }
`;
var tab = [];
const Doctors = ({ navigation }) => {
  const [doctors, setDoctors] = useState(null);
  const [search, setSearch] = useState("");
  const { data, loading } = useQuery(DOCTOR_QUERY);
  const handleLungs = () => {
    console.log("Lungs Clicked !!");
    navigation.navigate("doctorList", { filter: "1" });
  };
  const handleTooth = () => {
    console.log("Tooth Clicked !!");
    navigation.navigate("doctorList", { filter: "2" });
  };
  const handleDermatologist = () => {
    console.log("Dermatologist Clicked !!");
    navigation.navigate("doctorList", { filter: "3" });
  };
  const handleHeart = () => {
    console.log("Heart Clicked !!");
    navigation.navigate("doctorList", { filter: "4" });
  };
  const handleBrain = () => {
    console.log("Brain Clicked !!");
    navigation.navigate("doctorList", { filter: "5" });
  };
  const handlePsychology = () => {
    console.log("Psychology Clicked !!");
    navigation.navigate("doctorList", { filter: "6" });
  };
  const handleUrology = () => {
    console.log("Urology Clicked !!");
    navigation.navigate("doctorList", { filter: "7" });
  };
  const handleOthers = () => {
    console.log("Others Clicked !!");
    navigation.navigate("doctorList", { filter: "8" });
  };

  const getDoctors = () => {
    if (data) {
      for (let i = 0; i < 3; i++) {
        tab.push({
          name:
            data.allDoctors[i].firstName + " " + data.allDoctors[i].lastName,
          desc:
            (data.allDoctors[i].state ? data.allDoctors[i].state : "--") +
            " ," +
            (data.allDoctors[i].country ? data.allDoctors[i].country : "--"),
          img: data.allDoctors[i].avatar ? data.allDoctors[i].avatar : "",
          patients: data.allDoctors[i].patients
            ? data.allDoctors[i].patients
            : "--",
          experience: data.allDoctors[i].experience
            ? data.allDoctors[i].experience
            : "--",
          speciality: data.allDoctors[i].specialization.specializationName,
          info: data.allDoctors[i].info ? data.allDoctors[i].info : "--",
          fees: data.allDoctors[i].consultationFees
            ? data.allDoctors[i].consultationFees
            : "--",
            duration: data.allDoctors[i].consultationTime
              ? data.allDoctors[i].consultationTime
              : "--",
        });
      }
    }
  };
  useEffect(() => {
    if (data) {
      console.log("Data NEWWWW1 => ");
      getDoctors();
      setDoctors(tab);
    } else {
      console.log("Data NEWWWW2 => ");
    }
  }, [data]);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.subContainer}>
        {/* Red Header */}
        <Header avatar="" navigation={navigation} bg={COLORS.bgColor1} />
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
                onPress={handleLungs}
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
                onPress={handleTooth}
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
                onPress={handleDermatologist}
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
                onPress={handleHeart}
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
                onPress={handleBrain}
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
                onPress={handlePsychology}
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
                onPress={handleUrology}
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
                onPress={handleOthers}
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
        {tab.length > 0 ? (
          tab.map((item, index) => (
            <DoctorCardModel
              key={index}
              name={item.name}
              desc={item.desc}
              img={item.img}
              patients={item.patients}
              experience={item.experience}
              speciality={item.speciality}
              info={item.info}
              fees={item.fees}
              duration={item.duration}
              bg="0"
              navigation={navigation}
            />
          ))
        ) : (
          <Text style={styles.signup}>
            <ActivityIndicator size="large" color={COLORS.blueBtn} />
          </Text>
        )}
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
  signup: {
    color: "white",
    fontSize: 22,
    textAlign: "center",
    paddingVertical: 15,
    borderRadius: 10,
    marginVertical: 20,
  },
});
