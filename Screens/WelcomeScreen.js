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
        onPress={() => navigation.navigate('RoomReservationStack')}
      />
      <Button
        title="ARTour"
        color="#601c8c"
        onPress={() => navigation.navigate('ARVision')}
      />
      <Text onPress={() => console.log('Hi')}>Debug Code!</Text>
    </ScreenTemplate>
  );
}

export default WelcomeScreen;
