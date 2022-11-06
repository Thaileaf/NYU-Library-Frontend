import 'react-native-gesture-handler';
import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";
import { WelcomeScreen, Services, About, ReserveScreen, ARVision, PickTime } from "./index";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import RoomReservationStack from "./ScreenStacks/RoomReservationStack";
import Icon from "react-native-vector-icons/AntDesign";

const Tab = createBottomTabNavigator();


const screenOptions = (route, color) => {
    let iconName;

    switch (route.name) {
        case 'Home':
            iconName = 'home';
            break;
        case 'Browse':
            iconName = 'appstore-o';
            break;
        case 'Library':
            iconName = 'folder1';
            break;
        default:
            break;
    }

    return <Icon name={iconName} color={color} size={24} />;
};

export default function App() {

  const stackDefault = { headerShown: false };
  return (
    <NavigationContainer>
      {/* Screens are inserted here. Make sure your
      screen name is the same as the one you're navigating to*/}
      {/* Need to automate many screens */}
      {/*<Stack.Navigator>*/}
      {/*  <Stack.Screen*/}
      {/*    name={"Welcome Screen"}*/}
      {/*    component={WelcomeScreen}*/}
      {/*    options={stackDefault}*/}
      {/*  />*/}
      {/*  <Stack.Screen*/}
      {/*    name={"About"}*/}
      {/*    component={About}*/}
      {/*    options={stackDefault}*/}
      {/*  />*/}
      {/*  <Stack.Screen*/}
      {/*    name={"Services"}*/}
      {/*    component={Services}*/}
      {/*    options={stackDefault}*/}
      {/*  />*/}
      {/*  <Stack.Screen*/}
      {/*    name={"RoomReservation"}*/}
      {/*    component={ReserveScreen}*/}
      {/*    options={stackDefault}*/}
      {/*  />*/}
      {/*  <Stack.Screen*/}
      {/*    name={"ARVision"}*/}
      {/*    component={ARVision}*/}
      {/*    options={stackDefault}*/}
      {/*  />*/}
      {/*  <Stack.Screen*/}
      {/*      name={"PickTime"}*/}
      {/*      component={PickTime}*/}
      {/*      options={stackDefault}*/}
      {/*  />*/}
      {/*</Stack.Navigator>*/}
      <Tab.Navigator // TODO Understand THis!!!
          screenOptions={
              ({route}) => ({
                    tabBarIcon: ({color}) => screenOptions(route, color),
                })
          }>
        <Tab.Screen name={"Welcome Screen"} component={WelcomeScreen} />
        <Tab.Screen name={"About"} component={About} />
        <Tab.Screen name={"Services"} component={Services} />
        <Tab.Screen name={"RoomReservationStack"} component={RoomReservationStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}




