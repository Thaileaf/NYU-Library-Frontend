import 'react-native-gesture-handler';
import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";
import { WelcomeScreen, Services, About, ReserveScreen } from "./index";

const Stack = createStackNavigator();


export default function App() {

  const stackDefault = { headerShown: false };
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={"Welcome Screen"}
          component={WelcomeScreen}
          options={stackDefault}
        />
        <Stack.Screen
          name={"About"}
          component={About}
          options={stackDefault}
        />
        <Stack.Screen
          name={"Services"}
          component={Services}
          options={stackDefault}
        />
        <Stack.Screen
          name={"RoomReservation"}
          component={ReserveScreen}
          options={stackDefault}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}




