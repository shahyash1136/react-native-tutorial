import { useEffect, useState } from "react";
import { View, StyleSheet, Text, Alert } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import NumberContainer from "../components/game/NumberContainer";
import Card from "../components/UI/Card";
import InstructionText from "../components/UI/InstructionText";
import PrimayButton from "../components/UI/PrimayButton";
import Title from "../components/UI/Title";
import Colors from "../constants/colors";

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

let minBoundary = 1;
let maxBoundary = 100;

const GameScreen = ({ userNumber, onGameOver }) => {
  let initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessRound, setGuessRound] = useState(initialGuess);

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver();
    }
  }, [currentGuess, userNumber, onGameOver]);

  useEffect(() => {
    maxBoundary = 1;
    maxBoundary = 100;
  }, []);

  const nextGuessHandler = (direction) => {
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "greater" && currentGuess > userNumber)
    ) {
      Alert.alert("Don't lie!", "You know that this is wrong...", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }
    if (direction === "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }
    const newRndNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(newRndNumber);
    setGuessRound((prevState) => [...prevState, newRndNumber]);
  };
  console.log(guessRound);
  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <InstructionText style={styles.instructionText}>
          Higher or Lower ?
        </InstructionText>
        <View style={styles.buttonContainer}>
          <PrimayButton clickHandler={() => nextGuessHandler("greater")}>
            <Ionicons name='md-add' size={24} color={Colors.white} />
          </PrimayButton>
          <PrimayButton clickHandler={() => nextGuessHandler("lower")}>
            <Ionicons name='md-remove' size={24} color={Colors.white} />
          </PrimayButton>
        </View>
      </Card>
      <View>
        {/* {guessRound.map((el) => {
          return <Text key={el}>{el}</Text>;
        })} */}
      </View>
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
  instructionText: {
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: "row",
  },
});

export default GameScreen;
