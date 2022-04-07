import React from 'react';
import {
    View,
    ScrollView,
    Text,
    Button,
} from 'react-native';
import ScreenTemplate from "../screenTemplate";

export default function PickTime({route, navigation}) {
    const {date} = route.params
    return (
        <ScreenTemplate>
            <View
                style={{
                    height: 50,
                    backgroundColor:'white',
                    justifyContent:'center',
                    borderBottomWidth:2,
                    borderColor:'black',
                    borderStyle:'dashed'
                }}>
                <Text>Pick time</Text>
            </View>
        </ScreenTemplate>
    )
}