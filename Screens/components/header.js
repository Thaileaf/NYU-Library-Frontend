import React from 'react'
import { Image, Linking, Text, TouchableWithoutFeedback, View } from "react-native";
import styles from '../styles/General.js';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

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
        <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>
          NYU Dibner Library
        </Text>
      </View>
        <View style={styles.settingsIcon}>
            <FontAwesome name ='bars' size={40} color={'white'}/>
        </View>

    </View>
  )
}
