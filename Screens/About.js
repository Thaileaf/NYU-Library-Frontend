import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
} from 'react-native';
import ScreenTemplate from "./screenTemplate";
import styles from "./styles/General";


export default function About() {
  return(
    <ScreenTemplate contentContainerStyle={styles.scrollView}>
      <ScrollView>
        <Image
          source={require('../assets/augmented-library-logo.png')}
          style={{height: 300, width: 300}}
        />
        <Text style={{fontSize:50}}>The team of AugmentedLibrary proudly presents this app that doesn't work</Text>
      </ScrollView>
    </ScreenTemplate>
  )
}



