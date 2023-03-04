import React from 'react';
import {Alert, Button, Text, View} from 'react-native';
import ScreenTemplate from './screenTemplate';
import WelcomeButton from "./components/welcomeComponent/WelcomeButton";

function WelcomeScreen({navigation}) {
  return (
    <ScreenTemplate>
    <WelcomeButton/>
    </ScreenTemplate>
      // Random sttuff
  );
}

export default WelcomeScreen;
