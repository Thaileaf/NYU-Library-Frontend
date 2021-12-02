import {Alert, Button, ImageBackground, Text, View} from 'react-native';
import Header from './components/header';
import {StatusBar} from 'expo-status-bar';
import React from 'react';
import styles from './styles/General';

export default function ScreenTemplate(props) {
  return (
    <ImageBackground
      source={require('../assets/libraryBackGround.jpg')}
      style={styles.background}>
      <View style={styles.container}>
        <Header />
        <View style={styles.body}>
          {props.children}
        </View>
        <StatusBar style="auto" />
      </View>
    </ImageBackground>
  );
}
