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
import { FontAwesome } from "@expo/vector-icons";
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
          username
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
    serverCurrenttime
  }
`;

let j = 0;
const DoctorHomeConsult = (props) => {
  const { navigation } = props;
  const { userD } = useSelector(mapState);
  const { data, loading, refetch } = useQuery(CONSULT_QUERY);
  const [sum, setSum] = useState([]);
  const getConsult = () => {
    let tab = [];
    if (data)
      for (let i = 0; i < data.allSchedules.length; i++) {
        if (data?.allSchedules[i]?.doctor?.username?.email === userD.email) {
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
          // const weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
          // const nbDate = new Date(
          //   `${
          //     month[data.allSchedules[i].date.substr(5, 2) - 1]
          //   } ${data.allSchedules[i].date.substr(8, 2)}, ${data.allSchedules[
          //     i
          //   ].date.substr(0, 4)} ${data.allSchedules[i].startTime}`
          // );
          // // const day = weekday[nbDate.getDay()];
          // const d = new Date();

          let appointment_date_time_in_given_gmt = new Date(
            `${
              month[data.allSchedules[i].date.substr(5, 2) - 1]
            } ${data.allSchedules[i].date.substr(8, 2)}, ${data.allSchedules[
              i
            ].date.substr(0, 4)} ${data.allSchedules[i].startTime} GMT`
          );

          let current_date_time_from_server = new Date(
            data.serverCurrenttime * 1000
          );
          const timeLeft =
            (appointment_date_time_in_given_gmt -
              current_date_time_from_server) /
            1000;

          console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
          console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
          console.log("date :", data.allSchedules[i].date);
          console.log("time :", data.allSchedules[i].startTime);
          console.log(
            "current_date_time_from_server :",
            current_date_time_from_server
          );
          console.log("timeLeft  :", timeLeft);
          console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
          console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");

          if (timeLeft) {
            const t = {
              day: data.allSchedules[i].date.substr(8, 2),
              month: month[
                parseInt(data.allSchedules[i].date.substr(5, 2)) - 1
              ].substr(0, 3),
              spec: data.allSchedules[i].specializations.specializationName,
              time: appointment_date_time_in_given_gmt,
              doctorImg: data.allSchedules[i].doctor.profilePicture,
              rtcToken: data.allSchedules[i].rnToken,
              channelName: data.allSchedules[i].channelName,
              customerName: data.allSchedules[i].customer.user?.username
                ? data.allSchedules[i].customer.user?.username
                : "--",
              timeLeft: timeLeft,
            };
            j++;
            tab.push(t);
          }
        }
      }
    setSum(tab);
  };

  useEffect(() => {
    console.log("Here Again", loading);
    if (!loading) getConsult();
  }, [loading]);

  const buttonPreesed = async () => {
    await refetch();
    getConsult();
  };
  return (
    <>
      <View style={styles.headerCards2}>
        <TouchableOpacity
          style={styles.Headercard2}
          onPress={() => navigation.navigate("age")}
        >
          <Image
            style={styles.cardImg2}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/assets%2Fimages%2Fright_img2.png?alt=media&token=13ad195b-b7c5-45de-b795-761e1a4d4ee6",
            }}
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
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/assets%2Fimages%2FhomeBg.png?alt=media&token=3cbc2277-915d-4ad6-85df-dcc98f84e7f7",
          }}
        />
      </View>
      {/* Consultations Title */}
      <View style={styles.specContainer}>
        <Text style={styles.SpecTitle}>My Consultations</Text>
        <TouchableOpacity onPress={buttonPreesed}>
          <FontAwesome name="refresh" size={24} color="green" />
        </TouchableOpacity>
      </View>
      {sum.map((item, index) => {
        return (
          <DoctorUpcomingConsult
            key={index}
            day={item.day}
            month={item.month}
            spec={item.spec}
            time={item.time}
            doctorImg={item.doctorImg}
            rtcToken={item.rtcToken}
            channelName={item.channelName}
            customerName={item.customerName}
            isExpired={item.timeLeft > 0 ? false : true}
            navigation={navigation}
            item={item}
          />
        );
      })}
      {sum?.length === 0 && (
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
          {j === 0 && (
            <View
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                paddingVertical: 10,
              }}
            >
              <Text style={{ fontSize: 14, fontWeight: "600" }}>
                Contact admin for missed consultations.
              </Text>
            </View>
          )}
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
    flexDirection: "row",
    justifyContent: "space-around",
    margin: 10,
    marginTop: 20,
  },
  SpecTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: COLORS.fontColor1,
  },
});
