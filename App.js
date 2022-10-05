import { useState } from "react";
import { Button, StyleSheet, View, FlatList } from "react-native";
import { StatusBar } from "expo-status-bar";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";
import NoItemFound from "./components/NoItemFound";

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [couseGoals, setCouseGoals] = useState([]);

  const startAddGoalHandler = () => {
    setModalIsVisible(true);
  };

  const endAddGoalHandler = () => {
    setModalIsVisible(false);
  };

  const addGoalHandler = (enteredGoalText) => {
    setCouseGoals((currState) => [
      ...currState,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
    setModalIsVisible(false);
  };

  const deleteGoalHandler = (id) => {
    setCouseGoals((prevState) => {
      return prevState.filter((item) => {
        return item.id !== id;
      });
    });
  };

  return (
    <>
      <StatusBar style='light' />
      <View style={styles.appContainer}>
        <Button
          title='Add New Goal'
          color='#5e0acc'
          onPress={startAddGoalHandler}
        />

        <GoalInput
          onClickHandler={addGoalHandler}
          visible={modalIsVisible}
          onCancel={endAddGoalHandler}
        />
        <View style={styles.goalsContainer}>
          {couseGoals.length === 0 ? (
            <NoItemFound value={"No Goals Found !"} />
          ) : (
            <FlatList
              data={couseGoals}
              renderItem={(itemData) => {
                return (
                  <GoalItem
                    id={itemData.item.id}
                    text={itemData.item.text}
                    onDeleteItem={deleteGoalHandler}
                  />
                );
              }}
              keyExtractor={(item) => {
                return item.id;
              }}
            />
          )}
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },

  goalsContainer: {
    flex: 5,
  },
});
