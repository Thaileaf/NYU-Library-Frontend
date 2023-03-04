import {Alert, Button, ImageBackground, Text, View} from 'react-native';
import Header from './components/header';
import {StatusBar} from 'expo-status-bar';
import React from 'react';
import styles from './styles/General';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";


export default function ScreenTemplate(props) { // Basic template for most screens that contains the NYU Banner header and background image
  return (
    <ImageBackground
      source={require('../assets/libraryBackGround.jpg')}
      style={styles.background}>
      <View style={styles.container}>
        {/*2 Parts, Header component and body View component*/}
        <Header />
        <View style={styles.body}>
          {/*All components contained in bottom view*/}
          {props.children}
        </View>
        <StatusBar style="auto" />
      </View>
    </ImageBackground>
  );
}
