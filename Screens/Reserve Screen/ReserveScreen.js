import React, {useState} from 'react';
import {
  View,
  ScrollView,
  Text,
    Button,
} from 'react-native';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars'
import ScreenTemplate from "../screenTemplate";
import RoomObject from "../components/RoomObject";


const month = { // test month
    "2022-04-04": {
        room1: {name: 'RHS349', availableSlots: 2},
        room2: {name: 'RHS350', availableSlots: 0},
        room3: {name: 'RHS349', availableSlots: 1},
        room4: {name: 'RHS349', availableSlots: 20},
    },
    "2022-04-05" : {
        room1: {name: 'RHS349', availableSlots: 20},
        room2: {name: 'RHS350', availableSlots: 20},
        room3: {name: 'RHS349', availableSlots: 20},
        room4: {name: 'RHS349', availableSlots: 20},
    },
    "2022-04-06" : {
        room1: {name: 'RHS349', availableSlots: 0},
        room2: {name: 'RHS350', availableSlots: 0},
        room3: {name: 'RHS349', availableSlots: 0},
        room4: {name: 'RHS349', availableSlots: 0},
    },
}

// Returns an object that contains the
// amount of days available per room
function getDayCount(month) {

    // Formats all days so its { "YYYY-MM-DD" : Num of available rooms}
    for (let day of Object.entries(month)) {
        month[day[0]] = Object.values(day[1]).reduce(
            (prev, curr) => prev + curr.availableSlots, 0
        )
    }

    // Labels all days corresponding to fullness.
    for (let date of Object.keys(month)) {
        console.log(month[date])
        if (month[date] === 0) {
            month[date] = {startingDay: true, color: '#eb344c', endingDay: true, opacity: 0}
        }
        else if (month[date] < TOTAL * .2) {
            month[date] = {startingDay: true, color: '#e67f2c', endingDay: true}
        }
        else if (month[date] >= TOTAL * .2 && month[date] < TOTAL * .8) {
            month[date] = {startingDay: true, color: '#f7e731', endingDay: true}
        }
        else {
            month[date] = {startingDay: true, color: '#71eb34', endingDay: true, opacity: 0}
        }
    }
    return month
}
const TOTAL = 80 // Total amount of rooms per day

let markedDatesVar = {
    "2022-04-06": {
        color: "red",
        endingDay: true,
        startingDay: true,
    },
}

export default function ReserveScreen({navigation}) {
    const [data, setData] = useState({})
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
          <Calendar markingType={'period'}
                    markedDates={data}
                    onDayPress={day => {
                        navigation.navigate("PickTime", {
                            day: day
                        })
                    }}
          />
          <Button onPress={ () => {
              setData(getDayCount(month))
              console.log("hi")
          }} title={"Refresh days"} color={"#841584"}/>
        
      </ScrollView>
    </ScreenTemplate>
  )
}
