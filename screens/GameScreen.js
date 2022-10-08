import { View, StyleSheet, Text } from "react-native";
import Title from "../components/Title";

const GameScreen = () => {
  return (
    <View style={styles.screen}>
      {/* Guess */}
      <Title>Opponent's Guess</Title>
      <View>
        <Text>Higher or Lower ?</Text>
        {/* +
        - */}
      </View>
      <View>{/* Log rounds */}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingHorizontal: 24,
    paddingVertical: 32,
    marginTop: 10,
  },
});

export default GameScreen;
