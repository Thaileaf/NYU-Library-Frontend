import { Platform, StatusBar as RStatusBar, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:'column',
        paddingTop: Platform.OS === 'android' ? RStatusBar.currentHeight : 0,
        backgroundColor: 'rgba(255, 255, 255, 0)',
        alignItems: 'stretch',
        justifyContent: 'space-evenly',
    },
    // body: {
    //     flex: 4,
    //     backgroundColor: 'rgba(255,255,255,.1)',
    //     justifyContent: 'flex-start',
    // },
    button: {
        marginLeft: '10%',
        marginRight: '10%',
        paddingLeft:25,
        borderRadius: 30,
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        textAlign:'left',
        justifyContent:'space-between',
    },
    shadow:{
        shadowColor: '#000000',
        shadowOffset: {width: -1, height: 5},
        shadowOpacity: 1,
        shadowRadius: 30,
        height:"20%",
        backgroundColor:'#FFFFFF',
        elevation:1,
    },
});

export default styles


