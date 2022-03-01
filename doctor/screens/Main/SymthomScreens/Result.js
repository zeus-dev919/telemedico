// import { ISABELL_API_KEY } from "@env";
import React, { useState, useEffect } from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  ActivityIndicator,
  TouchableOpacity,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS, icons, images } from "../../../constants";
import DoctorCardModel from "../../Models/DoctorCardModel";
import { gql, useQuery } from "@apollo/client";

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

const Result = ({ route, navigation }) => {
  const { data, loading } = useQuery(DOCTOR_QUERY);
  console.log("Data =>", data, loading);

  const { age, gender, pregnant, country_id, region_id, predictive_text } =
    route.params;
  console.log("From Result => ", {
    age,
    gender,
    pregnant,
    country_id,
    region_id,
    predictive_text,
  });
  const [result, setResult] = useState(null);
  // 1
  const [diagnose1, setDiagnose1] = useState(null);
  const [spec1, setSpec1] = useState(null);
  const [doctors1, setDoctors1] = useState(null);
  // 2
  const [diagnose2, setDiagnose2] = useState(null);
  const [spec2, setSpec2] = useState(null);
  const [doctors2, setDoctors2] = useState(null);
  // 3
  const [diagnose3, setDiagnose3] = useState(null);
  const [spec3, setSpec3] = useState(null);
  const [doctors3, setDoctors3] = useState(null);

  const [colorSys, setColorSys] = useState("#000000");
  const [colorText, setColorText] = useState("");
  const getResult = async () => {
    await fetch(
      `https://apiscsandbox.isabelhealthcare.com/v2/ranked_differential_diagnoses?specialties=28&dob=${age}&sex=${gender}&pregnant=${
        pregnant === "_" ? "" : pregnant
      }&region=${region_id}&country_id=${country_id}&querytext=${predictive_text}&suggest=Suggest+Differe
    ntial+Diagnosis&flag=sortbyRW_advanced&searchType=0&web_service=json`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `nIWd9Dad9cJ9PJnrML1B92N4jWu3C76n`,
          // Authorization: `${ISABELL_API_KEY}`,
        },
      }
    )
      .then((response) => response.json())
      .then((res) => {
        console.log("Response =>", res);
        setResult(
          res.diagnoses_checklist.query_result_details.total_results_returned
        );
        setDiagnose1(res.diagnoses_checklist.diagnoses[0].diagnosis_name);
        setSpec1(res.diagnoses_checklist.diagnoses[0].specialty);
        //
        setDiagnose2(res.diagnoses_checklist.diagnoses[1].diagnosis_name);
        setSpec2(res.diagnoses_checklist.diagnoses[1].specialty);
        //
        setDiagnose3(res.diagnoses_checklist.diagnoses[2].diagnosis_name);
        setSpec3(res.diagnoses_checklist.diagnoses[2].specialty);
        //
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const getDoctors = (data, ch) => {
    console.log("Data from getDoctors =>", data.allDoctors[0]);
    let tab = [];
    for (let i = 0; i < data.allDoctors.length; i++) {
      if (data.allDoctors[i].specialization.specializationName === ch) {
        tab.push({
          name: data.allDoctors[i].firstName + data.allDoctors[i].lastName,
          location:
            data.allDoctors[i].state + " ," + data.allDoctors[i].country,
          speciality: data.allDoctors[i].specialization.specializationName,
          experience: data.allDoctors[i].experience
            ? data.allDoctors[i].experience
            : "--",
          img: data.allDoctors[i].avatar ? data.allDoctors[i].avatar : "",
        });
      }
    }
    return tab;
  };
  const handleMoreDoctors = () => {
    navigation.navigate("doctorList", { filter: "8" });
  };
  useEffect(() => {
    if (data && spec1) {
      setDoctors1(getDoctors(data, spec1));
    }
    if (data && spec2) {
      setDoctors2(getDoctors(data, spec1));
    }
    if (data && spec3) {
      setDoctors3(getDoctors(data, spec1));
    }
  }, [data]);
  useEffect(() => {
    getResult();
    if (result >= 0 && result <= 39) {
      setColorSys("#00CC00");
      setColorText("Walk in clinic/Telemedicine");
    }
    if (result >= 40 && result <= 79) {
      setColorSys("#FF8000");
      setColorText("Family Physician/Urgent Care Clinic/Minor Injuries Unit");
    }
    if (result >= 80 && result <= 100) {
      setColorSys("#FF0000");
      setColorText("Emergency Services/ER");
    }
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.subContainer}>
        {/* Red Header */}
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.headerSub}
            onPress={() => navigation.navigate("home")}
          >
            <Image
              style={styles.imgStyle}
              source={images.logo}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <View style={styles.titleConatiner}>
            <Text style={styles.title1}>DR. AI</Text>
          </View>
          <TouchableOpacity
            style={styles.headerSub}
            onPress={() => navigation.navigate("home")}
          >
            <Ionicons
              name="md-home-sharp"
              size={24}
              color="black"
              style={styles.icon_style}
            />
          </TouchableOpacity>
        </View>
      </View>
      {/* ScrollView */}
      <ScrollView style={styles.scrollView}>
        <Text style={styles.cardTitle2}>Welcome to the DR. AI</Text>
        <View style={{ alignItems: "center", width: "100%" }}>
          <View style={{ marginBottom: 20 }}>
            <Image
              style={styles.icon}
              source={icons.light}
              resizeMode="contain"
            />
          </View>
          <View style={{ marginBottom: 20 }}>
            <Text style={styles.title1}>Result</Text>
          </View>
        </View>
        {diagnose1 && data ? (
          <>
            <View style={styles.diagnoseContainer}>
              <Text style={styles.title3}>{diagnose1}</Text>
              <Text style={styles.title4}>{spec1}</Text>
              {/* {doctors1?.length > 0 ? (
                doctors1.map((item, index) => (
                  <DoctorCardModel
                    key={index}
                    name={item.name}
                    location={item.location}
                    speciality={item.speciality}
                    experience={item.experience}
                    img={item.img}
                    bg="0"
                    navigation={navigation}
                  />
                ))
              ) : (
                <TouchableOpacity
                  onPress={handleMoreDoctors}
                  style={styles.relevant}
                >
                  <Text style={styles.relevantTitle}>See relevant doctors</Text>
                </TouchableOpacity>
              )} */}
            </View>
            <View style={styles.diagnoseContainer}>
              <Text style={styles.title3}>{diagnose2}</Text>
              <Text style={styles.title4}>{spec2}</Text>
              {/* {doctors2?.length > 0 ? (
                doctors2.map((item, index) => (
                  <DoctorCardModel
                    key={index}
                    name={item.name}
                    location={item.location}
                    speciality={item.speciality}
                    experience={item.experience}
                    img={item.img}
                    bg="0"
                    navigation={navigation}
                  />
                ))
              ) : (
                <TouchableOpacity
                  onPress={handleMoreDoctors}
                  style={styles.relevant}
                >
                  <Text style={styles.relevantTitle}>See relevant doctors</Text>
                </TouchableOpacity>
              )} */}
            </View>
            <View style={styles.diagnoseContainer}>
              <Text style={styles.title3}>{diagnose3}</Text>
              <Text style={styles.title4}>{spec3}</Text>
              {/* {doctors3?.length > 0 ? (
                doctors3.map((item, index) => (
                  <DoctorCardModel
                    key={index}
                    name={item.name}
                    location={item.location}
                    speciality={item.speciality}
                    experience={item.experience}
                    img={item.img}
                    bg="0"
                    navigation={navigation}
                  />
                ))
              ) : (
                <TouchableOpacity
                  onPress={handleMoreDoctors}
                  style={styles.relevant}
                >
                  <Text style={styles.relevantTitle}>See relevant doctors</Text>
                </TouchableOpacity>
              )} */}
            </View>
            <TouchableOpacity
                  onPress={handleMoreDoctors}
                  style={styles.relevant}
                >
                  <Text style={styles.relevantTitle}>See more differential diagnosis</Text>
                </TouchableOpacity>
            <View style={{ marginVertical: 20 }}>
              <Text style={styles.title5}>
                Consult Our Top USA Specialists
              </Text>
            </View>
            <Text style={styles.title3}>Cardiologist</Text>
            <DoctorCardModel
              name="Robert Rose"
              desc="-- ,--"
              img=""
              patients="--"
              experience="--"
              speciality="Cardiology"
              info="--"
              fees="--"
              duration="20"
              bg="0"
              navigation={navigation}
            />
            <Text style={styles.title3}>Oncologist</Text>
            <DoctorCardModel
              name="Ari Gabayan"
              desc="-- ,--"
              img=""
              patients="--"
              experience="--"
              speciality="Radiation Oncology"
              info="--"
              fees="--"
              duration="20"
              bg="0"
              navigation={navigation}
            />
            <TouchableOpacity
                  onPress={handleMoreDoctors}
                  style={styles.relevant}
                >
                  <Text style={styles.relevantTitle}>See more doctors</Text>
                </TouchableOpacity>
          </>
        ) : (
          <ActivityIndicator size="large" color={COLORS.blueBtn} />
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Result;

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
    paddingHorizontal: 20,
  },
  logo: {
    width: 30,
    height: 30,
  },
  imgStyle: {
    width: 60,
  },
  headerSub: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  icon_style: {
    marginLeft: 40,
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
    color: COLORS.fontColor4,
    fontSize: 20,
    fontWeight: "bold",
    margin: 0,
    textAlign: "left",
    marginBottom: 0,
    marginTop: 10,
  },
  title4: {
    color: COLORS.fontColor2,
    fontSize: 11,
    fontWeight: "700",
    marginTop: 3,
    marginBottom: 20,
    textAlign: "left",
  },
  title5: {
    color: COLORS.fontColor4,
    fontSize: 18,
    fontWeight: "bold",
    margin: 0,
    lineHeight: 20,
    textAlign: "center",
  },
  title9: {
    color: COLORS.fontColor2,
    fontSize: 80,
    fontWeight: "bold",
    margin: 0,
    padding: 0,
    // lineHeight: 20,
    textAlign: "center",
    paddingHorizontal: 20,
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
  diagnoseContainer: {
    width: "100%",
    paddingBottom: 0,
  },
  relevant: {
    backgroundColor: COLORS.blueBtn,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderRadius: 10,
    marginVertical: 15,
    paddingVertical: 8,
    paddingHorizontal: 15,
  },
  relevantTitle: {
    fontSize: 18,
    color: "white",
  },
});
