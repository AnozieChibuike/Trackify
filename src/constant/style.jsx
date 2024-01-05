import { StyleSheet } from "react-native";
import { height, width } from "./scale";

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.dark,
        paddingHorizontal: 25,
        paddingVertical: 15,
        height: height,
        width: width,
        display: "flex"
    },
    text: {
        color: 'white'
    }
})

export const text = styles.text
export default container = styles.container; 