import React from 'react'
import { Image, Linking, Text, TouchableWithoutFeedback, View } from "react-native";
import styles from '../styles/General.js';

export default function Header() {
  return(
    <View style={styles.header}>
      <TouchableWithoutFeedback onPress={() => Linking.openURL('https://www.nyu.edu/')}>
        <Image
          style={styles.headerLogo}
          source={require('../../assets/NYUPhoto.png')}
        />
      </TouchableWithoutFeedback>
      <View style={styles.headerTitle}>
        <Text style={{color: 'white', fontSize: 30}}>
          NYU Library Services
        </Text>
      </View>
    </View>
  )
}
