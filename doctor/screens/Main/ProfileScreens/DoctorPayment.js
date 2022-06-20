import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../../constants";
import DoctorPaymentModel from "../../Models/DoctorPaymentModel";
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
      doctor {
        profilePicture
        username {
          email
        }
        doctorFees
      }
    }
    serverCurrenttime
  }
`;

const DoctorPayment = ({ navigation }) => {
  const { userD } = useSelector(mapState);
  const { data, loading } = useQuery(CONSULT_QUERY);
  const [sum, setSum] = useState([]);
  const getConsult = () => {
    let tab = [];
    if (data?.allSchedules?.length > 0)
      for (let i = 0; i < data.allSchedules.length; i++) {
        if (data.allSchedules[i].doctor?.username?.email === userD.email) {
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

          var [nyear, nmonth, nday] = data.allSchedules[i].date.split("-");
          var [nhour, nmin, nsec] = data.allSchedules[i].startTime.split(":");
          let appointment_date_time_utc = Date.UTC(
            nyear,
            nmonth,
            nday,
            nhour,
            nmin,
            nsec
          );
          const timeLeft =
            (appointment_date_time_utc - current_date_time_from_server) / 1000;

          if (timeLeft) {
            console.log("true line 85");
            const t = {
              startTime: data.allSchedules[i].startTime,
              day: data.allSchedules[i].date.substr(8, 2),
              month: month[
                parseInt(data.allSchedules[i].date.substr(5, 2)) - 1
              ].substr(0, 3),
              time: appointment_date_time_in_given_gmt,
              doctorFees: data.allSchedules[i].doctor.doctorFees,
              timeLeft: timeLeft,
            };
            tab.push(t);
          }
        }
      }
    setSum(tab);
  };

  useEffect(() => {
    if (!loading) getConsult();
  }, [loading]);
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
            <Text style={styles.title1}>My Payments</Text>
          </View>
          <View style={{ width: 30 }}></View>
        </View>
      </View>
      <ScrollView style={styles.scrollView}>
        {sum.map((item, index) => (
          <DoctorPaymentModel
            startTime={item.startTime}
            day={item.day}
            month={item.month}
            time={item.time}
            doctorFees={item.doctorFees}
            timeleft={item.timeleft}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default DoctorPayment;

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
