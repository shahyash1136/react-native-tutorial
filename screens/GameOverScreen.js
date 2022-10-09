import { Image, StyleSheet, Text, View } from "react-native";
import PrimayButton from "../components/UI/PrimayButton";
import Title from "../components/UI/Title";
import Colors from "../constants/colors";

const GameOverScreen = ({ roundsNumber, userNumber, onReset }) => {
  return (
    <View style={styles.screen}>
      <Title>GAME OVER!</Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/success.png")}
        />
      </View>
      <Text style={styles.summaryText}>
        Your phone needed <Text style={styles.hightLight}>{roundsNumber}</Text>{" "}
        round to guess the number{" "}
        <Text style={styles.hightLight}>{userNumber}</Text>
      </Text>
      <View
        style={{
          flexDirection: "row",
        }}>
        <PrimayButton clickHandler={onReset}>State New Game</PrimayButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: 32,
    paddingVertical: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    borderRadius: 150,
    width: 300,
    height: 300,
    borderWidth: 3,
    borderColor: Colors.primary800,
    overflow: "hidden",
    margin: 36,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    fontFamily: "open-sans",
    fontSize: 24,
    textAlign: "center",
    marginVertical: 24,
  },
  hightLight: {
    fontFamily: "open-sans-bold",
    color: Colors.primary500,
  },
});

export default GameOverScreen;
