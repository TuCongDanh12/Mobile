import {View, SafeAreaView } from "react-native";
import Onboarding from "../Component/Onboarding";

export default function Onboarding1({ navigation }) {
  return (
    <SafeAreaView style={{flex:1, backgroundColor: '#FCE5EB'}}>
      <View style={{ flex: 1 }}>
        <Onboarding
          heading={"Chào mừng đến với LocaCheck"}
          source={require("../../assets/images/onboarding1.png")}
          title={
            "Khám phá thế giới xung quanh bạn và chia sẻ những khoảnh khắc đặc biệt với chúng tôi."
          }
          selectedIndex={1}
          onPress={() => {
            navigation.navigate("Onboarding2");
          }}
        >
          Tiếp tục
        </Onboarding>
      </View>
    </SafeAreaView>
  );
}
