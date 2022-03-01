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
import DoctorUpcomingConsult from "../../Models/DoctorUpcomingConsult";
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
      }
    }
  }
`;

const Consults = ({ navigation }) => {
  const { userD } = useSelector(mapState);
  const { data, loading } = useQuery(CONSULT_QUERY);
  const [sum, setSum] = useState(null);

  const getConsult = () => {
    let tab = [];
    for (let i = 0; i < data.allSchedules.length; i++) {
      if (data.allSchedules[i].customer.user.email === userD.email) {
        tab.push(data.allSchedules[i]);
      }
    }
    setSum(tab);
  };

  useEffect(() => {
    if (data && !loading && userD) {
      getConsult();
    }
  }, [data]);
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
            <Text style={styles.title1}>My Consults</Text>
          </View>
          <View style={{ width: 30 }}></View>
        </View>
      </View>
      {/* ScrollView */}
      <ScrollView style={styles.scrollView}>
        {sum && sum?.length > 0 ? (
          sum.map((item, index) => {
            const weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
            // let day = weekday[item.date.getDay()];
            return (
              <DoctorUpcomingConsult
                key={index}
                day="Wed"
                nbDay={item.date.substr(item.date.length - 2, 2)}
                spec={item.specializations.specializationName}
                time={item.date}
                // time="9:00 am"
                doctorImg={item.doctor.profilePic}
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
