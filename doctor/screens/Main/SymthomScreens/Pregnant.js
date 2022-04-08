import React, { useState } from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS, icons, images } from "../../../constants";

const Pregnant = ({ route, navigation }) => {
  const { age, gender } = route.params;
  const [check, setCheck] = useState(false);
  const [pregnant, setPregnant] = useState(false);
  const [notPregnant, setNotPregnant] = useState(false);
  const [dontKnowPregnant, setDontKnowPregnant] = useState(false);
  const [selected, setSelected] = useState("");
  const [selectError, setSelectError] = useState("");
  const handlePregnant = () => {
    setPregnant(true);
    setDontKnowPregnant(false);
    setNotPregnant(false);
    setSelected("y");
    setCheck(true);
  };
  const handleDontKnowPregnant = () => {
    setPregnant(false);
    setDontKnowPregnant(true);
    setNotPregnant(false);
    setSelected("_");
    setCheck(true);
  };
  const handleNotPregnant = () => {
    setPregnant(false);
    setDontKnowPregnant(false);
    setNotPregnant(true);
    setSelected("n");
    setCheck(true);
  };
  const handleSubmit = () => {
    if (selected.length !== 0) {
      navigation.navigate("country", {
        age: age,
        gender: gender,
        pregnant: selected,
      });
    } else {
      setSelectError("* Select a gender is Required");
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.subContainer}>
        {/* Red Header */}
        <View style={styles.header}>
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
          <View style={styles.titleConatiner}>
            <Text style={styles.title1}>DR. AI</Text>
          </View>
          <View style={{ width: 30 }}></View>
        </View>
      </View>
      {/* ScrollView */}
      <ScrollView style={styles.scrollView}>
        <Text style={styles.cardTitle2}>Welcome to the DR. AI</Text>
        <View style={{ alignItems: "center" }}>
          <View style={{ marginBottom: 20 }}>
            <Image
              style={styles.icon}
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/assets%2Ficons%2Fsympthom%2Fequality.png?alt=media&token=47681ef1-3f78-499e-a60c-0a0bd41773db",
              }}
              resizeMode="contain"
            />
          </View>
          <View>
            <Text style={styles.title1}>Are You Pregnant?</Text>
            <Text style={styles.title2}>Please select an option</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginVertical: 20,
              padding: 10,
            }}
          >
            <View style={{ padding: 10 }}>
              <TouchableOpacity
                style={[pregnant ? styles.card2 : styles.card, styles.shadow1]}
                onPress={handlePregnant}
              >
                <Image
                  style={styles.icon2}
                  source={{
                    uri: "https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/assets%2Ficons%2Fsympthom%2Fwoman.png?alt=media&token=47c838d9-52fe-4d81-951b-fc521303ab32",
                  }}
                  resizeMode="contain"
                />
                <Text style={pregnant ? styles.title32 : styles.title3}>
                  Yes
                </Text>
                <Text style={pregnant ? styles.title32 : styles.title3}>
                  Pregnant
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{ padding: 10 }}>
              <TouchableOpacity
                style={[
                  dontKnowPregnant ? styles.card2 : styles.card,
                  styles.shadow1,
                ]}
                onPress={handleDontKnowPregnant}
              >
                <Image
                  style={styles.icon2}
                  source={{
                    uri: "https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/assets%2Ficons%2Fsympthom%2Ffemale.png?alt=media&token=83529e04-433a-4b5c-b9a9-f7156aea7b0d",
                  }}
                  resizeMode="contain"
                />
                <Text style={dontKnowPregnant ? styles.title32 : styles.title3}>
                  Don't
                </Text>
                <Text style={dontKnowPregnant ? styles.title32 : styles.title3}>
                  Know
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{ padding: 10 }}>
              <TouchableOpacity
                style={[
                  notPregnant ? styles.card2 : styles.card,
                  styles.shadow1,
                ]}
                onPress={handleNotPregnant}
              >
                <Image
                  style={styles.icon2}
                  source={{
                    uri: "https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/assets%2Ficons%2Fsympthom%2Fpregnant.png?alt=media&token=2b024101-ae05-4356-810a-e232ff4fd6a5",
                  }}
                  resizeMode="contain"
                />
                <Text style={notPregnant ? styles.title32 : styles.title3}>
                  Not
                </Text>
                <Text style={notPregnant ? styles.title32 : styles.title3}>
                  Pregnant
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        {/* {selectError.length !== 0 ? (
          <Text style={styles.error}>{selectError}</Text>
        ) : null} */}
        {/* Submit */}
        <TouchableOpacity
          style={[styles.button1, !check ? styles.signup1 : styles.signup]}
          onPress={handleSubmit}
          disabled={!check}
        >
          <Text style={styles.signupText}>Submit</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Pregnant;

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
  title22: {
    color: COLORS.fontColor3,
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
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  card2: {
    borderRadius: 25,
    backgroundColor: COLORS.fontColor4,
    paddingHorizontal: 10,
    paddingVertical: 10,
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
  title32: {
    color: COLORS.fontColor3,
    fontSize: 12,
    textAlign: "center",
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
