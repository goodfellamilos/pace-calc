import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

import StyledText from "../components/texts/StyledText";
import StyledTextInput from "../components/inputs/StyledTextInput";
import Button from "../components/buttons/Button";

import {
  calculatePaceFromDistanceUnit,
  calculatePaceFromSpeed,
  calculateSpeedFromDistanceUnit,
  calculateTimeFromDistanceAndSpeedKm,
  getTotalTimeInSeconds,
  validateAndFormatResult,
  validateFloatInput,
  validateIntegerInput
} from "../helpers";
import {
  KM_IN_MILES,
  MILE_IN_KM,
  MIN_PER_KM_IN_KPH,
  MIN_PER_KM_IN_MPH,
  MIN_PER_MILE_IN_KPH,
  MIN_PER_MILE_IN_MPH
} from "../constants/units";
import colors from "../constants/colors";

const TimeScreen = () => {
  const [pacePerKmMinutes, setPacePerKmMinutes] = useState("");
  const [pacePerKmSeconds, setPacePerKmSeconds] = useState("");

  const [pacePerMileMinutes, setPacePerMileMinutes] = useState("");
  const [pacePerMileSeconds, setPacePerMileSeconds] = useState("");

  const [speedKPH, setSpeedKPH] = useState("");
  const [speedMPH, setSpeedMPH] = useState("");

  const [distanceInKm, setDistanceInKm] = useState("");
  const [distanceInMiles, setDistanceInMiles] = useState("");

  const [time, setTime] = useState("00:00:00");

  const onPacePerKmMinutesChange = input => {
    const minutes = validateIntegerInput(input);
    setPacePerKmMinutes(minutes);

    const totalTimeInSeconds = getTotalTimeInSeconds(
      0,
      minutes,
      pacePerKmSeconds
    );

    const pacePerMile = calculatePaceFromDistanceUnit(
      totalTimeInSeconds,
      MILE_IN_KM
    );

    setPacePerMileMinutes(pacePerMile[0]);
    setPacePerMileSeconds(pacePerMile[1]);

    const speedKPH = calculateSpeedFromDistanceUnit(
      totalTimeInSeconds,
      MIN_PER_KM_IN_KPH
    );
    const speedMPH = calculateSpeedFromDistanceUnit(
      totalTimeInSeconds,
      MIN_PER_KM_IN_MPH
    );

    setSpeedKPH(speedKPH);
    setSpeedMPH(speedMPH);
  };

  const onPacePerKmSecondsChange = input => {
    const seconds = validateIntegerInput(input);
    setPacePerKmSeconds(seconds);

    const totalTimeInSeconds = getTotalTimeInSeconds(
      0,
      pacePerKmMinutes,
      seconds
    );

    const pacePerMile = calculatePaceFromDistanceUnit(
      totalTimeInSeconds,
      MILE_IN_KM
    );

    setPacePerMileMinutes(pacePerMile[0]);
    setPacePerMileSeconds(pacePerMile[1]);

    const speedKPH = calculateSpeedFromDistanceUnit(
      totalTimeInSeconds,
      MIN_PER_KM_IN_KPH
    );
    const speedMPH = calculateSpeedFromDistanceUnit(
      totalTimeInSeconds,
      MIN_PER_KM_IN_MPH
    );

    setSpeedKPH(speedKPH);
    setSpeedMPH(speedMPH);
  };

  const onPacePerMileMinutesChange = input => {
    const minutes = validateIntegerInput(input);
    setPacePerMileMinutes(minutes);

    const totalTimeInSeconds = getTotalTimeInSeconds(
      0,
      minutes,
      pacePerMileSeconds
    );

    const pacePerKm = calculatePaceFromDistanceUnit(
      totalTimeInSeconds,
      KM_IN_MILES
    );

    setPacePerKmMinutes(pacePerKm[0]);
    setPacePerKmSeconds(pacePerKm[1]);

    const speedKPH = calculateSpeedFromDistanceUnit(
      totalTimeInSeconds,
      MIN_PER_MILE_IN_KPH
    );
    const speedMPH = calculateSpeedFromDistanceUnit(
      totalTimeInSeconds,
      MIN_PER_MILE_IN_MPH
    );

    setSpeedKPH(speedKPH);
    setSpeedMPH(speedMPH);
  };

  const onPacePerMileSecondsChange = input => {
    const seconds = validateIntegerInput(input);
    setPacePerMileSeconds(seconds);

    const totalTimeInSeconds = getTotalTimeInSeconds(
      0,
      pacePerMileMinutes,
      seconds
    );

    const pacePerKm = calculatePaceFromDistanceUnit(
      totalTimeInSeconds,
      KM_IN_MILES
    );

    setPacePerKmMinutes(pacePerKm[0]);
    setPacePerKmSeconds(pacePerKm[1]);

    const speedKPH = calculateSpeedFromDistanceUnit(
      totalTimeInSeconds,
      MIN_PER_MILE_IN_KPH
    );
    const speedMPH = calculateSpeedFromDistanceUnit(
      totalTimeInSeconds,
      MIN_PER_MILE_IN_MPH
    );

    setSpeedKPH(speedKPH);
    setSpeedMPH(speedMPH);
  };

  const onSpeedKPHChange = input => {
    const speedKPH = validateFloatInput(input);
    setSpeedKPH(speedKPH);

    const speedMPH = validateAndFormatResult(
      parseFloat(speedKPH) * KM_IN_MILES
    );
    setSpeedMPH(speedMPH);

    const pacePerKm = calculatePaceFromSpeed(speedKPH);
    const pacePerMile = calculatePaceFromSpeed(speedMPH);

    setPacePerKmMinutes(pacePerKm[0]);
    setPacePerKmSeconds(pacePerKm[1]);

    setPacePerMileMinutes(pacePerMile[0]);
    setPacePerMileSeconds(pacePerMile[1]);
  };

  const onSpeedMPHChange = input => {
    const speedMPH = validateFloatInput(input);
    setSpeedMPH(speedMPH);

    const speedKPH = validateAndFormatResult(parseFloat(speedMPH) * MILE_IN_KM);
    setSpeedKPH(speedKPH);

    const pacePerMile = calculatePaceFromSpeed(speedMPH);
    const pacePerKm = calculatePaceFromSpeed(speedKPH);

    setPacePerMileMinutes(pacePerMile[0]);
    setPacePerMileSeconds(pacePerMile[1]);

    setPacePerKmMinutes(pacePerKm[0]);
    setPacePerKmSeconds(pacePerKm[1]);
  };

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

  const onCalcPress = () => {
    const time = calculateTimeFromDistanceAndSpeedKm(distanceInKm, speedKPH);
    setTime(time);
  };

  const buttonDisabled =
    !(parseFloat(distanceInKm) || parseFloat(distanceInMiles)) ||
    (!parseInt(pacePerKmMinutes) &&
      !parseInt(pacePerKmSeconds) &&
      !parseInt(pacePerMileMinutes) &&
      !parseInt(pacePerMileSeconds) &&
      !parseFloat(speedKPH) &&
      !parseFloat(speedMPH));

  return (
    <View style={styles.container}>
      <View>
        <StyledText style={styles.title}>PACE</StyledText>
        <View style={styles.sectionContainer}>
          <View>
            <View style={styles.inputContainer}>
              <StyledTextInput
                keyboardType="numeric"
                maxLength={2}
                value={pacePerKmMinutes}
                onChangeText={onPacePerKmMinutesChange}
              />
              <StyledText style={[styles.inputLabel, styles.colonLabel]}>
                :
              </StyledText>
              <StyledTextInput
                keyboardType="numeric"
                maxLength={2}
                value={pacePerKmSeconds}
                onChangeText={onPacePerKmSecondsChange}
              />
            </View>
            <StyledText style={[styles.inputLabel, styles.paceLabel]}>
              min/km
            </StyledText>
          </View>
          <View>
            <View style={styles.inputContainer}>
              <StyledTextInput
                keyboardType="numeric"
                maxLength={2}
                value={pacePerMileMinutes}
                onChangeText={onPacePerMileMinutesChange}
              />
              <StyledText style={[styles.inputLabel, styles.colonLabel]}>
                :
              </StyledText>
              <StyledTextInput
                keyboardType="numeric"
                maxLength={2}
                value={pacePerMileSeconds}
                onChangeText={onPacePerMileSecondsChange}
              />
            </View>
            <StyledText style={[styles.inputLabel, styles.paceLabel]}>
              min/mile
            </StyledText>
          </View>
        </View>
        <StyledText style={styles.title}>SPEED</StyledText>
        <View style={styles.sectionContainer}>
          <View style={styles.inputContainer}>
            <StyledTextInput
              style={styles.speedInput}
              keyboardType="numeric"
              maxLength={5}
              value={speedKPH}
              onChangeText={onSpeedKPHChange}
            />
            <StyledText style={styles.inputLabel}>km/h</StyledText>
          </View>
          <View style={styles.inputContainer}>
            <StyledTextInput
              style={styles.speedInput}
              keyboardType="numeric"
              maxLength={5}
              value={speedMPH}
              onChangeText={onSpeedMPHChange}
            />
            <StyledText style={styles.inputLabel}>mph</StyledText>
          </View>
        </View>
        <StyledText style={styles.title}>DISTANCE</StyledText>
        <View style={styles.sectionContainer}>
          <View style={styles.inputContainer}>
            <StyledTextInput
              style={styles.distanceInput}
              maxLength={6}
              keyboardType="numeric"
              value={distanceInKm}
              onChangeText={onDistanceKmChange}
            />
            <StyledText style={styles.inputLabel}>km</StyledText>
          </View>
          <View style={styles.inputContainer}>
            <StyledTextInput
              style={styles.distanceInput}
              maxLength={5}
              keyboardType="numeric"
              value={distanceInMiles}
              onChangeText={onDistanceMilesChange}
            />
            <StyledText style={styles.inputLabel}>miles</StyledText>
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
        <StyledText style={styles.title}>TIME</StyledText>
        <StyledText style={styles.result}>{time}</StyledText>
      </View>
    </View>
  );
};

export default TimeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.mostlyBlack,
    justifyContent: "space-between",
    padding: 20
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
  speedInput: {
    width: 70
  },
  distanceInput: {
    width: 90
  },
  inputLabel: {
    marginLeft: 6
  },
  paceLabel: {
    marginTop: 5,
    textAlign: "center"
  },
  colonLabel: {
    marginRight: 6
  },
  result: {
    fontFamily: "SpaceMono-Bold",
    fontSize: 32,
    textAlign: "center"
  }
});
