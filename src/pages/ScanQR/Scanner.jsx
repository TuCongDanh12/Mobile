import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Button, Image, TouchableOpacity } from 'react-native';
import { useEffect, useRef, useState } from 'react';
import { Camera } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';

import { useNavigation } from "@react-navigation/native";

export default function App() {
  const navigation = useNavigation();
  let cameraRef = useRef();
  const [hasCameraPermission, setHasCameraPermission] = useState();
  const [hasMediaLibraryPermission, setHasMediaLibraryPermission] = useState();
  const [photo, setPhoto] = useState();

  useEffect(() => {
    (async () => {
      const cameraPermission = await Camera.requestCameraPermissionsAsync();
      const mediaLibraryPermission = await MediaLibrary.requestPermissionsAsync();
      setHasCameraPermission(cameraPermission.status === "granted");
      setHasMediaLibraryPermission(mediaLibraryPermission.status === "granted");
    })();
  }, []);

  if (hasCameraPermission === undefined) {
    return <Text>Requesting permissions...</Text>
  } else if (!hasCameraPermission) {
    return <Text>Permission for camera not granted. Please change this in settings.</Text>
  }

  let takePic = async () => {
    let options = {
      quality: 1,
      base64: true,
      exif: false
    };

    let newPhoto = await cameraRef.current.takePictureAsync(options);
    setPhoto(newPhoto);
  };

  if (photo) {


    let savePhoto = () => {
      navigation.navigate("Infor")
      // MediaLibrary.saveToLibraryAsync(photo.uri).then(() => {
      //   setPhoto(undefined);
      // });
    };

    return (
      <SafeAreaView style={styles.container}>
        <Image style={styles.preview} source={{ uri: "data:image/jpg;base64," + photo.base64 }} />
        <View style={{display: "flex", flexDirection: "row", gap: 10, paddingBottom: 10, borderRadius: 10}}>
        {hasMediaLibraryPermission ? <Button title="Xem thông tin" onPress={savePhoto} /> : undefined}
        <Button title="Quay lại" onPress={() => setPhoto(undefined)} />
        </View>
        
      </SafeAreaView>
    );
  }

  return (
    <Camera style={styles.container} ref={cameraRef}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity 
        style={{width: 70, height: 70}}  title="" onPress={takePic}  />
      </View>
      <StatusBar style="auto" />
    </Camera>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    gap: 5,
    backgroundColor: '#9CC6DE',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 70,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

    alignSelf: 'flex-center',
    borderWidth: 3,        // Border width
    borderColor: 'red',
    borderRadius: 35,
    width: 70,
    height:70
  },
  preview: {
    alignSelf: 'stretch',
    flex: 1
  }
});