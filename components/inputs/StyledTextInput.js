import React from "react";
import { StyleSheet, TextInput } from "react-native";

import colors from "../../constants/colors";

const StyledTextInput = props => (
  <TextInput {...props} style={[styles.textInput, props.style]} />
);

export default StyledTextInput;

const styles = StyleSheet.create({
  textInput: {
    borderColor: colors.veryLightGray,
    borderRadius: 4,
    borderWidth: 1,
    color: colors.veryLightGray,
    fontFamily: "SpaceMono-Regular",
    padding: 10,
    textAlign: "center",
    width: 50
  }
});
