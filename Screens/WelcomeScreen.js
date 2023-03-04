import React from 'react';
import {Alert, Button, Text, View} from 'react-native';
import ScreenTemplate from './screenTemplate';

function WelcomeScreen({navigation}) {
  return (
    <ScreenTemplate>
      <Button
        title="About"
        color="#601c8c"
        onPress={
          () => navigation.navigate('About')
          // Alert.alert('My Title', 'My message', [
          //   {text: 'Yes', onPress: () => console.log('Yes')},
          //   {text: 'No', onPress: () => console.log('No')},
          // ])
        }
      />
      <Button
        title="Services"
        color="#601c8c"
        onPress={() =>
          Alert.alert('My Title', 'My Message', [
            {text: 'Got it', onPress: () => navigation.navigate('Services')},
          ])
        }
      />
      <Button
        title="Search Library Resources"
        color="#601c8c"
        onPress={() => navigation.navigate('Resources')}
      />
      <Button
        title="Reservable Study Spaces"
        color="#601c8c"
        onPress={() => navigation.navigate('RoomReservation')}
      />
      <Button
        title="ARTour"
        color="#601c8c"
        onPress={() => navigation.navigate('ARVision')}
      />
        <Button
            title = "Printer"
            color = "#601c8c"
            onPress = {() => navigation.navigate('Print Service')} // printer button does not navigate to a page at the moment
        />
      <Text onPress={() => console.log('Hi')}></Text>
    </ScreenTemplate>
  );
}

export default WelcomeScreen;
