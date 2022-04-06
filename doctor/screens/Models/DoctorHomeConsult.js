import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
  Image,
} from "react-native";
import DoctorUpcomingConsult from "./DoctorUpcomingConsult";
import { COLORS, icons, images } from "../../constants";
import { gql, useQuery } from "@apollo/client";
import { useSelector } from "react-redux";

const mapState = ({ user }) => ({
  userD: user.userD,
});

const CONSULT_QUERY = gql`
  query {
    allSchedules {
      startTime
      endTime
      date
      specializations {
        specializationName
      }
      customer {
        user {
          email
        }
      }
      doctor {
        profilePicture
        username {
          email
        }
      }
      rnToken
      channelName
    }
  }
`;

const DoctorHomeConsult = ({ navigation }) => {
  const { userD } = useSelector(mapState);
  const { data, loading } = useQuery(CONSULT_QUERY);
  const [sum, setSum] = useState([]);
  const getConsult = () => {
    let tab = [];
    for (let i = 0; i < data.allSchedules.length; i++) {
      if (data.allSchedules[i].doctor.username.email === userD.email) {
        tab.push(data.allSchedules[i]);
      }
    }
    setSum(tab);
  };

  useEffect(() => {
    // if (data && !loading && userD) {
    if (data && !loading) {
      getConsult();
    }
  }, [data]);
  const handleSymthoms = () => {
    navigation.navigate("age");
  };
  return (
    <>
      <View style={styles.headerCards2}>
        <TouchableOpacity style={styles.Headercard2} onPress={handleSymthoms}>
          <Image
            style={styles.cardImg2}
            source={images.right_img2}
            // resizeMode="cover"
          />
          <View style={[styles.headerCardContent, styles.shadow]}>
            <Text style={styles.headerCardTitle}>DR. AI</Text>
            <Text style={styles.headerCardDescription}>
              Free Symptoms{"\n"} checker
            </Text>
          </View>
        </TouchableOpacity>
        <ImageBackground
          style={[styles.fixed, styles.bgContainer, { zIndex: -1 }]}
          source={images.homeBg}
        />
      </View>
      {/* Consultations Title */}
      <View style={styles.specContainer}>
        <Text style={styles.SpecTitle}>My Consultations</Text>
      </View>
      {sum.length > 0 ? (
        sum.map((item, index) => {
          const month = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
          ];
          const weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
          const nbDate = new Date(
            `${month[item.date.substr(5, 2) - 1]} ${item.date.substr(
              8,
              2
            )}, ${item.date.substr(0, 4)} ${item.startTime}`
          );
          const day = weekday[nbDate.getDay()];
          return (
            <DoctorUpcomingConsult
              key={index}
              day={day}
              nbDay={item.date.substr(8, 2)}
              spec={item.specializations.specializationName}
              time={nbDate}
              doctorImg={item.doctor.profilePicture}
              rtcToken={item.rnToken}
              channelName={item.channelName}
              navigation={navigation}
            />
          );
        })
      ) : (
        <View
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingVertical: 20,
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>
            No Consultation yet.
          </Text>
        </View>
      )}
    </>
  );
};

export default DoctorHomeConsult;

const styles = StyleSheet.create({
  headerCards2: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
    width: "100%",
  },
  Headercard2: {
    borderRadius: 10,
    width: "80%",
    paddingHorizontal: 10,
  },
  cardImg2: {
    width: "100%",
    height: 120,
    overflow: "hidden",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  headerCardContent: {
    backgroundColor: COLORS.primary,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  shadow: {
    shadowColor: COLORS.primary,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0,
    shadowRadius: 2,
    elevation: 4,
  },
  headerCardTitle: {
    color: "black",
    fontSize: 14,
    textAlign: "center",
    marginVertical: 5,
  },
  headerCardDescription: {
    color: "grey",
    fontSize: 14,
    textAlign: "center",
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  //   Background
  bgContainer: {
    width: Dimensions.get("window").width, //for full screen
    height: Dimensions.get("window").height, //for full screen
  },
  fixed: {
    position: "absolute",
    top: -30,
    left: 0,
    right: 0,
    bottom: 0,
  },
  specContainer: {
    margin: 10,
    marginTop: 20,
  },
  SpecTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: COLORS.fontColor1,
  },
});