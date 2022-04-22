import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { COLORS, icons } from "../../constants";

const DoctorCardModel = (props) => {
  const {
    name,
    desc,
    country,
    img,
    patients,
    experience,
    speciality,
    info,
    fees,
    duration,
    navigation,
    bg,
  } = props;
  var check = false;
  if (bg === "0") check = true;
  const handleRedirect = () => {
    navigation.navigate("appointment", {
      name: name,
      desc: desc,
      country: country,
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
    <View
      style={
        check ? [styles.card1, styles.shadow1] : [styles.card, styles.shadow1]
      }
    >
      {check ? (
        <>
          <View style={styles.doctorCard}>
            <View style={styles.doctorCardLeft}>
              <TouchableOpacity onPress={() => handleRedirect()}>
                <Text style={[styles.cardTitle1,{ marginVertical: 3, fontSize: 16 }]}>{name}</Text>
              </TouchableOpacity>
              <Text style={[styles.cardTitle2, { marginVertical: 4, fontSize: 13 }]}>{desc}</Text>
              <Text style={[styles.cardTitle2, { marginVertical: 4, fontSize: 13 }]}>{speciality}</Text>
            </View>
            <TouchableOpacity
              onPress={() => handleRedirect()}
              style={styles.doctorCardRight}
            >
              {/* <View style={styles.statusIndic}></View> */}
              {img.length > 0 && img.startsWith("http") ? (
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
            </TouchableOpacity>
          </View>
          <View style={styles.doctorBottomCard}>
            <Text style={styles.doctorBottomCardLeftText}>
              {experience !== "--" ? `${experience}yrs+` : experience}
            </Text>
            <TouchableOpacity
              style={[styles.doctorBtnStyle, styles.shadow1]}
              onPress={() => handleRedirect()}
            >
              <Text style={styles.doctorBtnStyleText}>Request Consult</Text>
            </TouchableOpacity>
          </View>
        </>
      ) : (
        <>
          <View style={styles.doctorCard}>
            <View style={styles.doctorCardLeft}>
              <Text
                style={[styles.cardTitle1, { marginVertical: 3, fontSize: 18 }]}
              >
                {name}
              </Text>
              <Text
                style={[styles.cardTitle2, { marginVertical: 3, fontSize: 14 }]}
              >
                {desc}
              </Text>
              {/* <Text style={styles.cardTitle2}>{country}</Text> */}
              <Text
                style={[styles.cardTitle2, { marginVertical: 3, fontSize: 14 }]}
              >
                {speciality}
              </Text>
            </View>
            <View style={styles.doctorCardRight}>
              {/* <View style={styles.statusIndic1}></View>
              <View style={styles.statusIndic2}></View> */}
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
          <View style={styles.boxes}>
            <View style={styles.boxContainer}>
              <View style={[styles.box, styles.shadow1]}>
                <Text
                  style={[
                    styles.cardTitle2,
                    { marginLeft: 0, textAlign: "center", fontSize: 14 },
                  ]}
                >
                  Fee
                </Text>
                <Text style={[styles.boxNb, { color: "#f9b664" }]}>
                  {fees ? `$${fees}` : "--"}
                </Text>
              </View>
            </View>
            <View style={styles.boxContainer}>
              <View style={[styles.box, styles.shadow1]}>
                <Text
                  style={[
                    styles.cardTitle2,
                    { marginLeft: 0, textAlign: "center", fontSize: 14 },
                  ]}
                >
                  Experience
                </Text>
                <Text style={[styles.boxNb, { color: "#f660be" }]}>
                  {experience !== "--" ? `${experience}yrs+` : experience}
                </Text>
              </View>
            </View>
          </View>
        </>
      )}
    </View>
  );
};

export default DoctorCardModel;

const styles = StyleSheet.create({
  card: {
    borderRadius: 25,
    backgroundColor: COLORS.bgColor2,
    paddingHorizontal: 20,
    paddingVertical: 20,
    margin: 10,
  },
  card1: {
    borderRadius: 25,
    backgroundColor: "white",
    paddingHorizontal: 20,
    paddingVertical: 20,
    margin: 10,
  },
  shadow1: {
    // Shadow Start
    shadowColor: "#cdcddd",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0,
    shadowRadius: 8,

    elevation: 2,
    // Shadow End
  },
  shadow2: {
    // Shadow Start
    shadowColor: "#2758E4",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0,
    shadowRadius: 18,

    elevation: 8,
    // Shadow End
  },
  // Doctor Card
  doctorCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  doctorCardLeft: {
    padding: 0,
    maxWidth: "60%",
  },
  doctorCardRight: {
    padding: 5,
    position: "relative",
  },
  statusIndic: {
    position: "absolute",
    width: 12,
    height: 12,
    backgroundColor: "#06babe",
    top: 13,
    right: 13,
    zIndex: 2,
    borderRadius: 50,
  },
  statusIndic1: {
    position: "absolute",
    width: 12,
    height: 12,
    backgroundColor: "#06babe",
    top: 12,
    right: 12,
    zIndex: 3,
    borderRadius: 50,
  },
  statusIndic2: {
    position: "absolute",
    width: 18,
    height: 18,
    backgroundColor: COLORS.bgColor1,
    top: 10,
    right: 10,
    zIndex: 2,
    borderRadius: 50,
  },
  doctorAvatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    zIndex: 1,
  },
  doctorBottomCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  doctorBottomCard2: {
    marginTop: 10,
  },
  doctorBottomCardLeftText: {
    color: "#f9c37e",
    marginLeft: 10,
    fontWeight: "bold",
    fontSize: 24,
  },
  doctorBtnStyle: {
    backgroundColor: "#f7f9f8",
    borderRadius: 8,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  doctorBtnStyle2: {
    backgroundColor: "#2758E4",
    borderRadius: 8,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  doctorBtnStyleText: {
    color: COLORS.fontColor4,
    fontWeight: "bold",
    fontSize: 12,
  },
  doctorBtnStyleText2: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
    paddingVertical: 5,
  },
  cardTitle1: {
    color: COLORS.fontColor4,
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 10,
    margin: 0,
    lineHeight: 20,
  },
  cardTitle2: {
    color: COLORS.fontColor2,
    fontSize: 12,
    marginLeft: 10,
    margin: 0,
    lineHeight: 18,
  },
  // BOXES
  boxes: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
  },
  boxContainer: {
    width: "50%",
  },
  box: {
    backgroundColor: "white",
    padding: 20,
    alignItems: "center",
    borderRadius: 15,
    margin: 10,
  },
  boxTopText: {
    fontSize: 14,
  },
  boxNb: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
