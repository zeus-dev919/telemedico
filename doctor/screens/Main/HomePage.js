import React, { useEffect, useState } from "react";
import {
  Dimensions,
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { ResetErrorsState, setDoctor } from "../../redux/User/user.actions";
import { useDispatch, useSelector } from "react-redux";
import { COLORS, icons, images } from "../../constants";
import { gql, useQuery } from "@apollo/client";
import Header from "../Models/Header";
import DoctorUpcomingConsult from "../Models/DoctorUpcomingConsult";
import DoctorHomeConsult from "../Models/DoctorHomeConsult";

const mapState = ({ user }) => ({
  userD: user.userD,
  doctorD: user.doctorD,
});

const DOCTOR_QUERY = gql`
  query {
    allDoctors {
      firstName
      lastName
      specialization {
        specializationName
      }
      profilePicture
      consultationTime
      timeSlots
      username {
        email
      }
    }
  }
`;

const HomePage = ({ navigation }) => {
  console.log("Home Screen");
  const dispatch = useDispatch();
  const { userD, doctorD } = useSelector(mapState);
  const { data, loading } = useQuery(DOCTOR_QUERY);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!done) {
      if (data) {
        let i = 0;
        while (
          data.allDoctors[i]?.username?.email !== userD.email &&
          i < data.allDoctors?.length
        ) {
          i++;
        }
        if (data.allDoctors[i]?.username?.email === userD.email) {
          setDone(true);
          dispatch(setDoctor(data.allDoctors[i]));
        }
      }
    }
  }, [data]);

  dispatch(ResetErrorsState);
  const handleSymthoms = () => {
    navigation.navigate("age");
  };
  const handleDoctors = () => {
    navigation.navigate("doctors");
  };
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
    navigation.navigate("doctorList", { filter: "Fertility" });
  };
  const handlePsychology = () => {
    navigation.navigate("doctorList", { filter: "Surgery" });
  };
  const handleUrology = () => {
    navigation.navigate("doctorList", { filter: "Mental" });
  };
  const handleConsult = () => {
    navigation.navigate("doctors", { nav: navigation });
  };
  const handleOthers = () => {
    navigation.navigate("doctorList", { filter: "*" });
  };
  return (
    <View style={doctorD ? styles.container2 : styles.container}>
      <View style={styles.subContainer}>
        {/* Red Header */}
        <Header navigation={navigation} bg="" isHome={true} />
        {/* Fixed Image */}
        <ScrollView style={styles.scrollView}>
          {/* <Text style={{ fontSize: 25 }}>Welcome Page</Text> */}
          {!doctorD ? (
            <>
              <View style={styles.headerCards}>
                <TouchableOpacity
                  style={styles.Headercard}
                  onPress={handleSymthoms}
                >
                  <Image
                    style={styles.cardImg}
                    source={{
                      uri: "https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/assets%2Fimages%2Fright_img.png?alt=media&token=f4c52de7-4981-4bed-8877-2562c3f42881",
                    }}
                    // resizeMode="cover"
                  />
                  <View style={[styles.headerCardContent, styles.shadow]}>
                    <Text style={styles.headerCardTitle}>DR. AI</Text>
                    <Text style={styles.headerCardDescription}>
                      Free Symptoms{"\n"} checker
                    </Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.Headercard}
                  onPress={handleDoctors}
                >
                  <Image
                    style={styles.cardImg}
                    source={{
                      uri: "https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/assets%2Fimages%2Fleft_img.png?alt=media&token=3b1e05b7-1b30-4209-a6c2-df19582872d5",
                    }}
                    resizeMode="cover"
                  />
                  <View style={[styles.headerCardContent, styles.shadow]}>
                    <Text style={styles.headerCardTitle}>
                      Top USA Specialists
                    </Text>
                    <Text style={styles.headerCardDescription}>
                      Video consult top USA doctors
                    </Text>
                  </View>
                </TouchableOpacity>
                <ImageBackground
                  style={[styles.fixed, styles.bgContainer, { zIndex: -1 }]}
                  source={{
                    uri: "https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/assets%2Fimages%2FhomeBg.png?alt=media&token=3cbc2277-915d-4ad6-85df-dcc98f84e7f7",
                  }}
                />
              </View>
              {/* Specialities Title */}
              <View style={styles.specContainer}>
                <Text style={styles.SpecTitle}>Specialities</Text>
              </View>
              {/* <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}> */}
              <View style={styles.menuContent}>
                {/* Health Profile */}
                <TouchableOpacity
                  style={styles.cardContainer99}
                  onPress={handleLungs}
                >
                  <View style={[styles.menuCard, styles.shadow]}>
                    <Image
                      source={{
                        uri: "https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/assets%2Ficons%2Fbody%2Flungs.png?alt=media&token=51b706ef-dafc-484f-954b-ab8ceba22a67",
                      }}
                      style={styles.icon}
                    />
                  </View>
                  <Text style={styles.menuCardTitle}>Oncology</Text>
                  <Text style={styles.menuCardTitle1}>cancer</Text>
                </TouchableOpacity>
                {/* Health Profile */}
                <TouchableOpacity
                  style={styles.cardContainer99}
                  onPress={handleTooth}
                >
                  <View style={[styles.menuCard, styles.shadow]}>
                    <Image
                      source={{
                        uri: "https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/assets%2Ficons%2Fbody%2Fthyroid.png?alt=media&token=5ea0ce92-b936-4797-8f5c-e388bf252419",
                      }}
                      style={styles.icon}
                    />
                  </View>
                  <Text style={styles.menuCardTitle}>Endocrinology</Text>
                  <Text style={styles.menuCardTitle1}>Diabetes, Thyroid</Text>
                </TouchableOpacity>
                {/* Health Profile */}
                <TouchableOpacity
                  style={styles.cardContainer99}
                  onPress={handleDermatologist}
                >
                  <View style={[styles.menuCard, styles.shadow]}>
                    <Image
                      source={{
                        uri: "https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/assets%2Ficons%2Fbody%2Fheart.png?alt=media&token=8d5d1ab2-5ec6-480d-b09b-105a54dd0eb1",
                      }}
                      style={styles.icon}
                    />
                  </View>
                  <Text style={styles.menuCardTitle}>Cardiology</Text>
                  <Text style={styles.menuCardTitle1}>Heart Problems</Text>
                </TouchableOpacity>
                {/* Health Profile */}
                <TouchableOpacity
                  style={styles.cardContainer99}
                  onPress={handleHeart}
                >
                  <View style={[styles.menuCard, styles.shadow]}>
                    <Image
                      source={{
                        uri: "https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/assets%2Ficons%2Fbody%2Fjoints.png?alt=media&token=0a758366-8ee0-4b67-99c0-ea8ec030c0f6",
                      }}
                      style={styles.icon}
                    />
                  </View>
                  <Text style={styles.menuCardTitle}>Rheumatology</Text>
                  <Text style={styles.menuCardTitle1}>Arthritis, Joints</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.menuContent}>
                {/* Health Profile */}
                <TouchableOpacity
                  style={styles.cardContainer99}
                  onPress={handleBrain}
                >
                  <View style={[styles.menuCard, styles.shadow]}>
                    <Image
                      source={{
                        uri: "https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/assets%2Ficons%2Fbody%2Freproductive.png?alt=media&token=c142449d-0f72-470b-9c36-a164f0133e99",
                      }}
                      style={styles.icon}
                    />
                  </View>
                  <Text style={styles.menuCardTitle}>Fertility</Text>
                  <Text style={styles.menuCardTitle1}>IVF, Treatments</Text>
                </TouchableOpacity>
                {/* Health Profile */}
                <TouchableOpacity
                  style={styles.cardContainer99}
                  onPress={handlePsychology}
                >
                  <View style={[styles.menuCard, styles.shadow]}>
                    <Image
                      source={{
                        uri: "https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/assets%2Ficons%2Fbody%2Fanatomy.png?alt=media&token=ddd77593-c445-4112-b7e6-f87ab1ad1258",
                      }}
                      style={styles.icon}
                    />
                  </View>
                  <Text style={styles.menuCardTitle}>Plastic Surgery</Text>
                  <Text style={styles.menuCardTitle1}>Nose, Body</Text>
                </TouchableOpacity>
                {/* Health Profile */}
                <TouchableOpacity
                  style={styles.cardContainer99}
                  onPress={handleUrology}
                >
                  <View style={[styles.menuCard, styles.shadow]}>
                    <Image
                      source={{
                        uri: "https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/assets%2Ficons%2Fbody%2Fpsychology.png?alt=media&token=002d3ca4-dcf2-4180-92e0-34485613e844",
                      }}
                      style={styles.icon}
                    />
                  </View>
                  <Text style={styles.menuCardTitle}>Mental Health</Text>
                  <Text style={styles.menuCardTitle1}>Anxiety, Depression</Text>
                </TouchableOpacity>
                {/* Health Profile */}
                <TouchableOpacity
                  style={styles.cardContainer99}
                  onPress={handleOthers}
                >
                  <View style={[styles.menuCard, styles.shadow]}>
                    <Image
                      source={{
                        uri: "https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/assets%2Ficons%2Fbody%2Fdermis.png?alt=media&token=e7169f17-ca33-49bc-a361-9bc2019de915",
                      }}
                      style={styles.icon}
                    />
                  </View>
                  <Text style={styles.menuCardTitle}>More</Text>
                  <Text style={styles.menuCardTitle1}>Skin, Neuro</Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity style={styles.button1} onPress={handleConsult}>
                <Text style={styles.signup}>
                  Video Consult Our Top USA Specialists
                </Text>
              </TouchableOpacity>
            </>
          ) : null}
          {doctorD && <DoctorHomeConsult navigation={navigation} />}
        </ScrollView>
      </View>
    </View>
  );
};
export default HomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 0,
  },
  container2: {
    flex: 1,
    backgroundColor: COLORS.bgColor2,
    paddingTop: 0,
  },
  subContainer: {
    flex: 1,
    flexDirection: "column",
  },

  logo: {
    width: 80,
    height: 80,
    marginTop: 5,
    // borderRadius: 50,
  },
  scrollView: {
    flex: 1,
    // paddingHorizontal: 15,
  },
  card: {
    backgroundColor: "red",
    width: "100%",
    height: 100,
    margin: 10,
  },
  cardText: {
    color: "black",
    fontSize: 18,
  },
  //   Background
  bgContainer: {
    width: Dimensions.get("window").width, //for full screen
    height: Dimensions.get("window").height, //for full screen
  },
  fixed: {
    position: "absolute",
    top: -30,
    left: 0,
    right: 0,
    bottom: 0,
  },
  //   Header Cards
  headerCards: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 30,
    width: "100%",
  },

  Headercard: {
    // position: "relative",
    borderRadius: 10,
    width: "50%",
    paddingHorizontal: 10,
    // maxHeight: 200,
  },

  cardImg: {
    width: "100%",
    height: 100,
    overflow: "hidden",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },

  headerCardContent: {
    // position: "absolute",
    // bottom: -75,
    // left: 0,
    // right: 0,
    backgroundColor: COLORS.primary,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  headerCardTitle: {
    color: "black",
    fontSize: 16,
    textAlign: "center",
    marginVertical: 5,
    fontWeight: "bold",
  },
  headerCardDescription: {
    color: "black",
    fontSize: 14,
    textAlign: "center",
    paddingHorizontal: 10,
    marginBottom: 10,
    fontWeight: "600",
  },
  menuContent: {
    flexDirection: "row",
    paddingHorizontal: 10,
    // flexWrap: "wrap",
    // backgroundColor: "yellow",
  },
  // Specialities
  specContainer: {
    margin: 10,
    marginTop: 20,
  },
  SpecTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: COLORS.fontColor1,
  },
  // icon
  icon: {
    width: 32,
    height: 32,
    marginHorizontal: 15,
    marginVertical: 5,
  },
  menuCard: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
    marginHorizontal: 10,
    width: 60,
    height: 60,
    borderColor: "#efefef",
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: "white",
    paddingVertical: 5,
    marginRight: 10,
  },
  cardContainer99: {
    width: "25%",
    alignItems: "center",
  },
  menuCardTitle: {
    fontSize: 10,
    color: COLORS.fontColor1,
    textAlign: "center",
    marginBottom: 5,
  },
  menuCardTitle1: {
    fontSize: 10,
    color: "grey",
    textAlign: "center",
    marginBottom: 10,
  },
  shadow: {
    shadowColor: COLORS.primary,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0,
    shadowRadius: 2,

    elevation: 4,
  },

  // Packages
  packages: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  package: {
    padding: 0,
    margin: 5,
    marginHorizontal: 10,
    width: "44%",
    marginBottom: 10,
  },
  packageImg: {
    width: "100%",
    height: 100,
    borderRadius: 40,
    // marginBottom: 5,
  },
  packageTitle1: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 2,
    paddingLeft: 10,
    color: COLORS.fontColor1,
  },
  packageTitle2: {
    fontSize: 14,
    marginBottom: 5,
    paddingLeft: 10,
    color: COLORS.fontColor2,
  },
  button1: {
    marginVertical: 20,
    padding: 5,
    alignItems: "center",
  },
  signup: {
    backgroundColor: COLORS.blueBtn,
    color: "white",
    fontSize: 14,
    textAlign: "center",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 6,
    // marginVertical: 20,
  },
});
