import { SafeAreaView } from "react-native-safe-area-context";
import { Keyboard, Text, TouchableWithoutFeedback, View } from "react-native";
import { height } from "../constant/scale";
import container from "../constant/style";
import Logos from "../components/Logos";
import Input from "../components/Input";
import colors from "../constant/colors";
import { useState } from "react";
import Button from "../components/Button";


export default SignUpScreen = ({ navigation }) => {
    const [strength, setStrength] = useState(0)
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={[container]}>
        <Logos />
        <View style={{ marginTop: height / 10, marginBottom: 10 }}>
          <Input label="E-mail address" />
        </View>
        <View style={{}}>
          <Input label="Password" password={true} onChangeText={(text) => {
                setStrength(text.length)
          }} />
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            height: 4,
            borderRadius: 100,
            overflow: "hidden",
            marginTop: 15,
            marginBottom: 20
          }}
        >
          <View style={{ backgroundColor: strength > 5 ? "red" : colors.greyText, flex: 1,}}></View>
          <View
            style={{ backgroundColor: strength > 8 ? "yellow" : colors.greyText, flex: 1, marginHorizontal: 5,
         }}
          ></View>
          <View style={{ backgroundColor: strength > 10 ? "green" : colors.greyText, flex: 1 }}></View>
        </View>
        <Button text="Get started, it's free!" color='white' bg={colors.accentPlum} />

        <Text style={{color:'white', textAlign: 'center', marginTop: height/5.4, marginBottom: 20}}>Already have an account?</Text>
        <Button bg={colors.grey} color='white' text='Sign In' onclick={() => {
            navigation.navigate('Login')
        }} />
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};
