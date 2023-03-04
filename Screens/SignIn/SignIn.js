import React from 'react'
import {Button, Image, Linking, Text, TouchableWithoutFeedback, View} from "react-native";
import styles from './SignInStyle.js';
import WelcomeScreen from "../WelcomeScreen";

function SignIn ({navigation}) {
    return (
        <View style={styles.container}>
            <Text style={{color: 'blue'}}
                  onPress={() => Linking.openURL('https://github.com/Thaileaf/NYU-Library-Frontend')}>
                Library
            </Text>
        </View>
        )
}
export default SignIn;