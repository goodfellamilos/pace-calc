import React from "react";
import { FontAwesome } from "@expo/vector-icons";

import colors from "../../constants/colors";

const TableIcon = props => (
  <FontAwesome
    name="table"
    size={28}
    color={props.focused ? colors.moderatePink : colors.gray}
  />
);

export default TableIcon;
