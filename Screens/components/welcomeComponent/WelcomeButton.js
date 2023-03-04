import React from 'react'
import { Image, Linking, Text, TouchableWithoutFeedback, View } from "react-native";
import styles from './welcomeStyle.js';

export default function WelcomeButton () {
    return (
        <View style={styles.container}>
                <View style={[styles.button,styles.shadow]}>
                    <Text>test1</Text>
                    <Text>test img1</Text>
                </View>
            <View style={[styles.button,styles.shadow]}>
                <Text>test2</Text>
                <Text>test img2</Text>
            </View>
            <View style={[styles.button,styles.shadow]}>
                <Text>test3</Text>
                <Text>test img3</Text>
            </View>
            <View style={[styles.button,styles.shadow]}>
                <Text>test4</Text>
                <Text>test img4</Text>
            </View>
        </View>
    )
}
