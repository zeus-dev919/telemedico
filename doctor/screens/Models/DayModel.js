import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { COLORS } from "../../constants";

const DayModel = (props) => {
  const { day, month, isSelected, bg } = props;
  var check = true;
  if (bg === "1") check = false;
  console.log(check);
  return (
    <TouchableOpacity onPress={console.log("Clicked")}>
      {isSelected ? (
        <View style={styles.iconContainer1}>
          <Text style={styles.text2}>{month}</Text>
          <Text style={styles.text1}>{day}</Text>
        </View>
      ) : (
        <>
          {!check ? (
            <View style={[styles.iconContainerSPlus, styles.shadowPlus]}>
              <Text style={styles.text2S}>{month}</Text>
              <Text style={styles.text1S}>{day}</Text>
            </View>
          ) : (
            <View style={[styles.iconContainerS, styles.shadow]}>
              <Text style={styles.text2S}>{month}</Text>
              <Text style={styles.text1S}>{day}</Text>
            </View>
          )}
        </>
      )}
    </TouchableOpacity>
  );
};

export default DayModel;

const styles = StyleSheet.create({
  iconContainer1: {
    backgroundColor: "transparent",
    marginHorizontal: 10,
    borderRadius: 50,
    padding: 0,
    marginHorizontal: 10,
    alignItems: "center",
  },
  text1: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 5,
    color: COLORS.fontColor2,
  },
  text2: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
  },
  iconContainerS: {
    backgroundColor: "#2758E4",
    marginHorizontal: 10,
    borderRadius: 50,
    paddingVertical: 15,
    marginHorizontal: 10,
    alignItems: "center",
    height: 80,
    width: 45,
  },
  iconContainerSPlus: {
    backgroundColor: "#f9b664",
    marginHorizontal: 10,
    borderRadius: 50,
    paddingVertical: 15,
    marginHorizontal: 10,
    alignItems: "center",
    height: 80,
    width: 45,
  },
  text1S: {
    fontSize: 16,
    fontWeight: "bold",
    marginVertical: 5,
    color: "white",
  },
  text2S: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
  shadow: {
    // Shadow Start
    shadowColor: COLORS.fontColor5,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0,
    shadowRadius: 18,

    elevation: 18,
    // Shadow End
  },
  shadowPlus: {
    // Shadow Start
    shadowColor: "#f9b664",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0,
    shadowRadius: 18,

    elevation: 18,
    // Shadow End
  },
});
