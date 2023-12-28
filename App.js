import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Onboarding2 from "./src/pages/onboarding2";
import Onboarding1 from "./src/pages/onboarding1";
import Onboarding3 from "./src/pages/onboarding3";
import Login from "./src/pages/Login";
import Register from "./src/pages/Register";
import History from './src/pages/History/history';
import ChangePassword from './src/pages/ChangePassWord/changePassword';
import Setting from './src/pages/Setting/setting';
import UserInfor from './src/pages/UserInfor/UserInformation';
export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="UserInfor" screenOptions={{headerShown:false}}>
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
