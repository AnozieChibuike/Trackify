import { SafeAreaView } from "react-native-safe-area-context";
import { ActivityIndicator, Keyboard, Text, TouchableWithoutFeedback, View } from "react-native";
import { height } from "../constant/scale";
import container from "../constant/style";
import Logos from "../components/Logos";
import Input from "../components/Input";
import colors from "../constant/colors";
import { useLayoutEffect, useState } from "react";
import Button from "../components/Button";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";

const base_url = 'https://flask-app-404911.uc.r.appspot.com'

export default SignUpScreen = ({ navigation }) => {
    useLayoutEffect(()=> {
        setInputs({email: "", password: ''})
        setStrength(0)
    },[])
  const [strength, setStrength] = useState(0);
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validate = () => {
    Keyboard.dismiss();
    let isValid = true;
    if (!inputs.email) {
      isValid = false;
      handleError("Please input email", "email");
    } else if (!inputs.email.match(/\S+@\S+\.\S+/)) {
      isValid = false;
      handleError("Please input a valid email", "email");
    }
    if (!inputs.password) {
      handleError("Please input a password", "password");
    } else if (inputs.password.length < 8) {
      isValid = false;
      handleError("Min Password length of 8", "password");
    }
    if (isValid) {
      register()
    }
  };

async function register(){
    setLoading(true)
    try {
        const response = await fetch(`${base_url}/api/signup?email=${inputs.email}&password=${inputs.password}`)
        const data = await response.json()
        if (data.error) {
            Alert.alert('Error', data.error)
        } else {
        AsyncStorage.setItem('userData',JSON.stringify(data.data))
        navigation.navigate('Login',{message: 'Successfully Created your account, Login', type: 'green'})}
    } catch (error) {
        Alert.alert('Error',error.message)
    } finally {
        setLoading(false)
    }
}


const handleError = (error, input) => {
  setErrors((prevState) => ({ ...prevState, [input]: error }));
};

const handleChange = (text, input) => {
  setInputs((prevState) => ({ ...prevState, [input]: text }));
};
return (
  <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <SafeAreaView style={[container]}>
    {loading ? (<ActivityIndicator style={{position: 'absolute', top: '50%', left: '50%'}} />) :
      (<><Logos />
      <View style={{ marginTop: height / 10, marginBottom: 10 }}>
        <Input
          label="E-mail address"
          onfocus={() => handleError(null, "email")}
          error={errors.email}
          onChangeText={(text) => {
            handleChange(text, 'email')
          }}
        />
      </View>
      <View style={{}}>
        <Input
          onfocus={() => handleError(null, "password")}
          label="Password"
          error={errors.password}
          password={true}
          onChangeText={(text) => {
            setStrength(text.length);
            handleChange(text, 'password')
          }}
        />
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          height: 4,
          borderRadius: 100,
          overflow: "hidden",
          marginTop: 15,
          marginBottom: 20,
        }}
      >
        <View
          style={{
            backgroundColor: strength > 5 ? "red" : colors.greyText,
            flex: 1,
          }}
        ></View>
        <View
          style={{
            backgroundColor: strength > 8 ? "yellow" : colors.greyText,
            flex: 1,
            marginHorizontal: 5,
          }}
        ></View>
        <View
          style={{
            backgroundColor: strength > 10 ? "green" : colors.greyText,
            flex: 1,
          }}
        ></View>
      </View>
      <Button
        text="Get started, it's free!"
        color="white"
        bg={colors.accentPlum}
        onclick={() => {
          setStrength(0)
            validate()
          }}
      />

      <Text
        style={{
          color: "white",
          textAlign: "center",
          marginTop: height / 5.4,
          marginBottom: 20,
        }}
      >
        Already have an account?
      </Text>
      <Button
        bg={colors.grey}
        color="white"
        text="Sign In"
        onclick={()=>{ navigation.navigate('Login')}}
        
      /></>)}
    </SafeAreaView>
  </TouchableWithoutFeedback>
);
}