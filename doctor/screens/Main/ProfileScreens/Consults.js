import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  ActivityIndicator,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { COLORS } from "../../../constants";
import DoctorUpcomingConsult from "../../Models/DoctorUpcomingConsult";
import { gql, useQuery } from "@apollo/client";
import { useSelector } from "react-redux";
import Header from "../../Models/Header";
import { getPrevRoute } from "../../../redux/User/user.actions";
import { useIsFocused } from "@react-navigation/native";

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
        firstName
        lastName
      }
      rnToken
      channelName
    }
    serverCurrenttime
  }
`;

// const CURRENT_TIME = gql`
//   query {
//     serverCurrenttime
//   }
// `;

const Consults = ({ route, navigation }) => {
  const prev = route?.params?.prev;
  console.log("Prev => ", prev);
  const { userD } = useSelector(mapState);
  const { data, loading, refetch } = useQuery(CONSULT_QUERY);
  const [initialLoading, setInitialLoading] = useState(false);
  const [sum, setSum] = useState([]);
  const [boolState, setBoolState] = useState(false);
  const isFocused = useIsFocused();

  useEffect(() => {
    if (prev == "0") getPrevRoute("bt");
  }, [prev]);

  const getConsult = () => {
    setInitialLoading(true);
    let tab = [];
    if (data?.allSchedules?.length > 0)
      for (let i = 0; i < data?.allSchedules?.length; i++) {
        if (data.allSchedules[i].customer?.user?.email === userD.email) {
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

          // let appointment_date_time = new Date(
          //   `${month[data.allSchedules[i].date.substr(5, 2) - 1]
          //   } ${data.allSchedules[i].date.substr(8, 2)}, ${data.allSchedules[
          //     i
          //   ].date.substr(0, 4)} ${data.allSchedules[i].startTime}`
          // );

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

          // var [nyear, nmonth, nday] = data.allSchedules[i].date.split('-');
          // var [nhour, nmin, nsec] = data.allSchedules[i].startTime.split(':');
          // let appointment_date_time_utc = Date.UTC(nyear, nmonth, nday, nhour, nmin, nsec);

          // const timeLeft = appointment_date_time_utc - (data.serverCurrenttime * 1000);
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

          if (timeLeft > 0) {
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
            };
            tab.push(t);
          }
        }
      }

    setSum(tab);
    setInitialLoading(false);
  };

  useEffect(() => {
    if (isFocused) {
      getConsult();
    }
  }, [isFocused]);

  useEffect(() => {
    if (data) {
      getConsult();
    }
  }, [data]);

  const buttonPreesed = () => {
    refetch();
  };

  if (initialLoading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ActivityIndicator color="#000 " />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation} bg={COLORS.bgColor1} isHome={false} />
      <View style={styles.titleConatiner}>
        <Text style={styles.title1}>My Consults</Text>
        <TouchableOpacity onPress={buttonPreesed}>
          <FontAwesome name="refresh" size={24} color="green" />
        </TouchableOpacity>
      </View>
      {/* ScrollView */}
      <ScrollView style={styles.scrollView}>
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
              navigation={navigation}
            />
          );
        })}
        {/* <DoctorUpcomingConsult
          day="19"
          month="Jun"
          spec="Obstetrics & Gynecology"
          time="2022-04-25T01:57:00.000Z"
          doctorImg="https://firebasestorage.googleapis.com/v0/b/medipocket2022.appspot.com/o/doctor%2FDr.%20Lloyd%20B.png?alt=media&token=0a1e38e2-6382-48b9-bf6f-5cb6ead802a5"
          rtcToken="a"
          channelName="a"
          navigation={navigation}
        /> */}
        {sum?.length === 0 && (
          <View
            style={{
              flex: 1,
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
              paddingVertical: 20,
              height: Dimensions.get("window").height - 220,
            }}
          >
            <Text style={{ fontSize: 14, fontWeight: "bold" }}>
              No Consultation yet.
            </Text>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Consults;

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
    flexDirection: "row",
    justifyContent: "space-around",
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
  // Book Appointment
  doctorBottomCard2: {
    marginTop: 15,
    marginBottom: 40,
  },
  doctorBtnStyleText2: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
    paddingVertical: 5,
  },
  shadow2: {
    shadowColor: "#2758E4",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0,
    shadowRadius: 8,

    elevation: 2,
  },
  doctorBtnStyle2: {
    backgroundColor: "#2758E4",
    borderRadius: 8,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});
