import React from "react";
import { TouchableNativeFeedback, View } from "react-native";

const PressableItem = props => (
  <TouchableNativeFeedback
    disabled={props.disabled}
    onPress={props.onPress}
    delayPressIn={0}
  >
    <View style={props.style}>{props.children}</View>
  </TouchableNativeFeedback>
);

export default PressableItem;
