import { StyleSheet, Text, View } from "react-native";
import React from "react";

const GuessLogContainer = ({guessNumber, roundNumber}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>#{roundNumber}</Text>
      <Text style={styles.text}>Opponent's Guess : {guessNumber}</Text>
    </View>
  );
};

export default GuessLogContainer;

const styles = StyleSheet.create({
  container: {
    padding: 12,
    backgroundColor: '#ddb52f',
    borderColor: '#7a003dff',
    borderWidth: 1,
    borderRadius: 40,
    width: "100%",
    flexDirection: "row",
    marginVertical: 8,
    justifyContent: "space-between",
    elevation: 4,
    shadowColor: "black",
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: .25,
    shadowRadius: 3
  },
  text: {
    fontFamily: "open-sans-bold"
  }
});
