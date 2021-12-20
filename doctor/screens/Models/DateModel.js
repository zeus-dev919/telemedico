import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { COLORS } from "../../constants";
import DayModel from "./DayModel";

const DateModel = (props) => {
    const { date } = props;
    const dateForm1 = () => {
        return 'December, 2021'
    }
    const [selectedDate, setselectedDate] = useState(true)
  return (
    <View style={[styles.card, styles.shadow1]}>
      <Text style={styles.cardTitle1}>{dateForm1()}</Text>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={styles.icons}>
          {/* Week */}
          <DayModel day="MON" monthnb="9" isSelected={selectedDate} />
          <DayModel day="TUE" monthnb="10" isSelected={selectedDate} />
          <DayModel day="WED" monthnb="11" isSelected={!selectedDate} />
          <DayModel day="THU" monthnb="12" isSelected={selectedDate} />
          <DayModel day="FRI" monthnb="13" isSelected={selectedDate} />
          <DayModel day="SAT" monthnb="14" isSelected={selectedDate} />
          {/* Week */}
          <DayModel day="MON" monthnb="16" isSelected={selectedDate} />
          <DayModel day="TUE" monthnb="17" isSelected={selectedDate} />
          <DayModel day="WED" monthnb="18" isSelected={selectedDate} />
          <DayModel day="THU" monthnb="19" isSelected={selectedDate} />
          <DayModel day="FRI" monthnb="20" isSelected={selectedDate} />
          <DayModel day="SAT" monthnb="21" isSelected={selectedDate} />
          {/* Week */}
          <DayModel day="MON" monthnb="23" isSelected={selectedDate} />
          <DayModel day="TUE" monthnb="24" isSelected={selectedDate} />
          <DayModel day="WED" monthnb="25" isSelected={selectedDate} />
          <DayModel day="THU" monthnb="26" isSelected={selectedDate} />
          <DayModel day="FRI" monthnb="27" isSelected={selectedDate} />
          <DayModel day="SAT" monthnb="28" isSelected={selectedDate} />
          {/* Week */}
          <DayModel day="MON" monthnb="30" isSelected={selectedDate} />
          <DayModel day="TUE" monthnb="31" isSelected={selectedDate} />
          <DayModel day="WED" monthnb="1" isSelected={selectedDate} />
          <DayModel day="THU" monthnb="2" isSelected={selectedDate} />
          <DayModel day="FRI" monthnb="3" isSelected={selectedDate} />
          <DayModel day="SAT" monthnb="4" isSelected={selectedDate} />
        </View>
      </ScrollView>
    </View>
  );
};

export default DateModel;

const styles = StyleSheet.create({
    // Card
  card: {
    borderRadius: 25,
    backgroundColor: COLORS.bgColor2,
    paddingHorizontal: 20,
    paddingVertical: 30,
    margin: 10,
  },
  cardTitle1: {
    color: COLORS.fontColor4,
    fontSize: 22,
    fontWeight: "bold",
    marginLeft: 10,
    margin: 0,
    lineHeight: 29,
  },
  shadow1: {
    shadowColor: "#cdcddd",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0,
    shadowRadius: 8,

    elevation: 2,
  },
  icons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
});
