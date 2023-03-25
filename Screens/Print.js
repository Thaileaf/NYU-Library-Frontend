import React from 'react';
import {Alert, Button, Text, View} from 'react-native';
import ScreenTemplate from './screenTemplate';

function Print({navigation}) {
    return (
        <ScreenTemplate>
            <Text onPress={() => console.log('This will be the print service.')}>This is the print service.</Text>
            <Text onPress={() => console.log('Hi')}>Debug Code!</Text>
        </ScreenTemplate>
    );
}

export default Print;
