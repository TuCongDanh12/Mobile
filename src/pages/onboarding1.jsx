import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Dimensions } from 'react-native';
import Onboarding from '../Component/Onboarding';

export default function App() {
  const { height: screenHeight } = Dimensions.get('window');

  return (
    <View style={{flex:1}}>
        

        <Onboarding 
          
          heading={"Chào mừng đến với LocaCheck"}
          source={require('../../assets/images/onboarding1.png')}
          title={"Khám phá thế giới xung quanh bạn và chia sẻ những khoảnh khắc đặc biệt với chúng tôi."}
        >
            Tiếp tục
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
