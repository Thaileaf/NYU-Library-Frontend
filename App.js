import 'react-native-gesture-handler';
import React from 'react';
import {
} from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import WelcomeScreen from "./WelcomeScreen";
import About from "./About";

const Stack = createStackNavigator();


export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={"Test"}
          component={WelcomeScreen}
          options={{ headerShown:false }}
        />
        <Stack.Screen
          name={"About"}
          component={About}
          options={{ headerShown:false }}
        />
        <Stack.Screen
          name={"Services"}
          component={WelcomeScreen}
          options={{ headerShown:false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}




