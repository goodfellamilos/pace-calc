import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import PaceScreen from "../../screens/PaceScreen";
import TimeScreen from "../../screens/TimeScreen";
import ChartScreen from "../../screens/ChartScreen";
import StopwatchIcon from "../icons/StopwatchIcon";
import HourglassIcon from "../icons/HourglassIcon";
import TableIcon from "../icons/TableIcon";

import colors from "../../constants/colors";

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = "Calculate Pace and Speed";

const getHeaderTitle = route =>
  route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

export default function BottomTabNavigator({ navigation, route }) {
  navigation.setOptions({ headerTitle: getHeaderTitle(route) });

  return (
    <BottomTab.Navigator
      initialRouteName={INITIAL_ROUTE_NAME}
      tabBarOptions={{
        activeTintColor: colors.moderatePink,
        style: {
          backgroundColor: colors.veryDarkGray,
          height: 60,
          paddingTop: 10
        },
        labelStyle: {
          paddingVertical: 5
        }
      }}
    >
      <BottomTab.Screen
        name="Calculate Pace and Speed"
        component={PaceScreen}
        options={{
          title: "Pace / Speed",
          tabBarIcon: ({ focused }) => <StopwatchIcon focused={focused} />
        }}
      />
      <BottomTab.Screen
        name="Calculate Time"
        component={TimeScreen}
        options={{
          title: "Time",
          tabBarIcon: ({ focused }) => <HourglassIcon focused={focused} />
        }}
      />
      <BottomTab.Screen
        name="Running Pace Conversion Chart"
        component={ChartScreen}
        options={{
          title: "Chart",
          tabBarIcon: ({ focused }) => <TableIcon focused={focused} />
        }}
      />
    </BottomTab.Navigator>
  );
}
