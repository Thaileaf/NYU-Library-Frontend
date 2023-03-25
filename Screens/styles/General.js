import { Platform, StatusBar as RStatusBar, StyleSheet } from "react-native";

const styles = StyleSheet.create({

  // header: {
  //   flex: 1,
  //   flexDirection: 'row',
  //   justifyContent: 'center',
  // },
  //
  // headerStyle: {
  //   background: '#57068c',
  // },
  header: {
    flex: 1,
    flexDirection: 'row', // Chooses direction contents go to
    backgroundColor: '#57068c',
    justifyContent: 'center', // Aligns on Primary axis (horizontal or vertical for row and column respectively

  },
  headerLogo: {
    flex: 2,
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
  },
  headerTitle: {
    flex: 4,
    color: 'white',
    textAlign: 'left',
    justifyContent: 'center',
  },
  settingsIcon: {
    flex: 1,
    justifyContent: 'center',
    textAlign:'left',
    resizeMode: 'contain',
  },
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? RStatusBar.currentHeight : 0,
    backgroundColor: 'rgba(255, 255, 255, .8)',
    alignItems: 'stretch', // Alligns items on Cross axis (veritcal or horizontal for row and colum) for each Line
    // If you have more than one item per line(wrapping), use alignContent
    // flexBasis: 100 - This is width or height according to primary axis
    justifyContent: 'center',
    borderStyle: 'solid',
  },
  body: {
    flex: 4,
    backgroundColor: 'rgba(255,255,255,.1)',
    justifyContent: 'flex-start',
  },
  button: {
    color: '#57068c',
  },
  background: {
    flex: 1,
    opacity: 50,
  },
  scrollView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  RoomReservation: {
    flex: 1,
    justifyContent: 'flex-start',
    alignContent: 'stretch',
  },
  RoomObject: {
    height: 60,
    backgroundColor: 'white',
    borderColor: 'grey',
    borderStyle: 'solid',
    borderBottomWidth: 2,
    justifyContent: 'center',
    flexDirection: 'row',
  },
});

export default styles


