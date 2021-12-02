import React from 'react';
import {View, Text} from 'react-native';
import styles from '../styles/General';

export default function RoomObject(props) {
  return (
    <View style={styles.RoomObject}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{color: 'black'}}>{props.room.name}</Text>
      </View>
      <View
        style={{
          backgroundColor:
            props.room.availableSlots > 0 ? 'lightgreen' : 'lightcoral',
          flex: 4,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>{props.room.availableSlots}/20</Text>
      </View>
    </View>
  );
}
