
import React from 'react';
// import {
//     StyleSheet
// } from 'react-native';
import ReserveScreen from "../Screens/Reserve Screen/ReserveScreen";
import { createStackNavigator } from "@react-navigation/stack";
import PickTime from "../Screens/Reserve Screen/PickTime";


const RoomStack = createStackNavigator();
export default function RoomReservationStack() {

    return(
        <RoomStack.Navigator>
            <RoomStack.Screen name={"ReserveScreen"} component={ReserveScreen}/>
            <RoomStack.Screen name={"PickTime"} component={PickTime}/>
        </RoomStack.Navigator>

    );
}
