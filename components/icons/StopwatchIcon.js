import React from "react";
import { Entypo } from "@expo/vector-icons";

import colors from "../../constants/colors";

const StopwatchIcon = props => (
  <Entypo
    name="stopwatch"
    size={28}
    color={props.focused ? colors.moderatePink : colors.gray}
  />
);

export default StopwatchIcon;
