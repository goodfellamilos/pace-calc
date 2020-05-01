import React from "react";
import Icon from "react-native-vector-icons/Entypo";

import colors from "../../constants/colors";

const StopwatchIcon = props => (
  <Icon
    name="stopwatch"
    size={25}
    color={props.focused ? colors.moderatePink : colors.gray}
  />
);

export default StopwatchIcon;
