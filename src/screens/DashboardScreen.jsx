import { Text } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import Button from "../components/Button";
import container from "../constant/style";
import colors from "../constant/colors";

export default Dashboard = ({navigation}) => {
    const [userDetails, setuserDetails] = useState({})

    useEffect(()=> {
        getUserData()
    },[])

    const getUserData = async ()=> {
        const userData = await AsyncStorage.getItem('userData')
        if (userData) {
            setuserDetails(JSON.parse(userData));
        }
    }

const logout = () => {
    AsyncStorage.removeItem('userData')
    navigation.navigate('Landing')
}

    return (
    <SafeAreaView style={container}>
    <Text style={{color: 'white'}}>Hello {userDetails.username}</Text>
    <Button
              bg='red'
              color="white"
              text="Logout"
              onclick={() => {
                setuserDetails(null);
                logout()
              }} />
    </SafeAreaView>)
}