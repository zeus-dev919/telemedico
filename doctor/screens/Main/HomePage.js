import React, { useEffect } from "react";
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
import IconFeather from "react-native-vector-icons/Feather";
import { ResetErrorsState } from "../../redux/User/user.actions";
import { useDispatch, useSelector } from "react-redux";
import { COLORS, icons, images } from "../../constants";
import { gql, useQuery } from "@apollo/client";

const mapState = ({ user }) => ({
  currentProperty: user.currentProperty,
  fetchUserD: user.fetchUserD,
  errors: user.errors,
});

const USER_QUERY = gql`
  query {
    me {
      firstName
      lastName
    }
  }
`;

const HomePage = ({ route, navigation }) => {
  console.log("Home Screen");
  const dispatch = useDispatch();
  const { currentProperty, fetchUserD, errors } = useSelector(mapState);
  console.log("maptate => ", { currentProperty, fetchUserD, errors });
  const { data, loading } = useQuery(USER_QUERY);
  console.log("Data =>", data, loading);
  // const { newAccount, token, user } = route?.params;
  // console.log(" Details => ", newAccount, token, user);
  useEffect(() => {
    // if (newAccount) {
    //   navigation.navigate("selectProfile");
    // }
  }, []);
  dispatch(ResetErrorsState);
  const handleSymthoms = () => {
    console.log("Sympptoms Checker !!");
    navigation.navigate("age");
  };
  const handleDoctors = () => {
    console.log("Doctors !!");
    navigation.navigate("doctors");
  };
  const handleProfileRedirect = () => {
    navigation.navigate("profile");
  };
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
  const handleConsult = () => {
    console.log("Video Consult Our Top USA Specialists !!");
    navigation.navigate("doctors");
  };
  const handleOthers = () => {
    console.log("Others Clicked !!");
    navigation.navigate("doctorList", { filter: "8" });
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.subContainer}>
        {/* Red Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={handleProfileRedirect}>
            <Image
              style={styles.avatar}
              source={icons.placeholder}
              resizeMode="contain"
            />
          </TouchableOpacity>
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
        {/* Fixed Image */}
        <ScrollView style={styles.scrollView}>
          {/* <Text style={{ fontSize: 25 }}>Welcome Page</Text> */}
          <View style={styles.headerCards}>
            <TouchableOpacity
              style={styles.Headercard}
              onPress={handleSymthoms}
            >
              <Image
                style={styles.cardImg}
                source={images.right_img}
                // resizeMode="cover"
              />
              <View style={[styles.headerCardContent, styles.shadow]}>
                <Text style={styles.headerCardTitle}>DR. AI</Text>
                <Text style={styles.headerCardDescription}>
                  Free Symptoms{"\n"} checker
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.Headercard} onPress={handleDoctors}>
              <Image
                style={styles.cardImg}
                source={images.left_img}
                resizeMode="cover"
              />
              <View style={[styles.headerCardContent, styles.shadow]}>
                <Text style={styles.headerCardTitle}>Top USA Specialists</Text>
                <Text style={styles.headerCardDescription}>
                  Video consult top USA doctors
                </Text>
              </View>
            </TouchableOpacity>
            <ImageBackground
              style={[styles.fixed, styles.bgContainer, { zIndex: -1 }]}
              source={images.homeBg}
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
                <Image source={icons.lungs} style={styles.icon} />
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
                <Image source={icons.thyroid} style={styles.icon} />
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
                <Image source={icons.heart} style={styles.icon} />
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
                <Image source={icons.joints} style={styles.icon} />
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
                <Image source={icons.reproductive} style={styles.icon} />
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
                <Image source={icons.anatomy} style={styles.icon} />
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
                <Image source={icons.psychology} style={styles.icon} />
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
                <Image source={icons.dermis} style={styles.icon} />
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
          {/* <View style={styles.specContainer}>
            <Text style={styles.SpecTitle}>Packages</Text>
          </View>
          <View style={styles.packages}>
            <View style={styles.package}>
              <Image
                style={styles.packageImg}
                source={{
                  uri: "https://www.fraserinstitute.org/sites/default/files/styles/large/public/waiting-your-turn-2017-web.jpg?itok=-Tl8eEoR",
                }}
                resizeMode="contain"
              />
              <Text style={styles.packageTitle1}>Antigent Test</Text>
              <Text style={styles.packageTitle2}>K-Klinic</Text>
            </View>
          </View> */}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};
export default HomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 0,
  },
  subContainer: {
    flex: 1,
    flexDirection: "column",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    height: 60,
    paddingHorizontal: 20,
  },
  logo: {
    width: 80,
    height: 80,
    marginTop: 5,
    // borderRadius: 50,
  },
  avatar: {
    width: 35,
    height: 35,
    marginTop: 5,
    borderRadius: 200,
  },
  headerSub: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  icon_style: {
    marginRight: 10,
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
    // marginBottom: 100,
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
    fontSize: 14,
    textAlign: "center",
    marginVertical: 5,
  },
  headerCardDescription: {
    color: "grey",
    fontSize: 14,
    textAlign: "center",
    paddingHorizontal: 10,
    marginBottom: 10,
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
