import React from "react";
import { Ionicons } from "@expo/vector-icons";

import colors from "../../constants/colors";

const HourglassIcon = props => (
  <Ionicons
    name="ios-hourglass"
    size={25}
    color={props.focused ? colors.moderatePink : colors.gray}
  />
);

export default HourglassIcon;
