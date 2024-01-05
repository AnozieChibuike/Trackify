import Images from './Images'
import {StyleSheet, View} from 'react-native'
import Logo from "../../assets/logo.png";
import Trackizer from "../../assets/Trackizer.png";
import { height } from '../constant/scale';


export default Logos = () => {
    return <View style={styles.logo}>
    <Images src={Logo} />
    <Images style={{ marginLeft: 10 }} src={Trackizer} />
  </View>
} 

const styles = StyleSheet.create({
    logo: {
      display: "flex",
      flexDirection: "row",
      alignSelf: "center",
      alignItems: "center",
      marginBottom: height / 32,
    },
  });
  