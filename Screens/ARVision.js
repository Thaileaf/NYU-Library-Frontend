import {AntDesign} from '@expo/vector-icons';
import {Camera} from 'expo-camera';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React, {useState, useEffect} from 'react';

export default function ARVision() {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  useEffect(() => {
    (async () => {
      const {status} = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return(
    <View style={styles.container}>
      <Camera style={styles.camera} type={type}>
        <View style={{flex: 5}}>

        </View>
        <View style={styles.movementContainer}>
          <View style={[styles.arrowContainer, {flex: 3}]}>
            <AntDesign name={"caretup"} size={24} color={"white"}>
            </AntDesign>
          </View>
          <View style={[styles.arrowContainer, {flex:3, justifyContent:'space-around',flexDirection:'row',}]}>
            <AntDesign name={"caretleft"} size={24} color={"white"} />
            <AntDesign name={"caretright"} size={24} color={"white"} />
          </View>
          <View style={[styles.arrowContainer, {flex:4, justifyContent:"flex-end", paddingBottom:20}]}>
            <AntDesign name={"caretdown"} size={24} color={"white"} />
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}>
            <Text style={styles.text}> Flip </Text>
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
  movementContainer: {
    flex: 1,
    backgroundColor: "transparent"
  },
  movement: {
    alignSelf: 'flex-end'
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    margin: 20,
  },
  button: {
    flex: 0.1,
    backgroundColor: 'green',
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    color: 'white',
  },
  arrowContainer: {flex: 1, alignItems: 'center'},
});
