// import { ISABELL_API_KEY } from "@env";
import React, { useState, useEffect } from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS, icons, images } from "../../../constants";

const Describe = ({ route, navigation }) => {
  const { age, gender, pregnant, country_id, region_id } = route.params;
  console.log("From Describe => ", {
    age,
    gender,
    pregnant,
    country_id,
    region_id,
  });
  const [check, setCheck] = useState(false);
  const [search, setSearch] = useState("");
  const [predictive, setPredictive] = useState("");
  const [searchArray, setSearchArray] = useState([]);
  const [selected, setSelected] = useState([]);
  const [selectError, setSelectError] = useState("");
  const getPredictive = async () => {
    await fetch("https://apiscsandbox.isabelhealthcare.com/predictive-text", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `nIWd9Dad9cJ9PJnrML1B92N4jWu3C76n`,
        // Authorization: `${ISABELL_API_KEY}`,
      },
    })
      .then((response) => response.json())
      .then((res) => {
        setPredictive(res.predictive_text);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  useEffect(() => {
    getPredictive();
  }, []);
  useEffect(() => {
    if (search.length > 0) {
      let after = predictive.filter(checkWord);
      let array2 = [];
      console.log("after => ", after)
      if (after.length > 0) {
        for (let i = 0; i < 10; i++) {
          if (after[i]) {
            array2.push(after[i]);
          }
        }
        setSearchArray(array2);
        setCheck(true);
      } else {
        setSearchArray([]);
      }
    }
    if (search.length === 0) {
      setSearchArray([]);
    }
  }, [search]);

  const checkWord = (item) => {
    let ch = item.substr(0, search.length).toUpperCase();
    let ch2 = search.toUpperCase();
    if (ch == ch2) return true;
    return false;
  };
  const handleAddItem = (e, item) => {
    console.log("Item Added => ", item);
    let array = [];

    if (selected.length < 5) {
      array = selected;
      array.push(item);
    }
    setSelected(array);
    setSearch("");
    setSearchArray([]);
  };
  const handleRemoveItem = (e, item) => {
    console.log("Item Removed => ", item);
    let array = [];
    for (let i = 0; i < selected.length; i++) {
      if (selected[i] !== item) {
        array.push(selected[i]);
      }
    }
    setSelected(array);
  };
  const handleAddCustom = () => {
    console.log("Add Clicked !!");
  };

  const handleSubmit = () => {
    if (selected.length !== 0) {
      let ch = selected.join(",");
      console.log("Success !!!");
      navigation.navigate("result", {
        age: age,
        gender: gender,
        pregnant: pregnant,
        country_id: country_id,
        region_id: region_id,
        predictive_text: ch,
      });
    } else {
      setSelectError("* Please enter atleast one word");
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
          <View style={{ marginBottom: 20 }}>
            <Image
              style={styles.icon}
              source={icons.notes}
              resizeMode="contain"
            />
          </View>
          <View>
            <Text style={styles.title1}>Select symptoms</Text>
            <Text style={styles.title2}>
              Please describe in your own words or select symptoms from list
            </Text>
          </View>
          {selected.length !== 0 ? (
            <View>
              <Text style={styles.title3}>Your Selected Key Words</Text>
              <View style={styles.resultsContainer}>
                {selected.map((item, index) => (
                  <TouchableOpacity
                    key={index}
                    style={[styles.wordStyle2, styles.shadow]}
                    onPress={(e) => handleRemoveItem(e, item)}
                  >
                    <Text style={styles.wordContentStyle2}>{item}</Text>
                    <Image
                      source={icons.close}
                      style={styles.plusIcon}
                      resizeMode="contain"
                    />
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          ) : null}
          <View style={styles.searchMain}>
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
                placeholder="Search"
                placeholderTextColor="#b2b8cc"
              />
              <TouchableOpacity
                style={styles.addBtnContainer}
                onPres={handleAddCustom}
              >
                <Image
                  style={styles.addBtn}
                  source={icons.add}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            </View>
          </View>
          {searchArray && (
            <View style={styles.resultsContainer}>
              {searchArray.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  style={[styles.wordStyle, styles.shadow]}
                  onPress={(e) => handleAddItem(e, item)}
                >
                  <Text style={styles.wordContentStyle}>{item}</Text>
                  <Image
                    source={icons.plus}
                    style={styles.plusIcon}
                    resizeMode="contain"
                  />
                </TouchableOpacity>
              ))}
            </View>
          )}
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
      </ScrollView>
    </SafeAreaView>
  );
};

export default Describe;

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
    fontSize: 14,
    margin: 0,
    padding: 0,
    lineHeight: 20,
    textAlign: "center",
    paddingHorizontal: 20,
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
    color: COLORS.fontColor4,
    fontSize: 16,
    textAlign: "center",
    fontWeight: "bold",
    marginTop: 20,
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
  //   Search Box
  searchMain: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  searchContainer: {
    backgroundColor: "white",
    color: COLORS.primary,
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderRadius: 8,
    width: "100%",
  },
  search: {
    width: 15,
    height: 15,
    marginRight: 10,
  },
  searchInput: {
    fontSize: 16,
    width: "100%",
  },
  addBtnContainer: {
    position: "absolute",
    right: 0,
    backgroundColor: "white",
    padding: 10,
    marginRight: 5,
  },
  addBtn: {
    width: 25,
    height: 25,
  },
  shadow: {
    shadowColor: "#cdcddd",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0,
    shadowRadius: 2,
    elevation: 2,
  },
  // Words
  resultsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  wordStyle: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 50,
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingVertical: 8,
    margin: 8,
  },
  wordContentStyle: {
    color: COLORS.fontColor2,
    fontSize: 12,
  },
  plusIcon: {
    width: 13,
    height: 13,
    marginLeft: 10,
  },
  // 2
  wordStyle2: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 50,
    backgroundColor: COLORS.fontColor4,
    paddingHorizontal: 10,
    paddingVertical: 5,
    margin: 5,
  },
  wordContentStyle2: {
    color: COLORS.fontColor3,
    fontSize: 10,
  },
});
