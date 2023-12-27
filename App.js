import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Onboarding2 from "./src/pages/onboarding2";
import Onboarding1 from "./src/pages/onboarding1";
import Onboarding3 from "./src/pages/onboarding3";
import HomePage from "./src/pages/HomePage/index";
import SeeAll from "./src/pages/SeeAll";
import Search from "./src/pages/Search";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="HomePage" screenOptions={{headerShown:false}}>
      <Stack.Group>
        <Stack.Screen name="HomePage" component={HomePage} />
        <Stack.Screen name="SeeAll" component={SeeAll} />
        <Stack.Screen name="Search" component={Search} />

        {/* <Stack.Screen name="Onboarding1" component={Onboarding1} />
        <Stack.Screen name="Onboarding2" component={Onboarding2} />
        <Stack.Screen name="Onboarding3" component={Onboarding3} /> */}
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
