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
      city
      profilePicture
      specialization {
        specializationName
      }
      consultationFees
      info
      consultationTime
      experience
    }
  }
`;
var tab = [];
const Doctors = ({ navigation }) => {
  const [doctors, setDoctors] = useState(null);
  const [search, setSearch] = useState("");
  const { data, loading } = useQuery(DOCTOR_QUERY);
  const handleLungs = () => {
    navigation.navigate("doctorList", { filter: "Oncology" });
  };
  const handleTooth = () => {
    navigation.navigate("doctorList", { filter: "Endocrinology" });
  };
  const handleDermatologist = () => {
    navigation.navigate("doctorList", { filter: "Cardiology" });
  };
  const handleHeart = () => {
    navigation.navigate("doctorList", { filter: "Rheumatology" });
  };
  const handleBrain = () => {
    console.log("Brain Clicked !!");
    navigation.navigate("doctorList", { filter: "Fertility" });
  };
  const handlePsychology = () => {
    navigation.navigate("doctorList", { filter: "Surgery" });
  };
  const handleUrology = () => {
    navigation.navigate("doctorList", { filter: "Mental" });
  };
  const handleOthers = () => {
    navigation.navigate("doctorList", { filter: "*" });
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
          img: data.allDoctors[i].profilePicture
            ? data.allDoctors[i].profilePicture
            : "",
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
      getDoctors();
      setDoctors(tab);
    }
  }, [data]);
  const handleMoreDoctors = () => {
    navigation.navigate("doctorList", { filter: "8" });
  };
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        {/* Red Header */}
        <Header navigation={navigation} bg={COLORS.bgColor1} isHome={false} />
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
                  source={{
                    uri: "https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/assets%2Ficons%2Fbody%2Flungs.png?alt=media&token=51b706ef-dafc-484f-954b-ab8ceba22a67",
                  }}
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
                  source={{
                    uri: "https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/assets%2Ficons%2Fbody%2Fthyroid.png?alt=media&token=5ea0ce92-b936-4797-8f5c-e388bf252419",
                  }}
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
                  source={{
                    uri: "https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/assets%2Ficons%2Fbody%2Fheart.png?alt=media&token=8d5d1ab2-5ec6-480d-b09b-105a54dd0eb1",
                  }}
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
                  source={{
                    uri: "https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/assets%2Ficons%2Fbody%2Fjoints.png?alt=media&token=0a758366-8ee0-4b67-99c0-ea8ec030c0f6",
                  }}
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
                  source={{
                    uri: "https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/assets%2Ficons%2Fbody%2Freproductive.png?alt=media&token=c142449d-0f72-470b-9c36-a164f0133e99",
                  }}
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
                  source={{
                    uri: "https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/assets%2Ficons%2Fbody%2Fanatomy.png?alt=media&token=ddd77593-c445-4112-b7e6-f87ab1ad1258",
                  }}
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
                  source={{
                    uri: "https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/assets%2Ficons%2Fbody%2Fpsychology.png?alt=media&token=002d3ca4-dcf2-4180-92e0-34485613e844",
                  }}
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
                  source={{
                    uri: "https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/assets%2Ficons%2Fbody%2Fdermis.png?alt=media&token=e7169f17-ca33-49bc-a361-9bc2019de915",
                  }}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
        {/* Card3 */}
        {tab === 0 && (
          <View style={styles.noChat}>
            <Text style={styles.noChatText1}>No Doctors yet.</Text>
            <Text style={styles.noChatText2}>
              Start Finding Doctors by pressing in the above items.
            </Text>
          </View>
        )}
        {tab.length > 0 ? (
          tab.map((item, index) => (
            <DoctorCardModel
              key={index}
              name={item.name}
              desc={item.desc}
              country={item.country}
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
          <ActivityIndicator size="large" color={COLORS.blueBtn} />
        )}
        {tab.length > 0 && (
          <TouchableOpacity onPress={handleMoreDoctors} style={styles.relevant}>
            <Text style={styles.relevantTitle}>See more doctors</Text>
          </TouchableOpacity>
        )}
      </ScrollView>
    </View>
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
  relevant: {
    backgroundColor: COLORS.blueBtn,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderRadius: 10,
    marginVertical: 15,
    paddingVertical: 8,
    paddingHorizontal: 15,
  },
  relevantTitle: {
    fontSize: 18,
    color: "white",
  },
  noChat: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: "10%",
  },
  noChatText1: {
    textAlign: "center",
    fontSize: 16,
    color: "black",
    maxWidth: "80%",
    marginBottom: 10,
  },
  noChatText2: {
    textAlign: "center",
    fontSize: 12,
    color: "black",
    maxWidth: "80%",
  },
});
