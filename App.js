import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import LandingScreen from "./src/screens/LandingScreen";
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {NavigationContainer} from '@react-navigation/native'
import style from "./src/constant/style";
import { height } from "./src/constant/scale";
import SignUpScreen from "./src/screens/SignUpScreen";
import LoginScreen from "./src/screens/LoginScreen";
import DashboardScreen from "./src/screens/DashboardScreen";


const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Landing" component={LandingScreen} options={{headerShown: false}} />
          <Stack.Screen name="SignUp" component={SignUpScreen} options={{headerShown: false}} />
          <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}} />
          <Stack.Screen name="Dashboard" component={DashboardScreen} options={{headerShown: false, gestureEnabled:false}} />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar hidden={true} />
    </>
  );
}
