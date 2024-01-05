import { Text, TouchableOpacity } from "react-native"


export default Button = ({
    text,
    onclick,
    style,
    textStyle,
    ...props
}) => {
    return <TouchableOpacity onPress={onclick} style={style}>
        <Text style={textStyle}>{text}</Text>
    </TouchableOpacity>
}