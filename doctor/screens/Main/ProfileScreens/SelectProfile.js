import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import { COLORS, icons } from "../../../constants";

const SelectProfile = ({ navigation }) => {
  const [check, setCheck] = useState(false);
  const [male, setMale] = useState(false);
  const [female, setFemale] = useState(false);
  const [selected, setSelected] = useState("");
  const [selectError, setSelectError] = useState("");
  const handleMale = () => {
    setMale(true);
    setFemale(false);
    setCheck(true);
    setSelected("m");
  };
  const handleFemale = () => {
    setMale(false);
    setFemale(true);
    setCheck(true);
    setSelected("f");
  };
  const handleSubmit = () => {
    if (selected.length !== 0) {
      let ch = "";
      if (selected === "f") {
        ch = "p";
      } else {
        ch = "d";
      }
      navigation.navigate("profile", { ch });
    } else {
      setSelectError("* Select your profile is Required");
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.subContainer}>
        {/* Red Header */}
        <View style={styles.header}>
          <View style={styles.titleConatiner}>
            <Text style={styles.title1}>Profile</Text>
          </View>
        </View>
      </View>
      {/* ScrollView */}
      <ScrollView style={styles.scrollView}>
        <Text style={styles.cardTitle2}>Welcome to your profile</Text>
        <View style={{ alignItems: "center" }}>
          <View style={{ marginBottom: 20 }}>
            <Image
              style={styles.icon}
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/assets%2Ficons%2Fprofile%2Fchoosing.png?alt=media&token=f577f324-4f25-4c94-b5df-f201f2027001",
              }}
              resizeMode="contain"
            />
          </View>
          <View>
            <Text style={styles.title1}>Select Your Profile</Text>
            <Text style={styles.title2}>Please select your profile</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginVertical: 20,
            }}
          >
            <TouchableOpacity
              style={[male ? styles.card2 : styles.card, styles.shadow1]}
              onPress={handleMale}
            >
              <Image
                style={styles.icon2}
                source={{
                  uri: "https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/assets%2Ficons%2Fprofile%2Fdoctor.png?alt=media&token=7118bca5-2adb-43bd-a9ba-a3fe569d22e4",
                }}
                resizeMode="contain"
              />
              <Text style={male ? styles.title32 : styles.title3}>Doctor</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[female ? styles.card2 : styles.card, styles.shadow1]}
              onPress={handleFemale}
            >
              <Image
                style={styles.icon2}
                source={{
                  uri: "https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/assets%2Ficons%2Fprofile%2Fpatient.png?alt=media&token=ada5ccfe-598c-4d56-b391-05eaf90cee5a",
                }}
                resizeMode="contain"
              />
              <Text style={female ? styles.title32 : styles.title3}>
                Patient
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        {selectError.length !== 0 ? (
          <Text style={styles.error}>{selectError}</Text>
        ) : null}
        {/* Submit */}
        <TouchableOpacity
          style={[styles.button1, !check ? styles.signup1 : styles.signup]}
          onPress={handleSubmit}
          disabled={!check}
        >
          <Text style={styles.signupText}>Next</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SelectProfile;

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
    justifyContent: "center",
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
    fontSize: 16,
    margin: 0,
    padding: 0,
    lineHeight: 29,
    textAlign: "center",
  },
  title3: {
    color: COLORS.fontColor2,
    fontSize: 12,
    textAlign: "center",
  },
  title32: {
    color: COLORS.fontColor3,
    fontSize: 12,
    textAlign: "center",
  },
  //   ScrollView
  scrollView: {
    flex: 1,
    paddingHorizontal: 15,
    backgroundColor: COLORS.bgColor1,
  },
  cardTitle2: {
    color: COLORS.fontColor2,
    fontSize: 14,
    textAlign: "center",
    marginBottom: 20,
  },
  icon: {
    width: 80,
    height: 80,
  },
  icon2: {
    width: 60,
    height: 60,
    marginBottom: 10,
  },
  card: {
    borderRadius: 25,
    backgroundColor: "white",
    paddingHorizontal: 20,
    paddingVertical: 20,
    margin: 10,
  },
  card2: {
    borderRadius: 25,
    backgroundColor: COLORS.fontColor4,
    paddingHorizontal: 20,
    paddingVertical: 20,
    margin: 10,
  },
  shadow1: {
    shadowColor: "#cdcddd",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0,
    shadowRadius: 8,
    elevation: 2,
  },
  button1: {
    width: "100%",
    marginVertical: 15,
    padding: 5,
  },
  signup: {
    backgroundColor: COLORS.blueBtn,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderRadius: 10,
    marginVertical: 20,
    paddingHorizontal: 20,
  },
  signup1: {
    backgroundColor: COLORS.darkgray,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderRadius: 10,
    marginVertical: 20,
    paddingHorizontal: 20,
  },
  signupText: {
    color: "white",
    fontSize: 22,
    textAlign: "center",
    paddingVertical: 15,
  },
  error: {
    fontSize: 10,
    color: "red",
    marginBottom: 5,
  },
});
