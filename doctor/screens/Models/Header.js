import React from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import IconFeather from "react-native-vector-icons/Feather";
import { useSelector } from "react-redux";
import { icons, images } from "../../constants";
import { Ionicons } from "@expo/vector-icons";
import { useDrawerStatus } from '@react-navigation/drawer';

const mapState = ({ user }) => ({
  userD: user.userD,
});

const Header = (props) => {
  const { navigation, bg, isHome } = props;
  const { userD } = useSelector(mapState);
  // const isDrawerOpen = useDrawerStatus() === 'open';
  // console.log('')
  return (
    <View
      style={[styles.header, { backgroundColor: bg.length > 0 ? bg : "white" }]}
    >
      {/* <TouchableOpacity onPress={() => navigation.navigate("profile")}>
        {userD?.profilePic?.length > 0 ? (
          <Image
            style={styles.avatar}
            source={{ uri: userD.profilePic }}
            resizeMode="cover"
          />
        ) : (
          <Image
            style={styles.avatar}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/assets%2Ficons%2Fplaceholder.png?alt=media&token=50c889a1-fb4c-4e92-af36-034f6a9f6cdf",
            }}
            resizeMode="cover"
          />
        )}
      </TouchableOpacity> */}
      {isHome ? (
        <View style={{ width: 20 }}></View>
      ) : (
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
      )}
      <TouchableOpacity
        style={styles.headerSub}
        onPress={() => navigation.navigate("home")}
      >
        <Image
          style={styles.imgStyle}
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/assets%2Flogo.png?alt=media&token=fc05e438-598e-47ea-8858-9bc564f5f989",
          }}
          resizeMode="contain"
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.headerSub}
        onPress={() => navigation.openDrawer()}
        // onPress={() => console.log("Navigation: ", navigation)}
        // onPress={() => navigation.getParent().openDrawer()
      >
        <IconFeather
          name="menu"
          size={20}
          color="black"
          style={styles.icon_style}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 60,
    paddingHorizontal: 20,
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
    marginRight: 0,
  },
  imgStyle: {
    width: 100,
    height: 40,
  },
});
