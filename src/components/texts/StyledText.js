import React from "react";
import { StyleSheet, Text } from "react-native";

import colors from "../../constants/colors";

const StyledText = props => (
  <Text {...props} style={[styles.text, props.style]} />
);

export default StyledText;

const styles = StyleSheet.create({
  text: {
    color: colors.veryLightGray,
    fontFamily: "SpaceMono-Regular"
  }
});
