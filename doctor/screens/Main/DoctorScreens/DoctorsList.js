import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  StyleSheet,
  SectionList,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
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
    }
  }
`;

const DoctorsList = ({ route, navigation }) => {
  const { data, loading } = useQuery(DOCTOR_QUERY);
  const { filter } = route.params;
  console.log("filter => ", filter);
  const [doctors, setDoctors] = useState(null);
  var res = [];
  const getspecs = (_d) => {
    console.log("getspecs()");
    let tab = [];
    for (let i = 0; i < _d.allDoctors.length; i++) {
      if (!tab.includes(_d.allDoctors[i].specialization.specializationName)) {
        tab.push(_d.allDoctors[i].specialization.specializationName);
      }
    }
    return tab;
  };

  const getDoctors = (d) => {
    console.log("D ===================", d);
    console.log("getDoctors()");
    let specs = getspecs(d);
    console.log("Specialities =>", specs);
    let tab = [];
    let final = [];
    for (let j = 0; j < specs.length; j++) {
      for (let i = 0; i < d.allDoctors.length; i++) {
        if (d.allDoctors[i].specialization.specializationName === specs[j]) {
          let name = d.allDoctors[i].firstName
            ? d.allDoctors[i].firstName
            : "--" + d.allDoctors[i].lastName
            ? d.allDoctors[i].lastName
            : "--";
          let spec = d.allDoctors[i].specialization.specializationName
            ? d.allDoctors[i].specialization.specializationName
            : "--";
          let state = d.allDoctors[i].state ? d.allDoctors[i].state : "--";
          let country = d.allDoctors[i].country
            ? d.allDoctors[i].country
            : "--";
          let desc = spec + ", " + state + " ," + country;
          let img = d.allDoctors[i].avatar ? d.allDoctors[i].avatar : "";
          let patients = d.allDoctors[i].patients
            ? d.allDoctors[i].patients
            : "--";
          let experience = d.allDoctors[i].experience
            ? d.allDoctors[i].experience
            : "--";
          tab.push({
            name: name,
            desc: desc,
            img: img,
            patients: patients,
            experience: experience,
          });
          console.log("CORRECT", i, j);
        }
      }
      // final.push({ title: specs[j], data: tab });
      res.push({ title: specs[j], data: tab });
      tab = [];
    }
    console.log("Finale =>", final);
    console.log("Here Line 178", doctors);
  };
  useEffect(() => {
    if (data) {
      console.log("Data NEWWWW1 => ", res);
      getDoctors(data);
      console.log("after =============================");
      setDoctors(res);
    } else {
      console.log("Data NEWWWW2 => ", res);
    }
  }, [data, doctors]);
  // useEffect(() => {
  //   if (data) {
  //     console.log("Line 182", data);
  //     getDoctors(data);
  //   } else {
  //     console.log("lINE 185", data);
  //     console.log("lINE 186", loading);
  //   }
  //   if (doctors) {
  //     console.log("Doctors =>", doctors);
  //   }
  // }, [data, doctors]);
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
          <View style={{ width: 30 }}></View>
        </View>
      </View>
      {/* Flatlist */}
      {doctors ? (
        <SectionList
          refreshing={true}
          sections={doctors}
          keyExtractor={(item, index) => item + index}
          renderItem={({ item }) => (
            <DoctorCardModel2
              name={item.name}
              desc={item.desc}
              img={item.img}
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
      {/* <SectionList
        refreshing={true}
        sections={DATA}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => (
          <DoctorCardModel2
            name={item.name}
            desc={item.desc}
            img={item.img}
            navigation={navigation}
            type="2"
          />
        )}
        renderSectionHeader={({ section: { title } }) => (
          <View style={styles.specContainer}>
            <Text style={styles.SpecTitle}>{title}</Text>
          </View>
        )}
      /> */}
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
  SpecTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: COLORS.fontColor1,
  },
  signup: {
    color: "white",
    fontSize: 22,
    textAlign: "center",
    paddingVertical: 15,
    borderRadius: 10,
    marginVertical: 20,
  },
});
