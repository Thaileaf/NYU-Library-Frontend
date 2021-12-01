import React from 'react';
import {
  Alert,
  Button,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Platform,
  StatusBar as RStatusBar,
  Dimensions,
  Linking,
} from 'react-native';
import {StatusBar} from 'expo-status-bar';

function WelcomeScreen( {navigation} ) {

  return (
    <ImageBackground
      source={require('./assets/libraryBackGround.jpg')}
      style={styles.background}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableWithoutFeedback onPress={() => Linking.openURL('https://www.nyu.edu/')}>
            <Image
              style={styles.headerLogo}
              source={require('./assets/NYUPhoto.png')}
            />
          </TouchableWithoutFeedback>
          <View style={styles.headerTitle}>
            <Text style={{color: 'white', fontSize: 30}}>
              NYU Library Services
            </Text>
          </View>
        </View>
        <View style={styles.body}>
          <Button
            title="About"
            color="#601c8c"
            onPress={ () => navigation.navigate('About')
              // Alert.alert('My Title', 'My message', [
              //   {text: 'Yes', onPress: () => console.log('Yes')},
              //   {text: 'No', onPress: () => console.log('No')},
              // ])
            }
          />
          <Button
            title="Services"
            color="#601c8c"
            onPress={() =>
              Alert.alert('My Title', 'My Message', [
                {text: 'Got it', onPress: () => navigation.navigate('Services')},
              ])
            }
          />
          <Button
            title="Search Library Resources"
            color="#601c8c"
            onPress={() => console.log('Button pressed')}
          />
          <Button
            title="Reservable Study Spaces"
            color="#601c8c"
            onPress={() => console.log('Button pressed')}
          />
          <Text onPress={() => console.log('Hi')}>Debug Code!</Text>
        </View>
        <StatusBar style="auto" />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
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
  header: {
    flex: 1,
    flexDirection: 'row', // Chooses direction contents go to
    backgroundColor: '#57068c',
    justifyContent: 'center', // Aligns on Primary axis (horizontal or vertical for row and column respectively)
  },
  headerLogo: {
    flex: 2,
    height: '100%',
    width: '100%',
  },
  headerTitle: {
    flex: 4,
    color: 'white',
    justifyContent: 'center',
    paddingLeft: 50,
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
  }
});

export default WelcomeScreen;
