import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import {
  Entypo,
  FontAwesome,
  FontAwesome5,
  MaterialIcons,
} from "@expo/vector-icons";
import { COLORS, images } from "../constants";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from "@react-navigation/drawer";
import * as WebBrowser from "expo-web-browser";
// Screen
import HomePage from "./Main/HomePage";
import Doctors from "./Main/Doctors";
import IntakeForm from "./Main/DoctorScreens/IntakeForm";

const CustomDrawerContent = ({ navigation }) => {
  const handleHome = () => {
    navigation.navigate("home");
  };
  const handleProfile = () => {
    navigation.navigate("profile");
  };
  const handleDrai = () => {
    navigation.navigate("age");
  };
  const handledoctors = () => {
    navigation.navigate("doctors");
  };
  const handleConsults = () => {
    navigation.navigate("consults");
  };
  const _handlePressTerms = () => {
    WebBrowser.openBrowserAsync("http://medipocket.world/privacy-policy/");
  };
  const _handlePressTerms1 = () => {
    WebBrowser.openBrowserAsync("http://medipocket.world/terms-conditions/");
  };
  const handleLogout = () => {
    console.log("LogOut");
  };
  return (
    <DrawerContentScrollView style={{ padding: 0 }}>
      <View style={{ flex: 1, width: "100%" }}>
        <View style={styles.profileStyle}>
          <Image
            style={styles.imgStyle}
            source={images.logo}
            resizeMode="contain"
          />
        </View>
        <View style={styles.drawerContent}>
          {/* Home */}
          <TouchableOpacity onPress={handleHome} style={styles.item}>
            <FontAwesome5
              style={styles.itemIcon}
              name="home"
              size={20}
              color="#9ba8bb"
            />
            <Text style={styles.itemText}>Home</Text>
          </TouchableOpacity>
          {/* Home */}
          <TouchableOpacity onPress={handleProfile} style={styles.item}>
            <FontAwesome5
              style={styles.itemIcon}
              name="user-alt"
              size={20}
              color="#9ba8bb"
            />
            <Text style={styles.itemText}>Profile</Text>
          </TouchableOpacity>
          {/* Chat */}
          <TouchableOpacity onPress={handleDrai} style={styles.item}>
            <Entypo
              style={styles.itemIcon}
              name="message"
              size={22}
              color="#9ba8bb"
            />
            <Text style={styles.itemText}>DR. AI</Text>
          </TouchableOpacity>
          {/* About Us */}
          <TouchableOpacity onPress={handledoctors} style={styles.item}>
            <MaterialIcons
              style={styles.itemIcon}
              name="folder-special"
              size={22}
              color="#9ba8bb"
            />
            <Text style={styles.itemText}>USA Specialists</Text>
          </TouchableOpacity>
          {/* Services */}
          <TouchableOpacity onPress={handleConsults} style={styles.item}>
            <Entypo
              style={styles.itemIcon}
              name="clipboard"
              size={20}
              color="#9ba8bb"
            />
            <Text style={styles.itemText}>My consults</Text>
          </TouchableOpacity>
          {/* Contact */}
          <TouchableOpacity onPress={_handlePressTerms} style={styles.item}>
            <MaterialIcons
              style={styles.itemIcon}
              name="privacy-tip"
              size={20}
              color="#9ba8bb"
            />
            <Text style={styles.itemText}>Privacy Policy</Text>
          </TouchableOpacity>
          {/* Help */}
          <TouchableOpacity onPress={_handlePressTerms1} style={styles.item}>
            <Entypo
              style={styles.itemIcon}
              name="help-with-circle"
              size={20}
              color="#9ba8bb"
            />
            <Text style={styles.itemText}>Terms of use</Text>
          </TouchableOpacity>
          {/* Horizontal Line */}
          {/* <View style={styles.itemBorderTop}></View> */}
          {/* Logout */}
          <TouchableOpacity onPress={handleLogout} style={styles.item}>
            <FontAwesome
              style={styles.itemIcon}
              name="power-off"
              size={20}
              color="#9ba8bb"
            />
            <Text style={styles.itemText}>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
    </DrawerContentScrollView>
  );
};

const Drawer = createDrawerNavigator();

const Home = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
      }}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      initialRouteName="home"
      style={styles.drawerNavStyle}
    >
      <Drawer.Screen name="home" component={HomePage} />
      <Drawer.Screen name="doctors" component={Doctors} />
      <Drawer.Screen name="intakeForm" component={IntakeForm} />
    </Drawer.Navigator>
  );
};

export default Home;

const styles = StyleSheet.create({
  profileStyle: {
    padding: 0,
    margin: 0,
    // backgroundColor: COLORS.primary,
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  imgStyle: {
    // backgroundColor: "red",
    width: 100,
    // height: 80,
    // borderRadius: 50,
  },
  textStyle: {
    color: "white",
    fontSize: 14,
    marginVertical: 15,
  },
  drawerContent: {
    padding: 0,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
  },
  itemIcon: {
    marginRight: 20,
    marginLeft: 20,
  },
  itemText: {
    color: "#20283d",
    fontSize: 14,
    fontWeight: "bold",
  },
  itemBorderTop: {
    borderBottomColor: "grey",
    borderBottomWidth: 1,
  },
  drawerNavStyle: {
    padding: 0,
    margin: 0,
  },
  // Backgorund Img
  bgContainter: {
    width: Dimensions.get("window").width, //for full screen
    height: Dimensions.get("window").height, //for full screen
  },
  fixed: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});
