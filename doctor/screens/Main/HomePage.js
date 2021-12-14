import React from "react";
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
import {
  signOutProperty,
  fetchUser,
  ResetErrorsState,
} from "../../redux/User/user.actions";
import { useDispatch, useSelector } from "react-redux";
import { COLORS, icons, images } from "../../constants";

const cards = [
  {
    id: 0,
    title: "We do Taxes. and we them very well.",
    image: "source",
  },
  {
    id: 1,
    title: "We do Taxes. and we them very well.",
    image: "source",
  },
  {
    id: 0,
    title: "We do Taxes. and we them very well.",
    image: "source",
  },
  {
    id: 1,
    title: "We do Taxes. and we them very well.",
    image: "source",
  },
  {
    id: 0,
    title: "We do Taxes. and we them very well.",
    image: "source",
  },
  {
    id: 1,
    title: "We do Taxes. and we them very well.",
    image: "source",
  },
  {
    id: 0,
    title: "We do Taxes. and we them very well.",
    image: "source",
  },
  {
    id: 1,
    title: "We do Taxes. and we them very well.",
    image: "source",
  },
];

const mapState = ({ user }) => ({
  currentProperty: user.currentProperty,
  fetchUserD: user.fetchUserD,
  errors: user.errors,
});

const HomePage = ({ navigation }) => {
  console.log("Home Screen");

  const { currentProperty, fetchUserD, errors } = useSelector(mapState);
  console.log("maptate => ", { currentProperty, fetchUserD, errors });
  const dispatch = useDispatch();
  // dispatch(ResetStates);
  // dispatch(ResetAddMatterportForm());
  dispatch(ResetErrorsState);
  const handleSymthoms = () => {
    console.log("Sympptoms Checker !!")
    navigation.navigate('symthoms')
  };
  const handleDoctors = () => {
    console.log("Doctors !!")
    navigation.navigate('doctors')
  };
  const handleLungs = () => {
    console.log("Lungs Clicked !!");
  };
  const handleTooth = () => {
    console.log("Tooth Clicked !!");
  };
  const handleDermatologist = () => {
    console.log("Dermatologist Clicked !!");
  };
  const handleHeart = () => {
    console.log("Heart Clicked !!");
  };
  const handleBrain = () => {
    console.log("Brain Clicked !!");
  };
  const handlePsychology = () => {
    console.log("Psychology Clicked !!");
  };
  const handleUrology = () => {
    console.log("Urology Clicked !!");
  };
  const handleNutritionist = () => {
    console.log("Nutritionist Clicked !!");
  };
  const handleOthers = () => {
    console.log("Others Clicked !!");
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.subContainer}>
        {/* Red Header */}
        <View style={styles.header}>
          <View>
            <Image
              style={styles.logo}
              source={images.logo}
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
                source={images.mrAi}
                resizeMode="cover"
              />
              <View style={[styles.headerCardContent, styles.shadow]}>
                <Text style={styles.headerCardTitle}>DR. AI</Text>
                <Text style={styles.headerCardDescription}>
                  Free Symptoms checker
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.Headercard}
              onPress={handleDoctors}
            >
              <Image
                style={styles.cardImg}
                source={images.mrAi}
                resizeMode="cover"
              />
              <View style={[styles.headerCardContent, styles.shadow]}>
                <Text style={styles.headerCardTitle}>Top USA Specialists</Text>
                <Text style={styles.headerCardDescription}>
                  Video consult top USA doctors
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          {/* Specialities Title */}
          <View style={styles.specContainer}>
            <Text style={styles.SpecTitle}>Specialities</Text>
          </View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={styles.menuContent}>
              {/* Health Profile */}
              <TouchableOpacity onPress={handleLungs}>
                <View style={[styles.menuCard, styles.shadow]}>
                  <Image source={icons.lungs} style={styles.icon} />
                </View>
                <Text style={styles.menuCardTitle}>Pulmonary</Text>
              </TouchableOpacity>
              {/* Health Profile */}
              <TouchableOpacity onPress={handleTooth}>
                <View style={[styles.menuCard, styles.shadow]}>
                  <Image source={icons.tooth} style={styles.icon} />
                </View>
                <Text style={styles.menuCardTitle}>Tooth</Text>
              </TouchableOpacity>
              {/* Health Profile */}
              <TouchableOpacity onPress={handleDermatologist}>
                <View style={[styles.menuCard, styles.shadow]}>
                  <Image source={icons.dermis} style={styles.icon} />
                </View>
                <Text style={styles.menuCardTitle}>Dermatologist</Text>
              </TouchableOpacity>
              {/* Health Profile */}
              <TouchableOpacity onPress={handleHeart}>
                <View style={[styles.menuCard, styles.shadow]}>
                  <Image source={icons.heart} style={styles.icon} />
                </View>
                <Text style={styles.menuCardTitle}>Heart</Text>
              </TouchableOpacity>
              {/* Health Profile */}
              <TouchableOpacity onPress={handleBrain}>
                <View style={[styles.menuCard, styles.shadow]}>
                  <Image source={icons.brain} style={styles.icon} />
                </View>
                <Text style={styles.menuCardTitle}>Brain</Text>
              </TouchableOpacity>
              {/* Health Profile */}
              <TouchableOpacity onPress={handlePsychology}>
                <View style={[styles.menuCard, styles.shadow]}>
                  <Image source={icons.psychology} style={styles.icon} />
                </View>
                <Text style={styles.menuCardTitle}>Psychology</Text>
              </TouchableOpacity>
              {/* Health Profile */}
              <TouchableOpacity onPress={handleUrology}>
                <View style={[styles.menuCard, styles.shadow]}>
                  <Image source={icons.urology} style={styles.icon} />
                </View>
                <Text style={styles.menuCardTitle}>Urology</Text>
              </TouchableOpacity>
              {/* Health Profile */}
              <TouchableOpacity onPress={handleNutritionist}>
                <View style={[styles.menuCard, styles.shadow]}>
                  <Image source={icons.apple} style={styles.icon} />
                </View>
                <Text style={styles.menuCardTitle}>Nutritionist</Text>
              </TouchableOpacity>
              {/* Health Profile */}
              <TouchableOpacity onPress={handleOthers}>
                <View style={[styles.menuCard, styles.shadow]}>
                  <Image source={icons.menu9} style={styles.icon} />
                </View>
                <Text style={styles.menuCardTitle}>Others</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </ScrollView>
      </View>
      <ImageBackground
        style={[styles.fixed, styles.bgContainer, { zIndex: -1 }]}
        source={images.homeBg}
      />
    </SafeAreaView>
  );
};
export default HomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 20,
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
    paddingHorizontal: 15,
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
    top: 20,
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
  },
  Headercard: {
    // position: "relative",
    borderRadius: 10,
    marginHorizontal: 10,
    maxHeight: 200,
  },
  cardImg: {
    width: 160,
    height: 180,
    overflow: "hidden",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  headerCardContent: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
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
    flexWrap: "wrap",
  },
  // Specialities
  specContainer: {
    margin: 10,
    marginVertical: 20,
  },
  SpecTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: COLORS.fontColor1,
  },
  // icon
  icon: {
    width: 30,
    height: 30,
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
    width: 50,
    height: 50,
    borderColor: "#efefef",
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: "white",
    paddingVertical: 5,
    marginRight: 10,
  },
  menuCardTitle: {
    fontSize: 10,
    color: COLORS.fontColor1,
    textAlign: "center",
    marginBottom: 10,
  },
  shadow: {
    // Shadow Start
    shadowColor: COLORS.fontColor3,
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
