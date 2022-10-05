import React from "react";
import { Text, Pressable, View, StyleSheet } from "react-native";

const PrimayButton = ({ children, clickHandler }) => {
  const pressHandler = () => {
    console.log("pressed");
  };
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
        onPress={clickHandler}
        android_ripple={{ color: "#640233" }}>
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
    flex: 1,
  },
  buttonInnerContainer: {
    backgroundColor: "#72063c",
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonText: {
    color: "#ffffff",
    textAlign: "center",
  },
  pressed: {
    opacity: 0.75,
  },
});

export default PrimayButton;
