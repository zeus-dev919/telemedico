import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { COLORS, icons } from "../../constants";

const DoctorCardModel2 = (props) => {
  const {
    name,
    desc,
    img,
    patients,
    experience,
    speciality,
    info,
    fees,
    duration,
    navigation,
    type,
  } = props;
  var check = type === "2" ? true : false;
  const handleAppointment = () => {
    console.log("Appointment Clicked !!");
    navigation.navigate("appointment", {
      name: name,
      desc: desc,
      img: img,
      patients: patients,
      experience: experience,
      speciality: speciality,
      info: info,
      fees: fees,
      duration: duration,
    });
  };
  return (
    <>
      {check ? (
        <View style={styles.doctorCard2}>
          <View style={[styles.card, styles.shadow]}>
            <View style={styles.ImgContainer}>
              <View style={styles.doctorCardRight}>
                {/* <View style={styles.statusIndic2}></View> */}
                {/* <View style={styles.statusIndic3}></View> */}
                {img.startsWith("http") ? (
                  <Image
                    style={styles.doctorAvatar2}
                    source={{
                      uri: img,
                    }}
                    resizeMode="cover"
                  />
                ) : (
                  <Image
                    style={styles.doctorAvatar2}
                    source={{
                      uri: "https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/assets%2Ficons%2Fplaceholder.png?alt=media&token=50c889a1-fb4c-4e92-af36-034f6a9f6cdf",
                    }}
                    resizeMode="cover"
                  />
                )}
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "flex-start",
                width: "100%",
              }}
            >
              <View>
                <Text style={styles.title1}>{name}</Text>
                <Text
                  style={[styles.title2, { maxWidth: "100%", lineHeight: 14 }]}
                >
                  {desc}
                </Text>
              </View>
              <View>
                <Text style={styles.title2}>
                  Fee:{" "}
                  <Text style={[styles.boxNb, { color: "#f9b664" }]}>
                    {fees !== "--" ? `$${fees}` : fees}
                  </Text>
                </Text>
                <Text style={styles.title2}>
                  Experience:{" "}
                  <Text style={[styles.boxNb, { color: "#f660be" }]}>
                    {experience !== "--" ? `${experience}yrs+` : experience}
                  </Text>
                </Text>
              </View>
            </View>
            <TouchableOpacity
              onPress={handleAppointment}
              style={[styles.doctorBtnStyle, styles.shadow1]}
            >
              <Text style={styles.doctorBtnStyleText}>Request Consult</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <View style={styles.doctorCard}>
          <View style={[styles.card, styles.shadow]}>
            <View style={styles.ImgContainer}>
              <View style={styles.doctorCardRight}>
                {/* <View style={styles.statusIndic}></View> */}
                {img.startsWith("http") ? (
                  <Image
                    style={styles.doctorAvatar}
                    source={{
                      uri: img,
                    }}
                    resizeMode="cover"
                  />
                ) : (
                  <Image
                    style={styles.doctorAvatar}
                    source={{
                      uri: "https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/assets%2Ficons%2Fplaceholder.png?alt=media&token=50c889a1-fb4c-4e92-af36-034f6a9f6cdf",
                    }}
                    resizeMode="cover"
                  />
                )}
              </View>
            </View>
            <Text style={styles.title1}>{name}</Text>
            <Text style={styles.title2}>{desc}</Text>
            <TouchableOpacity
              onPress={handleAppointment}
              style={[styles.doctorBtnStyle, styles.shadow1]}
            >
              <Text style={styles.doctorBtnStyleText}>Appointment</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
};

export default DoctorCardModel2;

const styles = StyleSheet.create({
  //   Card
  doctorCard: {
    position: "relative",
    marginTop: 20,
    width: "50%",
  },
  doctorCard2: {
    position: "relative",
    marginTop: 20,
    width: "100%",
  },
  card: {
    borderRadius: 25,
    backgroundColor: COLORS.bgColor2,
    paddingHorizontal: 15,
    paddingVertical: 30,
    margin: 10,
    alignItems: "center",
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
  ImgContainer: {
    position: "absolute",
    top: -30,
  },
  doctorCardRight: {
    padding: 5,
    position: "relative",
  },
  statusIndic: {
    position: "absolute",
    width: 10,
    height: 10,
    backgroundColor: "#06babe",
    top: 7,
    right: 7,
    zIndex: 2,
    borderRadius: 50,
  },
  statusIndic2: {
    position: "absolute",
    width: 10,
    height: 10,
    backgroundColor: "#06babe",
    top: 9,
    right: 9,
    zIndex: 3,
    borderRadius: 50,
  },
  statusIndic3: {
    position: "absolute",
    width: 14,
    height: 14,
    backgroundColor: COLORS.bgColor1,
    // backgroundColor: 'red',
    top: 7,
    right: 7,
    zIndex: 2,
    borderRadius: 50,
  },
  doctorAvatar: {
    width: 50,
    height: 50,
    borderRadius: 50,
    zIndex: 1,
  },
  doctorAvatar2: {
    width: 70,
    height: 70,
    borderRadius: 50,
    zIndex: 1,
  },
  doctorBtnStyle: {
    backgroundColor: "#f7f9f8",
    borderRadius: 8,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginTop: 10,
  },
  doctorBtnStyleText: {
    color: COLORS.fontColor4,
    fontWeight: "bold",
    fontSize: 12,
  },
  title1: {
    color: COLORS.fontColor4,
    fontSize: 14,
    fontWeight: "bold",
    margin: 0,
    lineHeight: 29,
    textAlign: "left",
    marginBottom: 8,
  },
  title2: {
    color: COLORS.fontColor2,
    fontSize: 12,
    margin: 0,
    padding: 0,
    lineHeight: 29,
    textAlign: "left",
  },
  boxNb: {
    textAlign: "left",
    fontSize: 14,
    fontWeight: "bold",
  },
});
