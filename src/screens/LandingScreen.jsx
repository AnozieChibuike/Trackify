import { StyleSheet, View } from "react-native"
import { Text } from "react-native"
import colors from "../constant/colors"
import container from "../constant/style"
import { height } from "../constant/scale"
import Images from "../components/Images"
import Logo from "../../assets/logo.png"
import Trackizer from "../../assets/Trackizer.png"

export default LandingScreen = ()=> {
    return (
        <View style={[container,{paddingTop: 50}]}>
            
            <View style={styles.topView}>
                <Images src={Logo} />
                <Images src={Trackizer} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    topView: {
        display: "flex",
        flexDirection: 'row',
        alignSelf: 'center',
        alignItems: 'center',
    }
})

