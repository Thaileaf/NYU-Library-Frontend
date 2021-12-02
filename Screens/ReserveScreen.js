import React from 'react';
import {
  View,
  ScrollView,
  Text
} from 'react-native';
import ScreenTemplate from "./screenTemplate";
import RoomObject from "./components/RoomObject";


const Rooms = {
  room1: { name: 'RHS349',  availableSlots: 2},
  room2: { name: 'RHS350',  availableSlots: 0},
  room3: { name: 'RHS349',  availableSlots: 1},
  room4: { name: 'RHS349',  availableSlots: 20},
}

export default function ReserveScreen() {
  return(
    <ScreenTemplate>
      <ScrollView>
        <View
          style={{
            height: 50,
            backgroundColor:'white',
            justifyContent:'center',
            borderBottomWidth:2,
            borderColor:'black',
            borderStyle:'dashed'
          }}>
          <Text>Pick date</Text>
        </View>
        <RoomObject room={Rooms.room1}/>
        <RoomObject room={Rooms.room2}/>
        <RoomObject room={Rooms.room3}/>
        <RoomObject room={Rooms.room4}/>
        <RoomObject room={Rooms.room4}/>
        <RoomObject room={Rooms.room4}/>
        <RoomObject room={Rooms.room4}/>
        <RoomObject room={Rooms.room4}/>
      </ScrollView>
    </ScreenTemplate>
  )
}
