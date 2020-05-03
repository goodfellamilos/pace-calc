import "react-native-gesture-handler";

import React from "react";
import { Platform, StatusBar, StyleSheet, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import BottomTabNavigator from "../components/navigation/BottomTabNavigator";
import colors from "../constants/colors";

const Stack = createStackNavigator();

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {Platform.OS === "ios" && <StatusBar barStyle="light-content" />}
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            options={{
              headerStyle: {
                backgroundColor: colors.veryDarkGray
              },
              headerTintColor: colors.moderatePink,
              headerTitleStyle: {
                fontFamily: "SpaceMono-Bold",
                fontSize: 18
              }
            }}
            component={BottomTabNavigator}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.veryDarkGray
  }
});