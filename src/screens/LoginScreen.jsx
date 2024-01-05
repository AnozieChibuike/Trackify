import { SafeAreaView } from "react-native-safe-area-context";
import { Keyboard, TouchableWithoutFeedback, View,Text } from "react-native";
import Images from "../components/Images";
import Logos from "../components/Logos";
import Input from "../components/Input";
import Button from "../components/Button";
import { height } from "../constant/scale";
import { useEffect, useLayoutEffect, useState } from "react";

export default LoginScreen =  ({navigation, route}) => {
    const [info, setInfo] = useState({
      message: '',
      type: ''
    })
    useLayoutEffect(()=>{
    const {message, type} = route.params || {};
      if (message && type ) {
        setInfo({
          message: message,
          type: type
        })
      }
    },[])


    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <SafeAreaView style={[container]}>
            <Logos />
            {info.message && <Text style={{color: info.type,}}>{info.message}</Text>}
            
            <View style={{ marginTop: height / 12, marginBottom: 10 }}>
              <Input label="Login" />
            </View>
            <View style={{}}>
              <Input label="Password" password={true} onChangeText={(text) => {
                    
              }} />
            </View>
            <View style={{marginTop: 25}}>
                <Button text="Sign In" color='white' bg={colors.accentPlum} />
            </View>
            <Text style={{color:'white', textAlign: 'center', marginTop: height/5, marginBottom: 20}}>Don't have an account yet?</Text>
            <Button bg={colors.grey} color='white' text='Sign Up' onclick={() => {
                setInfo({
                  message: '',
                  type: ''
                })
                navigation.navigate('SignUp')
            }} />
          </SafeAreaView>
        </TouchableWithoutFeedback>
      );
}