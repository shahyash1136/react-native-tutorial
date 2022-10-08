import { useState } from "react";
import { StyleSheet, TextInput, View, Alert } from "react-native";
import Colors from "../constants/colors";
import PrimayButton from "../components/PrimayButton";

const StartGameScreen = ({ onPickNumber }) => {
  const [inputValue, setInputValue] = useState("");
  const changeTextHandler = (enteredText) => {
    setInputValue(enteredText);
  };
  const resetHandler = () => {
    setInputValue("");
  };
  const confrimHandler = () => {
    const chosenNumber = parseInt(inputValue);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      //show alert
      Alert.alert(
        "Invalid Number!",
        "Number has to be a number between 1 and 99.",
        [{ text: "Okay", style: "destructive", onPress: resetHandler }]
      );
      return;
    }
    onPickNumber(chosenNumber);
  };
  return (
    <View style={styles.inputContainer}>
      <TextInput
        keyboardType='number-pad'
        style={styles.numberInput}
        maxLength={2}
        autoCapitalize='none'
        autoCorrect={false}
        onChangeText={changeTextHandler}
        value={inputValue}
      />
      <View style={styles.buttonContainer}>
        <PrimayButton clickHandler={resetHandler}>Reset</PrimayButton>
        <PrimayButton clickHandler={confrimHandler}>Confirm</PrimayButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 100,
    marginHorizontal: 24,
    borderRadius: 8,
    padding: 16,
    backgroundColor: Colors.primary800,
    elevation: 4,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
    alignItems: "center",
  },
  numberInput: {
    height: 50,
    width: 50,
    textAlign: "center",
    fontSize: 32,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 8,
    fontWeight: "bold",
  },
  buttonContainer: {
    flexDirection: "row",
  },
});

export default StartGameScreen;
