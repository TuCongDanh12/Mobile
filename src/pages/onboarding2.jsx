import { View, SafeAreaView } from "react-native";
import Onboarding from "../Component/Onboarding";

export default function Onboarding2({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FCE5EB" }}>
      <View style={{marginTop:100, flex: 1 }}>
        <Onboarding
          heading={"Kết Nối Không Gian"}
          source={require("../../assets/images/onboarding2.png")}
          title={
            "Chúng tôi sử dụng công nghệ để giúp bạn kết nối với những địa điểm độc đáo xung quanh bạn."
          }
          selectedIndex={2}
          onPress={() => {
            navigation.navigate("Onboarding3");
          }}
        >
          Tiếp tục
        </Onboarding>
      </View>
    </SafeAreaView>
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
