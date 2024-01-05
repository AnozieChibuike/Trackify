import { Alert, StyleSheet, View } from "react-native";
import { Text } from "react-native";
import colors from "../constant/colors";
import container from "../constant/style";
import { height } from "../constant/scale";
import Images from "../components/Images";
import Logo from "../../assets/logo.png";
import Trackizer from "../../assets/Trackizer.png";
import { SafeAreaView } from "react-native-safe-area-context";
import Bubble from "../../assets/bubble.png";
import Bubble2 from "../../assets/Image.png";
import Youtube from "../../assets/youtube.png";
import Onedrive from "../../assets/onedrive.png";
import Spotify from "../../assets/Spotify.png";
import Button from "../components/Button";
import Logos from "../components/Logos";

const LandingScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={[container, { paddingHorizontal: 0 }]}>
      <Logos />
      <View style={styles.midView}>
        <Images src={Bubble} style={{ position: "absolute" }} />
        <View style={{ flex: 1, display: "flex", marginVertical: 50 }}>
          <View>
            <Images
              style={{
                alignSelf: "flex-end",
                alignSelf: "flex-end",
                marginHorizontal: 70,
              }}
              src={Youtube}
            />
          </View>
          <View style={{ margin: 40 }}>
            <Images src={Onedrive} />
          </View>
          <View>
            <Images
              src={Spotify}
              style={{ alignSelf: "flex-end", marginHorizontal: 70 }}
            />
          </View>
        </View>
        <Images
          src={Bubble2}
          style={{ position: "absolute", right: 0, bottom: -(height / 4) }}
        />
      </View>
      <Text style={{ color: "white", textAlign: "center", margin: 25 }}>
        The only app you need to track your expenses and subscriptions
      </Text>
      <View style={styles.bottomView}>
        <Button
          color="white"
          bg={colors.accentPlum}
          text="Get started"
          marginV={25}
          onclick={() => {
            navigation.navigate("SignUp");
          }}
        />
        <Button
          color="white"
          bg={colors.grey}
          onclick={() => {
            navigation.navigate("Login");
          }}
          text="I have an account"
          marginV={25}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  midView: {
    position: "relative",
    display: "flex",
    flexDirection: "row",
    height: height / 1.9,
  },
  bottomView: {},
});


export default LandingScreen