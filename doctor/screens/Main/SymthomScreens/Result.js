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
  Modal,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS, icons, images } from "../../../constants";
import DoctorCardModel from "../../Models/DoctorCardModel";
import { gql, useQuery } from "@apollo/client";
import { useSelector } from "react-redux";

const mapState = ({ user }) => ({
  doctorD: user.doctorD,
});

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
  const { doctorD } = useSelector(mapState);
  const { data, loading } = useQuery(DOCTOR_QUERY);
  console.log("Data =>", data, loading);
  const [modalVisible, setModalVisible] = useState(true);

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
  const [showMore, setShowMore] = useState(false);
  // 1
  const [diagnose1, setDiagnose1] = useState(null);
  const [spec1, setSpec1] = useState(null);
  const [spec1Flag, setSpec1Flag] = useState(null);
  const [doctors1, setDoctors1] = useState(null);
  // 2
  const [diagnose2, setDiagnose2] = useState(null);
  const [spec2, setSpec2] = useState(null);
  const [spec2Flag, setSpec2Flag] = useState(null);
  const [doctors2, setDoctors2] = useState(null);
  // 3
  const [diagnose3, setDiagnose3] = useState(null);
  const [spec3, setSpec3] = useState(null);
  const [spec3Flag, setSpec3Flag] = useState(null);
  const [doctors3, setDoctors3] = useState(null);
  // 4
  const [diagnose4, setDiagnose4] = useState(null);
  const [spec4, setSpec4] = useState(null);
  const [spec4Flag, setSpec4Flag] = useState(null);
  const [doctors4, setDoctors4] = useState(null);
  // 5
  const [diagnose5, setDiagnose5] = useState(null);
  const [spec5, setSpec5] = useState(null);
  const [spec5Flag, setSpec5Flag] = useState(null);
  const [doctors5, setDoctors5] = useState(null);
  // 6
  const [diagnose6, setDiagnose6] = useState(null);
  const [spec6, setSpec6] = useState(null);
  const [spec6Flag, setSpec6Flag] = useState(null);
  const [doctors6, setDoctors6] = useState(null);
  // 7
  const [diagnose7, setDiagnose7] = useState(null);
  const [spec7, setSpec7] = useState(null);
  const [spec7Flag, setSpec7Flag] = useState(null);
  const [doctors7, setDoctors7] = useState(null);
  // 8
  const [diagnose8, setDiagnose8] = useState(null);
  const [spec8, setSpec8] = useState(null);
  const [spec8Flag, setSpec8Flag] = useState(null);
  const [doctors8, setDoctors8] = useState(null);
  // 9
  const [diagnose9, setDiagnose9] = useState(null);
  const [spec9, setSpec9] = useState(null);
  const [spec9Flag, setSpec9Flag] = useState(null);
  const [doctors9, setDoctors9] = useState(null);
  // 10
  const [diagnose10, setDiagnose10] = useState(null);
  const [spec10, setSpec10] = useState(null);
  const [spec10Flag, setSpec10Flag] = useState(null);
  const [doctors10, setDoctors10] = useState(null);

  const [colorSys, setColorSys] = useState("#000000");
  const [colorText, setColorText] = useState("");
  const getResult = async () => {
    await fetch(
      `https://apisc.isabelhealthcare.com/v2/ranked_differential_diagnoses?specialties=28&dob=${age}&sex=${gender}&pregnant=${
        pregnant === "_" ? "" : pregnant
      }&region=${region_id}&country_id=${country_id}&querytext=${predictive_text}&suggest=Suggest+Differe
    ntial+Diagnosis&flag=sortbyRW_advanced&searchType=0&web_service=json`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `U7IdoNJWWzV75NZGxVGJ8KE7p0W5A1m2`,
          // Authorization: `nIWd9Dad9cJ9PJnrML1B92N4jWu3C76n`,
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
        setSpec1Flag(
          res.diagnoses_checklist.diagnoses[0].red_flag === "false"
            ? false
            : true
        );
        //
        setDiagnose2(res.diagnoses_checklist.diagnoses[1].diagnosis_name);
        setSpec2(res.diagnoses_checklist.diagnoses[1].specialty);
        setSpec2Flag(
          res.diagnoses_checklist.diagnoses[1].red_flag === "false"
            ? false
            : true
        );
        //
        setDiagnose3(res.diagnoses_checklist.diagnoses[2].diagnosis_name);
        setSpec3(res.diagnoses_checklist.diagnoses[2].specialty);
        setSpec3Flag(
          res.diagnoses_checklist.diagnoses[2].red_flag === "false"
            ? false
            : true
        );
        //
        setDiagnose4(res.diagnoses_checklist.diagnoses[3].diagnosis_name);
        setSpec4(res.diagnoses_checklist.diagnoses[3].specialty);
        setSpec4Flag(
          res.diagnoses_checklist.diagnoses[3].red_flag === "false"
            ? false
            : true
        );
        //
        setDiagnose5(res.diagnoses_checklist.diagnoses[4].diagnosis_name);
        setSpec5(res.diagnoses_checklist.diagnoses[4].specialty);
        setSpec5Flag(
          res.diagnoses_checklist.diagnoses[4].red_flag === "false"
            ? false
            : true
        );
        //
        setDiagnose6(res.diagnoses_checklist.diagnoses[5].diagnosis_name);
        setSpec6(res.diagnoses_checklist.diagnoses[5].specialty);
        setSpec6Flag(
          res.diagnoses_checklist.diagnoses[5].red_flag === "false"
            ? false
            : true
        );
        //
        setDiagnose7(res.diagnoses_checklist.diagnoses[6].diagnosis_name);
        setSpec7(res.diagnoses_checklist.diagnoses[6].specialty);
        setSpec7Flag(
          res.diagnoses_checklist.diagnoses[6].red_flag === "false"
            ? false
            : true
        );
        //
        setDiagnose8(res.diagnoses_checklist.diagnoses[7].diagnosis_name);
        setSpec8(res.diagnoses_checklist.diagnoses[7].specialty);
        setSpec8Flag(
          res.diagnoses_checklist.diagnoses[7].red_flag === "false"
            ? false
            : true
        );
        //
        setDiagnose9(res.diagnoses_checklist.diagnoses[8].diagnosis_name);
        setSpec9(res.diagnoses_checklist.diagnoses[8].specialty);
        setSpec9Flag(
          res.diagnoses_checklist.diagnoses[8].red_flag === "false"
            ? false
            : true
        );
        //
        setDiagnose10(res.diagnoses_checklist.diagnoses[9].diagnosis_name);
        setSpec10(res.diagnoses_checklist.diagnoses[9].specialty);
        setSpec10Flag(
          res.diagnoses_checklist.diagnoses[9].red_flag === "false"
            ? false
            : true
        );
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
    setShowMore(!showMore);
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
  const handleMoreDoctors1 = () => {
    navigation.navigate("doctorList", { filter: "*" });
  };
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
              source={{ uri: "https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/assets%2Flogo.png?alt=media&token=fc05e438-598e-47ea-8858-9bc564f5f989" }}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <View style={styles.titleConatiner}>
            <Text style={styles.title1}>DR. AI</Text>
          </View>
          <View style={styles.imgStyle}></View>
          {/* <TouchableOpacity
            style={styles.headerSub}
            onPress={() => navigation.navigate("home")}
          >
            <Ionicons
              name="md-home-sharp"
              size={24}
              color="black"
              style={styles.icon_style}
            />
          </TouchableOpacity> */}
        </View>
      </View>
      {/* ScrollView */}
      <ScrollView style={styles.scrollView}>
        <Text style={styles.cardTitle2}>Welcome to the DR. AI</Text>
        <View style={{ alignItems: "center", width: "100%" }}>
          <View style={{ marginBottom: 20 }}>
            <Image
              style={styles.icon}
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/assets%2Ficons%2Fsympthom%2Flight.png?alt=media&token=027bc0a1-686f-4032-aea6-73575a09e183",
              }}
              resizeMode="contain"
            />
          </View>
          <View style={{ marginBottom: 20 }}>
            <Text style={styles.title1}>Possible Causes</Text>
          </View>
        </View>
        {/* <Text style={[styles.title9, { color: colorSys }]}>{result}</Text> */}
        {/* <Text style={[styles.title2, { marginBottom: 20 }]}>{colorText}</Text> */}
        {diagnose1 && data ? (
          <>
            <View style={styles.diagnoseContainer}>
              <View style={styles.diagnoseContainer}>
                <Text style={styles.title3}>
                  {diagnose1}{" "}
                  {spec1Flag && (
                    <Image
                      source={{
                        uri: "https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/assets%2Ficons%2Fredflag.png?alt=media&token=23785d76-ccf2-45ec-be97-ede89073456b",
                      }}
                      style={styles.redflag}
                    />
                  )}
                </Text>
              </View>
              <Text style={styles.title4}>{spec1}</Text>
            </View>
            <View style={styles.diagnoseContainer}>
              <View style={styles.diagnoseContainer}>
                <Text style={styles.title3}>
                  {diagnose2}{" "}
                  {spec2Flag && (
                    <Image
                      source={{
                        uri: "https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/assets%2Ficons%2Fredflag.png?alt=media&token=23785d76-ccf2-45ec-be97-ede89073456b",
                      }}
                      style={styles.redflag}
                    />
                  )}
                </Text>
              </View>
              <Text style={styles.title4}>{spec2}</Text>
            </View>
            <View style={styles.diagnoseContainer}>
              <View style={styles.diagnoseContainer}>
                <Text style={styles.title3}>
                  {diagnose3}{" "}
                  {spec3Flag && (
                    <Image
                      source={{
                        uri: "https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/assets%2Ficons%2Fredflag.png?alt=media&token=23785d76-ccf2-45ec-be97-ede89073456b",
                      }}
                      style={styles.redflag}
                    />
                  )}
                </Text>
              </View>
              <Text style={styles.title4}>{spec3}</Text>
            </View>
            {showMore && (
              <>
                <View style={styles.diagnoseContainer}>
                  <View style={styles.diagnoseContainer}>
                    <Text style={styles.title3}>
                      {diagnose4}{" "}
                      {spec4Flag && (
                        <Image
                          source={{
                            uri: "https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/assets%2Ficons%2Fredflag.png?alt=media&token=23785d76-ccf2-45ec-be97-ede89073456b",
                          }}
                          style={styles.redflag}
                        />
                      )}
                    </Text>
                  </View>
                  <Text style={styles.title4}>{spec4}</Text>
                </View>
                <View style={styles.diagnoseContainer}>
                  <View style={styles.diagnoseContainer}>
                    <Text style={styles.title3}>
                      {diagnose5}{" "}
                      {spec5Flag && (
                        <Image
                          source={{
                            uri: "https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/assets%2Ficons%2Fredflag.png?alt=media&token=23785d76-ccf2-45ec-be97-ede89073456b",
                          }}
                          style={styles.redflag}
                        />
                      )}
                    </Text>
                  </View>
                  <Text style={styles.title4}>{spec5}</Text>
                </View>
                <View style={styles.diagnoseContainer}>
                  <View style={styles.diagnoseContainer}>
                    <Text style={styles.title3}>
                      {diagnose6}{" "}
                      {spec6Flag && (
                        <Image
                          source={{
                            uri: "https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/assets%2Ficons%2Fredflag.png?alt=media&token=23785d76-ccf2-45ec-be97-ede89073456b",
                          }}
                          style={styles.redflag}
                        />
                      )}
                    </Text>
                  </View>
                  <Text style={styles.title4}>{spec6}</Text>
                </View>
                <View style={styles.diagnoseContainer}>
                  <View style={styles.diagnoseContainer}>
                    <Text style={styles.title3}>
                      {diagnose7}{" "}
                      {spec7Flag && (
                        <Image
                          source={{
                            uri: "https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/assets%2Ficons%2Fredflag.png?alt=media&token=23785d76-ccf2-45ec-be97-ede89073456b",
                          }}
                          style={styles.redflag}
                        />
                      )}
                    </Text>
                  </View>
                  <Text style={styles.title4}>{spec7}</Text>
                </View>
                <View style={styles.diagnoseContainer}>
                  <View style={styles.diagnoseContainer}>
                    <Text style={styles.title3}>
                      {diagnose8}{" "}
                      {spec8Flag && (
                        <Image
                          source={{
                            uri: "https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/assets%2Ficons%2Fredflag.png?alt=media&token=23785d76-ccf2-45ec-be97-ede89073456b",
                          }}
                          style={styles.redflag}
                        />
                      )}
                    </Text>
                  </View>
                  <Text style={styles.title4}>{spec8}</Text>
                </View>
                <View style={styles.diagnoseContainer}>
                  <View style={styles.diagnoseContainer}>
                    <Text style={styles.title3}>
                      {diagnose9}{" "}
                      {spec9Flag && (
                        <Image
                          source={{
                            uri: "https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/assets%2Ficons%2Fredflag.png?alt=media&token=23785d76-ccf2-45ec-be97-ede89073456b",
                          }}
                          style={styles.redflag}
                        />
                      )}
                    </Text>
                  </View>
                  <Text style={styles.title4}>{spec9}</Text>
                </View>
                <View style={styles.diagnoseContainer}>
                  <View style={styles.diagnoseContainer}>
                    <Text style={styles.title3}>
                      {diagnose10}{" "}
                      {spec10Flag && (
                        <Image
                          source={{
                            uri: "https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/assets%2Ficons%2Fredflag.png?alt=media&token=23785d76-ccf2-45ec-be97-ede89073456b",
                          }}
                          style={styles.redflag}
                        />
                      )}
                    </Text>
                  </View>
                  <Text style={styles.title4}>{spec10}</Text>
                </View>
              </>
            )}
            {!showMore ? (
              <TouchableOpacity
                onPress={handleMoreDoctors}
                style={styles.relevant}
              >
                <Text style={styles.relevantTitle}>
                  See more differential diagnosis
                </Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                onPress={handleMoreDoctors}
                style={styles.relevant}
              >
                <Text style={styles.relevantTitle}>
                  See Less differential diagnosis
                </Text>
              </TouchableOpacity>
            )}
            {!doctorD && (
              <>
                <View style={{ marginVertical: 20 }}>
                  <Text style={styles.title5}>
                    Consult Our Top USA Specialists
                  </Text>
                </View>
                <Text style={styles.title3}>Cardiologist</Text>
                <DoctorCardModel
                  name="Robert Rose"
                  desc="-- ,--"
                  img="https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/doctor%2FDr.%20%20Robert%20M%20Rose.png?alt=media&token=de7725a3-6b23-40dc-b93d-dc9b48bbb523"
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
                  img="https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/doctor%2FDr_%20Ari%20Gabayan.png?alt=media&token=8d90448f-3ace-458d-871a-45b921778582"
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
                  onPress={handleMoreDoctors1}
                  style={styles.relevant}
                >
                  <Text style={styles.relevantTitle}>See more doctors</Text>
                </TouchableOpacity>
              </>
            )}
          </>
        ) : (
          <ActivityIndicator size="large" color={COLORS.blueBtn} />
        )}
      </ScrollView>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TouchableOpacity
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
              style={styles.ModelTitleView}
            >
              <Text style={styles.titleModal2}>
                <Ionicons name="close-circle-outline" size={30} color="black" />
              </Text>
            </TouchableOpacity>
            <Text style={{ fontSize: 18 }}>Note!</Text>
            <View style={styles.flagDesc}>
              <Text>
                <Image
                  source={{
                    uri: "https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/assets%2Ficons%2Fredflag.png?alt=media&token=23785d76-ccf2-45ec-be97-ede89073456b",
                  }}
                  style={styles.redflag}
                />{" "}
                Red Flag F conditions are serious and acute and need to be
                treated in the Emergency Department.
              </Text>
            </View>
          </View>
        </View>
      </Modal>
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
    width: 80,
    height: 80,
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
  redflag: {
    width: 20,
    height: 20,
  },
  //   Model
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
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
  flagDesc: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    padding: 12,
  },
  titleModal2: {
    width: "100%",
    marginBottom: 10,
    paddingRight: 10,
    textAlign: "right",
  },
  ModelTitleView: {
    flexDirection: "row",
  },
});
