import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Dimensions } from 'react-native';
import Onboarding from '../Component/Onboarding';

export default function App() {
  const { height: screenHeight } = Dimensions.get('window');

  return (
    <View style={{flex:1}}>
        

        <Onboarding 
          
          heading={"Kết Nối Không Gian"}
          source={require('../../assets/images/onboarding2.png')}
          title={"Chúng tôi sử dụng công nghệ để giúp bạn kết nối với những địa điểm độc đáo xung quanh bạn."}
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
