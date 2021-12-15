import React, { useState } from "react";
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

const Symthoms = ({ navigation }) => {
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
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

          {/* <View style={[styles.searchContainer, styles.shadow]}>
            <Image
              style={styles.search}
              source={icons.search}
              resizeMode="contain"
            />
            <TextInput
              style={styles.searchInput}
              value={search}
              onChangeText={setSearch}
              placeholder="Search Doctor"
              placeholderTextColor="#b2b8cc"
            />
          </View> */}
          <DropDownPicker
            style={styles.dropDown1}
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
          />
        </View>
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
    paddingHorizontal: 15,
    backgroundColor: COLORS.bgColor1,
  },
  // Card
  card: {
    borderRadius: 25,
    backgroundColor: COLORS.bgColor2,
    paddingHorizontal: 20,
    paddingVertical: 30,
    margin: 10,
    marginBottom: 40,
    height: 300,
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
    fontSize: 26,
    fontWeight: "bold",
    marginLeft: 10,
    marginBottom: 10,
    lineHeight: 29,
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
    // position: "absolute",
    // bottom: -10,
    // zIndex: 5,
  },
});
