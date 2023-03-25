import { Platform, StatusBar as RStatusBar, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:'column',
        // paddingTop: Platform.OS === 'android' ? RStatusBar.currentHeight : 0,
        backgroundColor: 'rgba(255, 255, 255, 255)',
        alignItems: 'center',
        justifyContent: 'center',
    },

});

export default styles

