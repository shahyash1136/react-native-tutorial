import { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import PrimayButton from "../components/PrimayButton";

const StartGameScreen = () => {
  const [inputValue, setInputValue] = useState("");
  const changeTextHandler = () => {};
  const resetHandler = () => {
    console.log("Reset Button");
  };
  const confrimHandler = () => {
    console.log("Confirm Button");
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
    backgroundColor: "#3b021f",
    elevation: 4,
    shadowColor: "#000000",
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
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 2,
    color: "#ddb52f",
    marginVertical: 8,
    fontWeight: "bold",
  },
  buttonContainer: {
    flexDirection: "row",
  },
});

export default StartGameScreen;
