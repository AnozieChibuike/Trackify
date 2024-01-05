import { TextInput, Text, View, StyleSheet } from "react-native";
import colors from "../constant/colors";
import { useState } from "react";

export default Input = ({
  label,
  error,
  onfocus = () => {},
  password,
  ...props
}) => {
    const [focused, setFocused] = useState(false)
  return (
    <>
        <Text style={{ color: colors.greyText }}>{label}</Text>
        <View
          style={[
            styles.inputContainer,
            { borderColor: focused ? colors.accentPlum : error ? "red" :  colors.greyText },
          ]}
        >
          <TextInput
          secureTextEntry={password}
            onFocus={()=> {
                onfocus()
                setFocused(true)
            }}
            onBlur={()=> {
                setFocused(false)
            }}
            autoCorrect={false}
            style={{ color: "white", fontSize: 17 }}
            {...props}
          ></TextInput>
        </View>
        {error && <Text style={{ color: "red" }}>{error}</Text>}
    </>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    display: "flex",
    justifyContent: "center",
    height: 50,
    borderWidth: 1,
    borderRadius: 15,
    marginVertical: 5,
    paddingLeft: 10,
  },
});
