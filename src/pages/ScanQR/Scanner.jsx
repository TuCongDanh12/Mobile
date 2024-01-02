import React from "react";
import {
    Dimensions,
    SafeAreaView,
    ScrollView,
    View,

} from 'react-native';

import { CameraScreen, CameraType } from "react-native-camera-kit";
const SCREEN_HEIGHT=Dimensions.get('screen').height;
export default function Scanner({ navigation}){
    return (
        <SafeAreaView>
            <ScrollView
                contentInsetAdjustmentBehavior="automatic">
                <View style={{height: SCREEN_HEIGHT}}>
                <CameraScreen
                    // Barcode props
                    scanBarcode={true}
                    onReadCode={() => Alert.alert('QR code found')} // optional
                    showFrame={true} // (default false) optional, show frame with transparent layer (qr code or barcode will be read on this area ONLY), start animation for scanner,that stoped when find any code. Frame always at center of the screen
                    laserColor='red' // (default red) optional, color of laser in scanner frame
                    frameColor='white' // (default white) optional, color of border of scanner frame
                    cameraRatioOverlay={undefined}
                    captureButtonImage={undefined}
                    captureButtonImageStyle={{}}
                    cameraFlipImage={undefined}
                    cameraFlipImageStyle={{}}
                    hideControls={undefined}
                    torchOffImage={undefined}
                    torchOnImage={undefined}
                    torchImageStyle={{}}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}