import React from "react";
import Icon from "react-native-vector-icons/Ionicons";

import colors from "../../constants/colors";

const HourglassIcon = props => (
  <Icon
    name="ios-hourglass"
    size={25}
    color={props.focused ? colors.moderatePink : colors.gray}
  />
);

export default HourglassIcon;
