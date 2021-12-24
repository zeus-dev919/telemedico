import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { COLORS } from "../constants";

const Conscent = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.headerTitle}>
          <Text style={styles.headerText1}>Consent Form</Text>
        </View>
        <View style={styles.descContainer}>
          {/* 1 */}
          <View style={styles.descs}>
            <Text style={styles.desc2}>1.</Text>
            <Text style={styles.desc}>
              I hereby authorize Health Care services to use the telehealth
              practice platform for telecommunication for evaluating, texting
              and diagnosing my medical condition.
            </Text>
          </View>
          {/* 2 */}
          <View style={styles.descs}>
            <Text style={styles.desc2}>2.</Text>
            <Text style={styles.desc}>
              I understand that technical difficulties may occur before or
              during the telehealth sessions and my appointment cannot be
              started or ended as intended.
            </Text>
          </View>
          {/* 3 */}
          <View style={styles.descs}>
            <Text style={styles.desc2}>3.</Text>
            <Text style={styles.desc}>
              I aacept that the professionals can contact interactive sessions
              with video call; however, Iam informed that the sessions can be
              conducted via regular voice communication if the technical
              requirements such as internet speed cannot be met.
            </Text>
          </View>
          {/* 4 */}
          <View style={styles.descs}>
            <Text style={styles.desc2}>4.</Text>
            <Text style={styles.desc}>
              I understand that my current insurance may not cover that
              additional fees of the telehealth practices an I may be
              responsible for any fee that my insurance company does not cover.
            </Text>
          </View>
          {/* 5 */}
          <View style={styles.descs}>
            <Text style={styles.desc2}>5.</Text>
            <Text style={styles.desc}>
              I agree that my medical records on telehealth can be kept for
              further evaluation, analysis and documentation, and in all these,
              my information will be kept private.
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            style={styles.button1}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.signup}>Continue</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Conscent;

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  container: {
    flex: 1,
    color: COLORS.main,
    backgroundColor: COLORS.whiteColor,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 5,
  },
  icon_style: {
    flex: 0.45,
    padding: 20,
    marginTop: 30,
  },
  headerTitle: {
    marginTop: 50,
  },
  headerText1: {
    color: "black",
    textAlign: "center",
    fontSize: 28,
    textTransform: "uppercase",
  },
  signup: {
    backgroundColor: COLORS.blueBtn,
    color: "white",
    fontSize: 22,
    textAlign: "center",
    paddingVertical: 10,
    borderRadius: 10,
    // maxWidth: "60%",
  },
  button1: {
    marginBottom: 20,
    padding: 5,
    width: 200,
  },
  descContainer: {
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  descs: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  desc: {
    marginTop: 20,
    paddingRight: 20,
  },
  desc2: {
    marginTop: 20,
    marginRight: 5,
  },
});
