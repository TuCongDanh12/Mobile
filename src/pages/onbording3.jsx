import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Dimensions } from 'react-native';
import Onboarding from '../Component/Onboarding';

export default function App() {
  const { height: screenHeight } = Dimensions.get('window');

  return (
    <View style={{flex:1}}>
        

        <Onboarding 
          
          heading={"Lưu giữ kỷ niệm"}
          source={require('../../assets/images/onboarding3.png')}
          title={"Chụp ảnh, viết cảm nghĩ, và lưu giữ mọi kỷ niệm quý giá từ mỗi chuyến đi. LocaCheck giúp bạn tạo ra album sống động và kỷ niệm không quên."}
        >
            Bắt đầu
        </Onboarding>
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
