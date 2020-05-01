import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";

import colors from "../../constants/colors";

const TableIcon = props => (
  <Icon
    name="table"
    size={25}
    color={props.focused ? colors.moderatePink : colors.gray}
  />
);

export default TableIcon;
