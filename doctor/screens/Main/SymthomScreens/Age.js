import React, { useEffect, useState } from "react";
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

const Age = ({ navigation }) => {
  const [check, setCheck] = useState(false);
  const [option1, setOption1] = useState(false);
  const [option2, setOption2] = useState(false);
  const [option3, setOption3] = useState(false);
  const [option4, setOption4] = useState(false);
  const [option5, setOption5] = useState(false);
  const [option6, setOption6] = useState(false);
  const [option7, setOption7] = useState(false);
  const [option8, setOption8] = useState(false);
  const [option9, setOption9] = useState(false);
  const [option10, setOption10] = useState(false);
  const [selected, setSelected] = useState("");
  const [selectError, setSelectError] = useState("");

  const resetAll = () => {
    setOption1(false);
    setOption2(false);
    setOption3(false);
    setOption4(false);
    setOption5(false);
    setOption6(false);
    setOption7(false);
    setOption8(false);
    setOption9(false);
    setOption10(false);
  };
  const handleOp1 = () => {
    resetAll();
    setOption1(true);
    setCheck(true);
    setSelected("1");
  };
  const handleOp2 = () => {
    resetAll();
    setOption2(true);
    setCheck(true);
    setSelected("2");
  };
  const handleOp3 = () => {
    resetAll();
    setOption3(true);
    setCheck(true);
    setSelected("3");
  };
  const handleOp4 = () => {
    resetAll();
    setOption4(true);
    setCheck(true);
    setSelected("10");
  };
  const handleOp5 = () => {
    resetAll();
    setOption5(true);
    setCheck(true);
    setSelected("4");
  };
  const handleOp6 = () => {
    resetAll();
    setOption6(true);
    setCheck(true);
    setSelected("7");
  };
  const handleOp7 = () => {
    resetAll();
    setOption7(true);
    setCheck(true);
    setSelected("5");
  };
  const handleOp8 = () => {
    resetAll();
    setOption8(true);
    setCheck(true);
    setSelected("8");
  };
  const handleOp9 = () => {
    resetAll();
    setOption9(true);
    setCheck(true);
    setSelected("9");
  };
  const handleOp10 = () => {
    resetAll();
    setOption10(true);
    setCheck(true);
    setSelected("6");
  };
  const handleSubmit = () => {
    if (selected.length !== 0) {
      navigation.navigate("gender", { age: selected });
    } else {
      setSelectError("* Selecting an age is Required");
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
        <View style={{ alignItems: "center", width: "100%" }}>
          <View>
            <Text style={styles.title1}>Select Age Range</Text>
            <Text style={styles.title2}>Please select your age range</Text>
          </View>
          {/* Newborn 0-28 d */}
          <View style={styles.optionContent}>
            <View style={styles.optionContainer}>
              <TouchableOpacity
                style={[option1 ? styles.card2 : styles.card, styles.shadow1]}
                onPress={handleOp1}
              >
                <Image
                  style={styles.icon2}
                  source={{
                    uri: "https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/assets%2Ficons%2Fsympthom%2Fmale.png?alt=media&token=33003d87-4a93-4d0b-a26c-0222cef18505",
                  }}
                  resizeMode="contain"
                />
                <Text style={option1 ? styles.title22 : styles.title2}>
                  Newborn 0-28 d
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          {/* Infant 29 d-1 yr */}
          <View style={styles.optionContent}>
            <View style={styles.optionContainer}>
              <TouchableOpacity
                style={[option2 ? styles.card2 : styles.card, styles.shadow1]}
                onPress={handleOp2}
              >
                <Image
                  style={styles.icon2}
                  source={{
                    uri: "https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/assets%2Ficons%2Fsympthom%2Fmale.png?alt=media&token=33003d87-4a93-4d0b-a26c-0222cef18505",
                  }}
                  resizeMode="contain"
                />
                <Text style={option2 ? styles.title22 : styles.title2}>
                  Infant 29 d-1 yr
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          {/* Younger Child 1-5 yrs */}
          <View style={styles.optionContent}>
            <View style={styles.optionContainer}>
              <TouchableOpacity
                style={[option3 ? styles.card2 : styles.card, styles.shadow1]}
                onPress={handleOp3}
              >
                <Image
                  style={styles.icon2}
                  source={{
                    uri: "https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/assets%2Ficons%2Fsympthom%2Fmale.png?alt=media&token=33003d87-4a93-4d0b-a26c-0222cef18505",
                  }}
                  resizeMode="contain"
                />
                <Text style={option3 ? styles.title22 : styles.title2}>
                  Younger Child 1-5 yrs
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          {/* Older Child 6-12 yrs */}
          <View style={styles.optionContent}>
            <View style={styles.optionContainer}>
              <TouchableOpacity
                style={[option4 ? styles.card2 : styles.card, styles.shadow1]}
                onPress={handleOp4}
              >
                <Image
                  style={styles.icon2}
                  source={{
                    uri: "https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/assets%2Ficons%2Fsympthom%2Fmale.png?alt=media&token=33003d87-4a93-4d0b-a26c-0222cef18505",
                  }}
                  resizeMode="contain"
                />
                <Text style={option4 ? styles.title22 : styles.title2}>
                  Older Child 6-12 yrs
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          {/* Adolescent 13-16 yrs */}
          <View style={styles.optionContent}>
            <View style={styles.optionContainer}>
              <TouchableOpacity
                style={[option5 ? styles.card2 : styles.card, styles.shadow1]}
                onPress={handleOp5}
              >
                <Image
                  style={styles.icon2}
                  source={{
                    uri: "https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/assets%2Ficons%2Fsympthom%2Fmale.png?alt=media&token=33003d87-4a93-4d0b-a26c-0222cef18505",
                  }}
                  resizeMode="contain"
                />
                <Text style={option5 ? styles.title22 : styles.title2}>
                  Adolescent 13-16 yrs
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          {/* Young Adult 17-29 yrs */}
          <View style={styles.optionContent}>
            <View style={styles.optionContainer}>
              <TouchableOpacity
                style={[option6 ? styles.card2 : styles.card, styles.shadow1]}
                onPress={handleOp6}
              >
                <Image
                  style={styles.icon2}
                  source={{
                    uri: "https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/assets%2Ficons%2Fsympthom%2Fmale.png?alt=media&token=33003d87-4a93-4d0b-a26c-0222cef18505",
                  }}
                  resizeMode="contain"
                />
                <Text style={option6 ? styles.title22 : styles.title2}>
                  Young Adult 17-29 yrs
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          {/* Adult 30-39 yrs */}
          <View style={styles.optionContent}>
            <View style={styles.optionContainer}>
              <TouchableOpacity
                style={[option7 ? styles.card2 : styles.card, styles.shadow1]}
                onPress={handleOp7}
              >
                <Image
                  style={styles.icon2}
                  source={{
                    uri: "https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/assets%2Ficons%2Fsympthom%2Fmale.png?alt=media&token=33003d87-4a93-4d0b-a26c-0222cef18505",
                  }}
                  resizeMode="contain"
                />
                <Text style={option7 ? styles.title22 : styles.title2}>
                  Adult 30-39 yrs
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          {/* Adult 40-49 yrs */}
          <View style={styles.optionContent}>
            <View style={styles.optionContainer}>
              <TouchableOpacity
                style={[option8 ? styles.card2 : styles.card, styles.shadow1]}
                onPress={handleOp8}
              >
                <Image
                  style={styles.icon2}
                  source={{
                    uri: "https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/assets%2Ficons%2Fsympthom%2Fmale.png?alt=media&token=33003d87-4a93-4d0b-a26c-0222cef18505",
                  }}
                  resizeMode="contain"
                />
                <Text style={option8 ? styles.title22 : styles.title2}>
                  Adult 40-49 yrs
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          {/* Adult 50-64 yrs */}
          <View style={styles.optionContent}>
            <View style={styles.optionContainer}>
              <TouchableOpacity
                style={[option9 ? styles.card2 : styles.card, styles.shadow1]}
                onPress={handleOp9}
              >
                <Image
                  style={styles.icon2}
                  source={{
                    uri: "https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/assets%2Ficons%2Fsympthom%2Fmale.png?alt=media&token=33003d87-4a93-4d0b-a26c-0222cef18505",
                  }}
                  resizeMode="contain"
                />
                <Text style={option9 ? styles.title22 : styles.title2}>
                  Adult 50-64 yrs
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          {/* Senior 65 yrs-over */}
          <View style={styles.optionContent}>
            <View style={styles.optionContainer}>
              <TouchableOpacity
                style={[option10 ? styles.card2 : styles.card, styles.shadow1]}
                onPress={handleOp10}
              >
                <Image
                  style={styles.icon2}
                  source={{
                    uri: "https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/assets%2Ficons%2Fsympthom%2Fmale.png?alt=media&token=33003d87-4a93-4d0b-a26c-0222cef18505",
                  }}
                  resizeMode="contain"
                />
                <Text style={option10 ? styles.title22 : styles.title2}>
                  Senior 65 yrs-over
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
            <Text style={styles.signupText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Age;

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
    width: 20,
    height: 20,
    marginRight: 10,
  },
  card: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 15,
    backgroundColor: "white",
    paddingHorizontal: 20,
    paddingVertical: 8,
  },
  card2: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 15,
    backgroundColor: COLORS.fontColor4,
    paddingHorizontal: 20,
    paddingVertical: 8,
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
  optionContent: {
    width: "100%",
  },
  optionContainer: {
    width: "100%",
    paddingHorizontal: 15,
    paddingVertical: 5,
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
