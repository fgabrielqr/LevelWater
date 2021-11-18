import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Home } from "../pages/Home";

const AppStack = createStackNavigator();

const AppRoutes: React.FC = () => (
  <AppStack.Navigator
    headerMode="none"
    screenOptions={{ cardStyle: { backgroundColor: "transparent" } }}
  >
    <AppStack.Screen name="SingIn" component={Home} />
  </AppStack.Navigator>
);

export default AppRoutes;
