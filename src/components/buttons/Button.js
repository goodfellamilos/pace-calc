import React from "react";
import { Keyboard, StyleSheet } from "react-native";

import StyledText from "../texts/StyledText";
import PressableItem from "./PressableItem";

import colors from "../../constants/colors";

const Button = props => (
  <PressableItem
    style={[styles.button, props.disabled && styles.disabled]}
    disabled={props.disabled}
    onPress={() => {
      Keyboard.dismiss();
      props.onPress();
    }}
  >
    <StyledText style={styles.text}>{props.text}</StyledText>
  </PressableItem>
);

export default Button;

const styles = StyleSheet.create({
  button: {
    color: colors.veryLightGray,
    borderRadius: 4,
    backgroundColor: colors.moderatePink,
    padding: 10,
    width: 150
  },
  disabled: {
    opacity: 0.7
  },
  text: {
    fontFamily: "SpaceMono-Bold",
    textAlign: "center"
  }
});
