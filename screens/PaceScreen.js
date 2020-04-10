import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

import StyledText from "../components/texts/StyledText";
import StyledTextInput from "../components/inputs/StyledTextInput";
import Button from "../components/buttons/Button";

import {
  calculatePaceFromDistance,
  formatResult,
  getTotalTimeInSeconds,
  validateAndFormatResult,
  validateFloatInput,
  validateIntegerInput
} from "../helpers";
import { KM_IN_MILES, MILE_IN_KM, HOUR_IN_SECONDS } from "../constants/units";
import colors from "../constants/colors";

const PaceScreen = () => {
  const [distanceInKm, setDistanceInKm] = useState("");
  const [distanceInMiles, setDistanceInMiles] = useState("");

  const [hours, setHours] = useState("");
  const [minutes, setMinutes] = useState("");
  const [seconds, setSeconds] = useState("");

  const [pacePerKm, setPacePerKm] = useState("00:00");
  const [pacePerMile, setPacePerMile] = useState("00:00");

  const [speedKPH, setSpeedKPH] = useState("00.00");
  const [speedMPH, setSpeedMPH] = useState("00.00");

  const onDistanceKmChange = input => {
    const distanceInKm = validateFloatInput(input);
    setDistanceInKm(distanceInKm);

    const distanceInMiles = validateAndFormatResult(
      parseFloat(distanceInKm) * KM_IN_MILES
    );
    setDistanceInMiles(distanceInMiles);
  };

  const onDistanceMilesChange = input => {
    const distanceInMiles = validateFloatInput(input);
    setDistanceInMiles(distanceInMiles);

    const distanceInKm = validateAndFormatResult(
      parseFloat(distanceInMiles) * MILE_IN_KM
    );
    setDistanceInKm(distanceInKm);
  };

  const onHoursChange = input => {
    const hours = validateIntegerInput(input);
    setHours(hours);
  };

  const onMinutesChange = input => {
    const minutes = validateIntegerInput(input);
    setMinutes(minutes);
  };

  const onSecondsChange = input => {
    const seconds = validateIntegerInput(input);
    setSeconds(seconds);
  };

  const onCalcPress = () => {
    if (!hours) {
      setHours("00");
    }

    if (!minutes) {
      setMinutes("00");
    }

    if (!seconds) {
      setSeconds("00");
    }

    const totalTimeInSeconds = getTotalTimeInSeconds(hours, minutes, seconds);

    const pacePerKm = calculatePaceFromDistance(
      totalTimeInSeconds,
      distanceInKm
    );
    const pacePerMile = calculatePaceFromDistance(
      totalTimeInSeconds,
      distanceInMiles
    );

    const totalTimeInHours = totalTimeInSeconds / HOUR_IN_SECONDS;

    const speedKPH = formatResult(distanceInKm / totalTimeInHours);
    const speedMPH = formatResult(distanceInMiles / totalTimeInHours);

    setPacePerKm(pacePerKm);
    setPacePerMile(pacePerMile);

    setSpeedKPH(speedKPH);
    setSpeedMPH(speedMPH);
  };

  const buttonDisabled =
    !(parseFloat(distanceInKm) || parseFloat(distanceInMiles)) ||
    !(parseInt(hours) || parseInt(minutes) || parseInt(seconds));

  return (
    <View style={styles.container}>
      <View>
        <StyledText style={styles.title}>DISTANCE</StyledText>
        <View style={styles.sectionContainer}>
          <View style={styles.inputContainer}>
            <StyledTextInput
              style={styles.distanceInput}
              keyboardType="numeric"
              maxLength={6}
              value={distanceInKm}
              onChangeText={onDistanceKmChange}
            />
            <StyledText style={styles.inputLabel}>km</StyledText>
          </View>
          <View style={styles.inputContainer}>
            <StyledTextInput
              style={styles.distanceInput}
              keyboardType="numeric"
              maxLength={5}
              value={distanceInMiles}
              onChangeText={onDistanceMilesChange}
            />
            <StyledText style={styles.inputLabel}>miles</StyledText>
          </View>
        </View>
        <StyledText style={styles.title}>TIME</StyledText>
        <View style={styles.sectionContainer}>
          <View style={styles.inputContainer}>
            <StyledTextInput
              keyboardType="numeric"
              maxLength={2}
              value={hours}
              onChangeText={onHoursChange}
            />
            <StyledText style={styles.inputLabel}>h</StyledText>
          </View>
          <View style={styles.inputContainer}>
            <StyledTextInput
              keyboardType="numeric"
              maxLength={2}
              value={minutes}
              onChangeText={onMinutesChange}
            />
            <StyledText style={styles.inputLabel}>min</StyledText>
          </View>
          <View style={styles.inputContainer}>
            <StyledTextInput
              keyboardType="numeric"
              maxLength={2}
              value={seconds}
              onChangeText={onSecondsChange}
            />
            <StyledText style={styles.inputLabel}>sec</StyledText>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <Button
            text="CALCULATE"
            disabled={buttonDisabled}
            onPress={onCalcPress}
          />
        </View>
      </View>
      <View>
        <StyledText style={styles.title}>PACE</StyledText>
        <View style={styles.sectionContainer}>
          <View>
            <View style={styles.inputContainer}>
              <StyledText style={styles.result}>{pacePerKm}</StyledText>
            </View>
            <StyledText style={styles.resultLabel}>min/km</StyledText>
          </View>
          <View>
            <View style={styles.inputContainer}>
              <StyledText style={styles.result}>{pacePerMile}</StyledText>
            </View>
            <StyledText style={styles.resultLabel}>min/mile</StyledText>
          </View>
        </View>
        <StyledText style={styles.title}>SPEED</StyledText>
        <View style={styles.sectionContainer}>
          <View>
            <View style={styles.inputContainer}>
              <StyledText style={styles.result}>{speedKPH}</StyledText>
            </View>
            <StyledText style={styles.resultLabel}>km/h</StyledText>
          </View>
          <View>
            <View style={styles.inputContainer}>
              <StyledText style={styles.result}>{speedMPH}</StyledText>
            </View>
            <StyledText style={styles.resultLabel}>mph</StyledText>
          </View>
        </View>
      </View>
    </View>
  );
};

export default PaceScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.mostlyBlack,
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingTop: 20
  },
  sectionContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginBottom: 20
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center"
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20
  },
  title: {
    marginBottom: 20,
    textAlign: "center"
  },
  distanceInput: {
    width: 90
  },
  inputLabel: {
    marginLeft: 6
  },
  result: {
    fontFamily: "space-mono-bold",
    fontSize: 32,
    marginRight: 5
  },
  resultLabel: {
    textAlign: "center"
  }
});
