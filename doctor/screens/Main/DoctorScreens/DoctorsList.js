import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  StyleSheet,
  SectionList,
  Text,
  TouchableOpacity,
  View,
  Modal,
  ActivityIndicator,
  Image,
  Alert,
  TextInput,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS, icons, images } from "../../../constants";
import DoctorCardModel2 from "../../Models/DoctorCardModel2";
import { gql, useQuery } from "@apollo/client";

const DATA = [
  {
    title: "Cardiologistic",
    data: [
      {
        name: "Christina Frazier",
        desc: "Heart Surgeon, London",
        img: "https://image.shutterstock.com/image-photo/profile-side-photo-young-woman-260nw-1961318188.jpg",
      },
      {
        name: "Jane Andrews",
        desc: "Heart Surgeon, London",
        img: "https://image.shutterstock.com/image-photo/profile-side-photo-young-woman-260nw-1961318188.jpg",
      },
    ],
  },
  {
    title: "Oncologist",
    data: [
      {
        name: "Alma Wallace",
        desc: "Heart Surgeon, London",
        img: "https://image.shutterstock.com/image-photo/profile-side-photo-young-woman-260nw-1961318188.jpg",
      },
    ],
  },
  {
    title: "Endocrinologist",
    data: [
      {
        name: "Mayme Gomez",
        desc: "Heart Surgeon, London",
        img: "https://image.shutterstock.com/image-photo/profile-side-photo-young-woman-260nw-1961318188.jpg",
      },
    ],
  },
  {
    title: "Rheumatologist",
    data: [
      {
        name: "Mayme Gomez",
        desc: "Heart Surgeon, London",
        img: "https://image.shutterstock.com/image-photo/profile-side-photo-young-woman-260nw-1961318188.jpg",
      },
    ],
  },
  {
    title: "Fertility Experts",
    data: [
      {
        name: "Mayme Gomez",
        desc: "Heart Surgeon, London",
        img: "https://image.shutterstock.com/image-photo/profile-side-photo-young-woman-260nw-1961318188.jpg",
      },
      {
        name: "Iva Carpenter",
        desc: "Heart Surgeon, London",
        img: "https://image.shutterstock.com/image-photo/profile-side-photo-young-woman-260nw-1961318188.jpg",
      },
      {
        name: "Iva Carpenter",
        desc: "Heart Surgeon, London",
        img: "https://image.shutterstock.com/image-photo/profile-side-photo-young-woman-260nw-1961318188.jpg",
      },
    ],
  },
  {
    title: "Plastic Surgeons",
    data: [
      {
        name: "Mayme Gomez",
        desc: "Heart Surgeon, London",
        img: "https://image.shutterstock.com/image-photo/profile-side-photo-young-woman-260nw-1961318188.jpg",
      },
    ],
  },
  {
    title: "Mental Health",
    data: [
      {
        name: "Mayme Gomez",
        desc: "Heart Surgeon, London",
        img: "https://image.shutterstock.com/image-photo/profile-side-photo-young-woman-260nw-1961318188.jpg",
      },
    ],
  },
];
const DOCTOR_QUERY = gql`
  query {
    allDoctors {
      firstName
      lastName
      country
      state
      specialization {
        specializationName
      }
      consultationFees
      info
      consultationTime
    }
  }
`;
var res = [];
const DoctorsList = ({ route, navigation }) => {
  const { filter } = route?.params;
  const [doctors, setDoctors] = useState(null);
  const [newDoctors, setNewDoctors] = useState(null);
  const [specList, setSpecList] = useState(null);
  const [help, setHelp] = useState(false);
  const [filterModal, setFilterModal] = useState(false);
  const [search, setSearch] = useState("");
  const { data, loading } = useQuery(DOCTOR_QUERY);
  // done
  const getspecs = (ch) => {
    let tab = [];
    for (let i = 0; i < ch.allDoctors.length; i++) {
      if (!tab.includes(ch.allDoctors[i].specialization.specializationName)) {
        tab.push(ch.allDoctors[i].specialization.specializationName);
      }
    }
    return tab;
  };
  // done
  const getDoctors = () => {
    // res = [];
    let specs = getspecs(data);
    let tab = [];
    if (specs.length > 0) {
      for (let j = 0; j < specs.length; j++) {
        for (let i = 0; i < data.allDoctors.length; i++) {
          if (
            data.allDoctors[i].specialization.specializationName === specs[j]
          ) {
            tab.push({
              name:
                data.allDoctors[i].firstName +
                " " +
                data.allDoctors[i].lastName,
              desc:
                (data.allDoctors[i].state ? data.allDoctors[i].state : "--") +
                " ," +
                (data.allDoctors[i].country
                  ? data.allDoctors[i].country
                  : "--"),
              img: data.allDoctors[i].avatar ? data.allDoctors[i].avatar : "",
              patients: data.allDoctors[i].patients
                ? data.allDoctors[i].patients
                : "--",
              experience: data.allDoctors[i].experience
                ? data.allDoctors[i].experience
                : "--",
              speciality: data.allDoctors[i].specialization.specializationName,
              info: data.allDoctors[i].info ? data.allDoctors[i].info : "--",
              fees: data.allDoctors[i].consultationFees
                ? data.allDoctors[i].consultationFees
                : "--",
              duration: data.allDoctors[i].consultationTime
                ? data.allDoctors[i].consultationTime
                : "--",
            });
          }
        }
        res.push({ title: specs[j], data: tab });
        tab = [];
      }
      setNewDoctors(res);
    }
  };
  // done
  const handleSlected = (title) => {
    setNewDoctors(null);
    setFilterModal(false);
    setSearch(title);
  };
  // done
  const filterList = (filtername) => {
    if (filtername === "All specialization") {
      setNewDoctors(doctors);
      return;
    }
    let tab = [];
    for (let i = 0; i < doctors.length; i++) {
      console.log("Line 212 =>", doctors[i]);
      if (doctors[i].title.toUpperCase().includes(filtername.toUpperCase())) {
        tab.push(doctors[i]);
      }
    }
    setNewDoctors(
      tab.sort((a, b) => (a.title > b.title ? 1 : b.title > a.title ? -1 : 0))
    );
  };
  useEffect(() => {
    setSearch("All specialization");
    if (filter.length > 0) {
      if (filter === "*") setSearch("All specialization");
      if (filter === "Oncology") setSearch("Oncology");
      if (filter === "Endocrinology") setSearch("Endocrinology");
      if (filter === "Cardiology") setSearch("Cardiology");
      if (filter === "Rheumatology") setSearch("Rheumatology");
      if (filter === "Fertility") setSearch("Fertility");
      if (filter === "Surgery") setSearch("Surgery");
      if (filter === "Mental") setSearch("Mental");
    }
  }, []);
  useEffect(() => {
    console.log('<><><><><<<><><><<<<><<<<<<<<<<<<<<><><<<><<<<<<')
    console.log(data)
    if (data) {
      console.log(
        "Data here ================================================="
      );
      getDoctors();
      setDoctors(
        res.sort((a, b) => (a.title > b.title ? 1 : b.title > a.title ? -1 : 0))
      );
      let specs = getspecs(data);
      setSpecList(specs);
    }
  }, [data]);

  useEffect(() => {
    console.log("Search =>", search);
    if (doctors) {
      console.log("Here Line 252");
      filterList(search);
    }
  }, [search]);

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
            <Text style={styles.title1}>Doctor List</Text>
          </View>
          <TouchableOpacity onPress={() => setHelp(true)}>
            <Ionicons
              name="help-circle-outline"
              size={24}
              color="black"
              style={styles.icon_style}
            />
          </TouchableOpacity>
        </View>
      </View>
      {/* filter */}
      <View style={styles.searchMain}>
        <TouchableOpacity
          style={[styles.searchContainer, styles.shadow]}
          onPress={() => setFilterModal(true)}
        >
          <View style={styles.searchContainer1}>
            <Image
              style={styles.search}
              source={icons.filter}
              resizeMode="contain"
            />
            <Text
              style={[
                styles.searchInput,
                { color: COLORS.fontColor2, marginRight: 10 },
              ]}
            >
              Filter by
            </Text>
          </View>
          <Text style={styles.searchInput1}>{search}</Text>
        </TouchableOpacity>
      </View>
      {/* Flatlist */}
      {newDoctors ? (
        <SectionList
          refreshing={true}
          // sections={filter === "All specialization" ? res : newDoctors}
          sections={newDoctors}
          keyExtractor={(item, index) => item + index}
          renderItem={({ item }) => (
            <DoctorCardModel2
              name={item.name}
              desc={item.desc}
              img={item.img}
              patients={item.patients}
              experience={item.experience}
              speciality={item.speciality}
              info={item.info}
              fees={item.fees}
              duration={item.duration}
              navigation={navigation}
              type="2"
            />
          )}
          renderSectionHeader={({ section: { title } }) => (
            <View style={styles.specContainer}>
              <Text style={styles.SpecTitle}>{title}</Text>
            </View>
          )}
        />
      ) : (
        <Text style={styles.signup}>
          <ActivityIndicator size="large" color={COLORS.blueBtn} />
        </Text>
      )}
      {(newDoctors && newDoctors.length === 0) || !newDoctors ? (
        <View style={styles.specContainer2}>
          <Text style={styles.SpecTitle2}>
            No Doctors with this filter yet.
          </Text>
        </View>
      ) : null}
      {/* Help */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={help}
        onRequestClose={() => {
          setHelp(false);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TouchableOpacity
              onPress={() => {
                setHelp(false);
              }}
              style={styles.ModelTitleView}
            >
              <Text style={styles.titleModal2}>
                <Ionicons name="close-circle-outline" size={30} color="black" />
              </Text>
            </TouchableOpacity>
            <View style={styles.ModelTitleView}>
              <Text style={styles.titleModal}>
                Don’t Find The Doctor you looking?
              </Text>
            </View>
            <Text style={styles.titleModal}>It’s Ok</Text>
            <TouchableOpacity
              style={styles.signup2}
              onPress={() => {
                setHelp(false);
                navigation.navigate("help");
              }}
            >
              <Text style={styles.textStyle}>Place Special Request</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      {/* filter */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={filterModal}
        onRequestClose={() => {
          setFilterModal(false);
        }}
      >
        <View style={styles.centeredView1}>
          <ScrollView>
            <View style={styles.modalView1}>
              <TouchableOpacity
                onPress={() => {
                  setFilterModal(false);
                }}
                style={styles.ModelTitleView}
              >
                <Text style={styles.titleModal2}>
                  <Ionicons
                    name="close-circle-outline"
                    size={30}
                    color="black"
                  />
                </Text>
              </TouchableOpacity>
              <View style={styles.ModelTitleView}>
                <Text style={styles.titleModal1}>Specializations</Text>
              </View>
              {specList &&
                specList.map((item, index) => (
                  <View style={styles.optionContent} key={index}>
                    <View style={styles.optionContainer}>
                      <TouchableOpacity
                        style={[styles.card, styles.shadow1]}
                        onPress={() => handleSlected(item)}
                      >
                        <Text style={styles.title3}>{item}</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                ))}
            </View>
          </ScrollView>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default DoctorsList;

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
    fontSize: 12,
    margin: 0,
    padding: 0,
    lineHeight: 29,
    textAlign: "center",
  },
  //   ScrollView
  scrollView: {
    flex: 1,
    paddingHorizontal: 15,
    backgroundColor: COLORS.bgColor1,
    width: 300,
  },
  doctorCards: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  specContainer: {
    margin: 10,
    marginTop: 20,
    width: "100%",
  },
  specContainer2: {
    flex: 1,
    alignItems: "center",
    width: "100%",
    marginVertical: 10,
  },
  SpecTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: COLORS.fontColor1,
    maxWidth: "80%",
  },
  SpecTitle2: {
    fontSize: 16,
    fontWeight: "bold",
    color: COLORS.fontColor1,
    maxWidth: "80%",
    textAlign: "center",
  },
  signup: {
    color: "white",
    fontSize: 22,
    textAlign: "center",
    paddingVertical: 15,
    borderRadius: 10,
    marginVertical: 20,
  },
  signup2: {
    backgroundColor: COLORS.blueBtn,
    color: "white",
    fontSize: 18,
    textAlign: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  signup3: {
    backgroundColor: COLORS.blueBtn,
    color: "black",
    fontSize: 18,
    textAlign: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  //   Model
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  centeredView1: {
    flex: 1,
    width: "100%",
    backgroundColor: COLORS.bgColor1,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalView1: {
    margin: 20,
    backgroundColor: COLORS.bgColor1,
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 20,
    // alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  ModelTitleView: {
    flexDirection: "row",
  },
  titleModal: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  titleModal1: {
    width: "100%",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  titleModal2: {
    width: "100%",
    marginBottom: 10,
    paddingRight: 10,
    textAlign: "right",
  },
  ModelIcon: {
    width: 22,
    height: 22,
    marginRight: 10,
    marginTop: 2,
  },
  //   Search Box
  searchMain: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  searchContainer: {
    maxWidth: "100%",
    backgroundColor: "white",
    color: COLORS.primary,
    flexDirection: "row",
    alignItems: "flex-start",
    padding: 10,
    borderRadius: 8,
  },
  searchContainer1: {
    flexDirection: "row",
    alignItems: "center",
  },
  search: {
    width: 15,
    height: 15,
    marginRight: 10,
  },
  searchInput: {
    fontSize: 16,
  },
  searchInput1: {
    fontSize: 16,
    maxWidth: "75%",
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
  // Item
  itemContainer: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginBottom: 10,
  },
  itemTitle: {
    fontSize: 14,
    color: "black",
    textAlign: "left",
  },
  // Card
  optionContent: {
    width: "100%",
  },
  optionContainer: {
    width: "100%",
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  card: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: "white",
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
  icon2: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  title3: {
    color: COLORS.fontColor2,
    fontSize: 14,
    margin: 0,
    padding: 0,
    lineHeight: 20,
    textAlign: "left",
  },
});
