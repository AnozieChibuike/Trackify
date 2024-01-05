import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import LandingScreen from "./src/screens/LandingScreen";

export default function App() {
  return (
    <>
      <LandingScreen />
      <StatusBar hidden={true} />
    </>
  );
}
