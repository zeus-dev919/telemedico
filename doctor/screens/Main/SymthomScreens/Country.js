import { ISABELL_API_KEY } from "@env";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS, icons, images } from "../../../constants";
import CountryPicker from "react-native-country-picker-modal";

const Country = ({ route, navigation }) => {
  const [countryCode, setCountryCode] = useState("FR");
  const [country, setCountry] = useState(null);
  const [withCountryNameButton, setWithCountryNameButton] = useState(false);
  const [withFlag, setWithFlag] = useState(true);
  const [withEmoji, setWithEmoji] = useState(true);
  const [withFilter, setWithFilter] = useState(true);
  const [withAlphaFilter, setWithAlphaFilter] = useState(false);
  const [withCallingCode, setWithCallingCode] = useState(false);

  //   Start
  const { age, gender, pregnant } = route.params;
  const [check, setCheck] = useState(false);
  const [apiCountries, setApiCountries] = useState(null);
  const [selectError, setSelectError] = useState("");
  const fetchCountries = async () => {
    await fetch(
      "https://apiscsandbox.isabelhealthcare.com/v2/countries?language=english&web_service=json",
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `${ISABELL_API_KEY}`,
        },
      }
    )
      .then((response) => response.json())
      .then((res) => {
        setApiCountries(res.countries.country);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  useEffect(() => {
    fetchCountries();
  }, []);
  const onSelect = (country) => {
    setCountryCode(country.cca2);
    setCountry(country);
    setCheck(true);
    console.log("Countries from API => ", apiCountries);
  };
  const handleSubmit = () => {
      console.log("Country from State => ", country.name)
    const newCountryObj = apiCountries.find(item => item.country_name === country.name);
    console.log("Country =>", newCountryObj);
    if (check) {
      let newpregnant = ''
      if(pregnant !== undefined) {
        newpregnant = pregnant
      }
      navigation.navigate("describe", {
        age: age,
        gender: gender,
        pregnant: newpregnant,
        country_id: newCountryObj.country_id,
        region_id: newCountryObj.region_id,
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
              source={icons.countries}
              resizeMode="contain"
            />
          </View>
          <View>
            <Text style={styles.title1}>Select Country</Text>
            <Text style={styles.title2}>
              Please select the country of residance or recently visited
            </Text>
          </View>
          <View style={styles.flagContainer}>
            <View style={styles.flag}>
              <CountryPicker
                {...{
                  countryCode,
                  withFilter,
                  withFlag,
                  withCountryNameButton,
                  withAlphaFilter,
                  withCallingCode,
                  withEmoji,
                  onSelect,
                }}
                visible={false}
              />
            </View>
            <Text style={styles.instructions}>
              Press on the flag to select a country
            </Text>
            {country !== null && (
              <Text style={styles.title1}>{country.name}</Text>
            )}
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
      </ScrollView>
    </SafeAreaView>
  );
};

export default Country;

const styles = StyleSheet.create({
  // Header
  container: {
    flex: 1,
    backgroundColor: COLORS.bgColor1,
    paddingTop: 20,
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
  flagContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  flag: {
    marginVertical: 15,
  },
  button1: {
    width: "100%",
    marginVertical: 15,
    marginTop: 120,
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
