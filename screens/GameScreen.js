import { Alert, StyleSheet, Text, View } from "react-native";
import React, { use, useEffect, useState } from "react";
import Title from "../components/ui/Title";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";

const generateRandomNumber = (min, max, exclude) =>{
  const rndNum = Math.floor(Math.random() * (max-min)) + min;
  if (rndNum == exclude){
    return generateRandomNumber(min, max, exclude);
  } else {
    return rndNum;
  }
};

let maxBoundary = 100, minBoundary = 1;

const GameScreen = ({userNumber, onGameOver}) => {
  const initialGuess = generateRandomNumber(1, 100, userNumber);
  const [currentGuess, setCurentGuess] = useState(initialGuess);

  useEffect(()=>{
    if (currentGuess == userNumber) {
      onGameOver();
    }
  }, [currentGuess, onGameOver, userNumber]);
  
  const nextGuessHandler = (direction) =>{ // direction is 'lower' or 'greater'
    if ((direction === "lower" && currentGuess < userNumber) || (direction === "greater" && currentGuess > userNumber)) {
      return Alert.alert("Don't lie!", "You know that this is wrong...", [
        {text: "Sorry!", style: "cancel"}
      ]);
      
    } else{
      if (direction == "lower") {
        maxBoundary = currentGuess - 1;
      } else if (direction == "greater") {
        minBoundary = currentGuess + 1
      }
      console.log(`minBoundary: ${minBoundary}, maxBoundary: ${maxBoundary}`);
      
      setCurentGuess(generateRandomNumber(minBoundary, maxBoundary, currentGuess));

    }
  }
  
  return (
    <View style={styles.container}>
      <Title>Game Screen</Title>
      <NumberContainer>
        <Text>{currentGuess}</Text>
      </NumberContainer>
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={()=>nextGuessHandler("lower")}>-</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={()=>nextGuessHandler("greater")}>+</PrimaryButton>
        </View>
      </View>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  container: {
    padding: 40,
  },
  buttonsContainer: {
    marginTop: 15,
    flexDirection: "row",
    justifyContent: 'center',
  },
  buttonContainer:{
    flex: 1
  }
});
