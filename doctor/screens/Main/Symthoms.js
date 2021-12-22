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
import IconFeather from "react-native-vector-icons/Feather";
import { COLORS, icons, images } from "../../constants";
import DropDownPicker from "react-native-dropdown-picker";
import Checkbox from "expo-checkbox";

const Symthoms = ({ navigation }) => {
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [open1, setOpen1] = useState(false);
  const [value1, setValue1] = useState(null);
  const [items, setItems] = useState([
    { label: "Newborn 8-28d", value: "1" },
    { label: "Infant 29d-1yr", value: "2" },
    { label: "Younger Child 1-5yrs", value: "3" },
    { label: "Older Child 6-12yrs", value: "4" },
    { label: "Adolescent 13-16yrs", value: "5" },
    { label: "Young Adult 17-29yrs", value: "6" },
    { label: "Adult 30-39yrs", value: "7" },
    { label: "Adult 40-49yrs", value: "8" },
    { label: "Adult 50-64yrs", value: "9" },
    { label: "Senior 65yrs over", value: "10" },
  ]);
  const [items1, setItems1] = useState([
    { label: "Don't know", value: "1" },
    { label: "Not Pregnant", value: "2" },
    { label: "Pregnant", value: "3" },
  ]);
  const [box1, setBox1] = useState(true);
  const [box2, setBox2] = useState(false);
  const handleBox1 = () => {
    setBox1(true);
    setBox2(false);
  };
  const handleBox2 = () => {
    setBox1(false);
    setBox2(true);
  };
  const getSymthom = async () => {
    await fetch(
      "https://apiscsandbox.isabelhealthcare.com/v2/age_groups?language=english&web_service=json",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: process.env.ISABELL_API_KEY,
        },
        body: JSON.stringify({
          language: "english",
          web_service: "json",
        }),
      }
    )
      .then((res) => console.log("Response =>", res.json()))
      .catch((err) => console.log("Error => ", err));
  };
  useEffect(() => {
    getSymthom();
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.subContainer}>
        {/* Red Header */}
        <View style={styles.header}>
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
          <View>
            <Image
              style={styles.logo}
              source={icons.avatar}
              resizeMode="contain"
            />
          </View>
        </View>
      </View>
      {/* ScrollView */}
      <ScrollView style={styles.scrollView}>
        <Text style={styles.cardTitle1}>Symthoms Checker</Text>
        {/* Card1 */}
        <View style={[styles.card, styles.shadow1]}>
          <Text style={styles.cardTitle}>Tell us About your</Text>
          <Text style={styles.cardTitle}>Symthoms</Text>
          <DropDownPicker
            style={styles.dropDown1}
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            maxHeight={120}
          />
          <View style={styles.personCard}>
            <Text style={{ marginHorizontal: 5, marginRight: 10 }}>Female</Text>
            <Checkbox
              value={box1}
              onValueChange={handleBox1}
              style={styles.checkbox}
              color={"#40e0d0"}
            />
            <Text style={{ marginHorizontal: 5, marginRight: 10 }}>Male</Text>
            <Checkbox
              value={box2}
              onValueChange={handleBox2}
              style={styles.checkbox}
              color={"#40e0d0"}
            />
          </View>
          {box1 ? (
            <DropDownPicker
              style={styles.dropDown1}
              open={open1}
              value={value1}
              items={items1}
              setOpen={setOpen1}
              setValue={setValue1}
              setItems={setItems1}
              maxHeight={120}
            />
          ) : null}
        </View>
        <TouchableOpacity
          style={styles.button1}
          onPress={() => navigation.navigate("gender")}
        >
          <Text style={styles.signup}>Submit</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Symthoms;

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
  //   ScrollView
  scrollView: {
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: COLORS.bgColor1,
  },
  // Card
  card: {
    borderRadius: 25,
    backgroundColor: COLORS.bgColor2,
    paddingHorizontal: 10,
    paddingVertical: 30,
    margin: 10,
    marginBottom: 40,
    height: 600,
    // position: "relative",
  },
  cardTitle1: {
    color: COLORS.fontColor4,
    fontSize: 30,
    fontWeight: "bold",
    marginLeft: 10,
    marginVertical: 10,
    lineHeight: 29,
    textAlign: "center",
  },
  cardTitle: {
    color: COLORS.fontColor4,
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 10,
    marginBottom: 10,
    lineHeight: 20,
  },
  //   Search Box
  searchContainer: {
    backgroundColor: "white",
    color: COLORS.primary,
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderRadius: 8,
  },
  search: {
    width: 15,
    height: 15,
    marginRight: 10,
  },
  searchInput: {
    fontSize: 16,
  },
  shadow: {
    // Shadow Start
    shadowColor: "#cdcddd",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0,
    shadowRadius: 18,

    elevation: 8,
    // Shadow End
  },
  shadow1: {
    // Shadow Start
    shadowColor: "#cdcddd",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0,
    shadowRadius: 18,

    elevation: 8,
    // Shadow End
  },
  dropDown1: {
    borderColor: "grey",
  },
  //   PersonCard
  personCard: {
    flexDirection: "row",
    paddingLeft: 5,
    marginVertical: 10,
  },
  checkbox: {
    marginRight: 10,
    borderRadius: 6,
  },
  signup: {
    backgroundColor: COLORS.blueBtn,
    color: "white",
    fontSize: 22,
    textAlign: "center",
    paddingVertical: 15,
    borderRadius: 10,
    // marginVertical: 20,
  },
  button1: {
    marginVertical: 15,
    padding: 5,
  },
});
