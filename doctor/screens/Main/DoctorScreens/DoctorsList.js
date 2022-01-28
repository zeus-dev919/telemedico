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
      consultationFees
      info
      consultationTime
    }
  }
`;
var res = [];
const DoctorsList = ({ route, navigation }) => {
  const [doctors, setDoctors] = useState(null);
  const { data, loading } = useQuery(DOCTOR_QUERY);
  const { filter } = route.params;
  console.log("filter => ", filter);

  const getspecs = (ch) => {
    console.log("getspecs()");
    let tab = [];
    for (let i = 0; i < ch.allDoctors.length; i++) {
      if (!tab.includes(ch.allDoctors[i].specialization.specializationName)) {
        tab.push(ch.allDoctors[i].specialization.specializationName);
      }
    }
    return tab;
  };

  const getDoctors = () => {
    console.log("getDoctors()");
    let specs = getspecs(data);
    let tab = [];
    let final = [];
    if (specs.length > 0 && data) {
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
    } else {
      console.log(">>>>>>>>>>>>>>>>>>>");
    }
    console.log("Finale =>", final);
    // setDoctors(final);
    // res = final;
    // return final;
  };
  useEffect(() => {
    if (data) {
      console.log("Data NEWWWW1 => ");
      getDoctors();
      setDoctors(res);
    } else {
      console.log("Data NEWWWW2 => ");
    }
    // if (res) {
    //   console.log("res >>>>>>>>>> =>", res);
    // }
  }, [data, doctors]);
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
    maxWidth: "80%",
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
