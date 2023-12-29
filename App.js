import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Onboarding2 from "./src/pages/onboarding2";
import Onboarding1 from "./src/pages/onboarding1";
import Onboarding3 from "./src/pages/onboarding3";
import Login from "./src/pages/Login";
import Register from "./src/pages/Register";
import History from "./src/pages/History/history";
import ChangePassword from "./src/pages/ChangePassWord/changePassword";
import Setting from "./src/pages/Setting/setting";
import UserInfor from "./src/pages/UserInfor/UserInformation";
import User_Infor from "./src/pages/User_infor/user_infor";
import Infor from "./src/pages/Infor/Infor";
import HomePage from "./src/pages/HomePage";
import Search from "./src/pages/Search";
import SeeAll from "./src/pages/SeeAll";
import ScanQR from "./src/pages/ScanQR/scanQR";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Onboarding1"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Group>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="Onboarding1" component={Onboarding1} />
          <Stack.Screen name="Onboarding2" component={Onboarding2} />
          <Stack.Screen name="Onboarding3" component={Onboarding3} />
          <Stack.Screen name="History" component={History} />
          <Stack.Screen name="ChangePassword" component={ChangePassword} />
          <Stack.Screen name="Setting" component={Setting} />
          <Stack.Screen name="UserInfor" component={UserInfor} />
          <Stack.Screen name="User_Infor" component={User_Infor} />
          <Stack.Screen name="Infor" component={Infor} />
          <Stack.Screen name="HomePage" component={HomePage} />
          <Stack.Screen name="SeeAll" component={SeeAll} />
          <Stack.Screen name="Search" component={Search} />
          <Stack.Screen name="ScanQR" component={ScanQR} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
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
