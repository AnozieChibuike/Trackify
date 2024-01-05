import { Text, TouchableOpacity,Platform } from "react-native";

export default Button = ({ text, onclick, color, bg, marginV, ...props }) => {
  return (
    <TouchableOpacity
      onPress={onclick}
      style={[
        {
          height: 45,
          marginHorizontal: 0 || marginV,
          marginBottom: 20,
          backgroundColor: bg,
          borderRadius: 100,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          ...Platform.select({
            ios: {
                shadowColor: bg,
                shadowOffset: {width:1, height: 4},
                shadowOpacity: 0.8,
                shadowRadius: 20
            },
            android: {
                elevation: 5
            }
          })
        },
      ]}
    >
      <Text style={{ color: color }}>{text}</Text>
    </TouchableOpacity>
  );
};
