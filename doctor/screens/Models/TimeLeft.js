import React, { useState } from "react";
import { CountdownCircleTimer } from "react-native-countdown-circle-timer";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { COLORS } from "../../constants";

const TimeLeft = (props) => {
  const { date, RTCToken, channelName, navigation } = props;
  console.log("Date from Time Left =>", date);
  const [check, setCheck] = useState(false);
  const minuteSeconds = 60;
  const hourSeconds = 3600;
  const daySeconds = 86400;

  const timerProps = {
    isPlaying: true,
    size: 100,
    strokeWidth: 6,
    strokeLinecap: "round",
    isLinearGradient: true,
  };
  const getTimeSeconds = (time) => (minuteSeconds - time) | 0;
  const getTimeMinutes = (time) => ((time % hourSeconds) / minuteSeconds) | 0;
  const getTimeHours = (time) => ((time % daySeconds) / hourSeconds) | 0;
  const getTimeDays = (time) => (time / daySeconds) | 0;
  const stratTime = Date.now() / 1000; // use UNIX timestamp in seconds
  const endTime = stratTime + parseInt(date); // use UNIX timestamp in seconds

  const remainingTime = endTime - stratTime;
  const days = Math.ceil(remainingTime / daySeconds);
  const daysDuration = days * daySeconds;

  const renderTime = (dimension, time) => {
    return (
      <View style={styles.timeContainer}>
        <Text style={styles.time}>{time}</Text>
        <Text style={styles.dimension}>{dimension}</Text>
      </View>
    );
  };

  const handleJoin = () => {
    navigation.navigate("call", {RTCToken: RTCToken, channelName: channelName,});
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.line1}>
          <View style={styles.countContainer}>
            <CountdownCircleTimer
              {...timerProps}
              colors={[["#7d8aff"]]}
              duration={daysDuration}
              initialRemainingTime={remainingTime}
            >
              {({ elapsedTime }) =>
                renderTime("days", getTimeDays(daysDuration - elapsedTime))
              }
            </CountdownCircleTimer>
          </View>
          <View style={styles.countContainer}>
            <CountdownCircleTimer
              {...timerProps}
              colors={[["#ffdc40"]]}
              duration={hourSeconds}
              initialRemainingTime={remainingTime % hourSeconds}
              onComplete={(totalElapsedTime) => [
                remainingTime - totalElapsedTime > minuteSeconds,
              ]}
            >
              {({ elapsedTime }) =>
                renderTime("minutes", getTimeMinutes(hourSeconds - elapsedTime))
              }
            </CountdownCircleTimer>
          </View>
        </View>
        <View style={styles.line2}>
          <View style={styles.countContainer}>
            <CountdownCircleTimer
              {...timerProps}
              colors={[["#ffab15"]]}
              duration={daySeconds}
              initialRemainingTime={remainingTime % daySeconds}
              onComplete={(totalElapsedTime) => [
                remainingTime - totalElapsedTime > hourSeconds,
              ]}
            >
              {({ elapsedTime }) =>
                renderTime("hours", getTimeHours(daySeconds - elapsedTime))
              }
            </CountdownCircleTimer>
          </View>
          <View style={styles.countContainer}>
            <CountdownCircleTimer
              {...timerProps}
              colors={[["#6e76e5"]]}
              duration={minuteSeconds}
              initialRemainingTime={remainingTime % minuteSeconds}
              onComplete={(totalElapsedTime) => {
                if (!(remainingTime - totalElapsedTime > 0)) setCheck(true);
                return [remainingTime - totalElapsedTime > 0];
              }}
            >
              {({ elapsedTime }) =>
                renderTime("seconds", getTimeSeconds(elapsedTime))
              }
            </CountdownCircleTimer>
          </View>
        </View>
      </View>
      <TouchableOpacity
        style={[styles.button1, !check ? styles.signup1 : styles.signup]}
        onPress={handleJoin}
        disabled={!check}
      >
        <Text style={styles.signupText}>Join</Text>
      </TouchableOpacity>
    </>
  );
};
export default TimeLeft;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    textAlign: "center",
  },
  countContainer: {
    padding: 20,
  },
  timeContainer: {
    padding: 10,
    alignItems: "center",
  },
  time: {
    fontSize: 26,
    fontWeight: "bold",
  },
  dimension: {
    fontSize: 12,
  },
  // Btn
  button1: {
    width: "100%",
    marginVertical: 15,
    padding: 5,
  },
  signup: {
    backgroundColor: COLORS.blueBtn,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderRadius: 10,
    marginVertical: 20,
    paddingHorizontal: 20,
  },
  signup1: {
    backgroundColor: COLORS.darkgray,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderRadius: 10,
    marginVertical: 20,
    paddingHorizontal: 20,
  },
  signupText: {
    color: "white",
    fontSize: 22,
    textAlign: "center",
    paddingVertical: 15,
  },
});
