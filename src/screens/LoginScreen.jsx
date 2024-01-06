import { SafeAreaView } from "react-native-safe-area-context";
import { Keyboard,ActivityIndicator, TouchableWithoutFeedback, View, Text } from "react-native";
import Images from "../components/Images";
import Logos from "../components/Logos";
import Input from "../components/Input";
import Button from "../components/Button";
import { height } from "../constant/scale";
import { useEffect, useLayoutEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { base_url } from "./SignUpScreen";


export default LoginScreen = ({ navigation, route }) => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [info, setInfo] = useState({
    message: "",
    type: "",
  });

  useLayoutEffect(() => {
    const { message, type } = route.params || {};
    if (message && type) {
      setInfo({
        message: message,
        type: type,
      });
    }
  }, []);

  const validate = () => {
    Keyboard.dismiss();
    let isValid = true;
    if (!inputs.email) {
      handleError("Please Input Email", "email");
      isValid = false;
    }
    if (!inputs.password) {
      handleError("Please Input Password", "password");
      isValid = false;
    }
    if (isValid) {
      login();
    }
  };

  const handleChange = (text, input) => {
    setInputs((prevState) => ({ ...prevState, [input]: text }));
  };

  async function login() {
    setLoading(true);
    try {
      const response = await fetch(
        `${base_url}/api/login?email=${inputs.email}&password=${inputs.password}`
      );
      const data = await response.json();
      if (data.error) {
        setInfo({
          message: data.error,
          type: 'red'
        })
        // console.log(data.error)
      } else {
        console.log(data.data)
        AsyncStorage.setItem("userData", JSON.stringify(data.data));
        navigation.navigate("Dashboard");
      }
    } catch (error) {
      setInfo({
        message: error.message,
        type: 'red'
      })
    } finally {
      setLoading(false);
    }
  }

  const handleError = (error, input) => {
    setErrors((prevState) => ({ ...prevState, [input]: error }));
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={[container]}>
        {loading ? (
          <ActivityIndicator
            style={{ position: "absolute", top: "50%", left: "50%" }}
          />
        ) : (
          <>
            <Logos />
            {info.message && (
              <Text style={{ color: info.type }}>{info.message}</Text>
            )}

            <View style={{ marginTop: height / 12, marginBottom: 10 }}>
              <Input
                label="Login"
                onfocus={() => handleError(null, "email")}
                error={errors.email}
                onChangeText={(text) => {
                  handleChange(text, "email");
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
                  handleChange(text, "password");
                }}
              />
            </View>
            <View style={{ marginTop: 25 }}>
              <Button text="Sign In" color="white" bg={colors.accentPlum} onclick={()=>{
                validate()
              }} />
            </View>
            <Text
              style={{
                color: "white",
                textAlign: "center",
                marginTop: height / 5,
                marginBottom: 20,
              }}
            >
              Don't have an account yet?
            </Text>
            <Button
              bg={colors.grey}
              color="white"
              text="Sign Up"
              onclick={() => {
                setInfo({
                  message: "",
                  type: "",
                });
                navigation.navigate("SignUp");
              }}
            />
          </>
        )}
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};
