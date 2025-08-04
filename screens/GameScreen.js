import { Alert, FlatList, StyleSheet, Text, View } from "react-native";
import React, { use, useEffect, useState } from "react";
import Title from "../components/ui/Title";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import InstructionText from "../components/ui/InstructionText";
import {Ionicons} from "@expo/vector-icons";
import GuessLogContainer from "../components/game/GuessLogContainer";
import { useWindowDimensions } from "react-native";


const generateRandomNumber = (min, max, exclude) =>{
  const rndNum = Math.floor(Math.random() * (max-min)) + min;
  if (rndNum == exclude){
    return generateRandomNumber(min, max, exclude);
  } else {
    return rndNum;
  }
};

let maxBoundary = 100, minBoundary = 1;

const GameScreen = ({userNumber, onGameOver, setGuessRoundNumber}) => {
  const initialGuess = generateRandomNumber(1, 100, userNumber);
  const [currentGuess, setCurentGuess] = useState(initialGuess);
  const [guessLog, setGuessLog] = useState([]);
  const {width, height} = useWindowDimensions();
  

  useEffect(()=>{
    if (currentGuess == userNumber) {
      onGameOver();
    }
  }, [currentGuess, onGameOver, userNumber]);

  // useEffect(()=>{
  //   maxBoundary=100;
  //   minBoundary=1;
  // }, []);
  
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
      setGuessRoundNumber((prevGRN)=>prevGRN+=1);
      setCurentGuess(generateRandomNumber(minBoundary, maxBoundary, currentGuess));
      setGuessLog((prevLog)=>[currentGuess, ...prevLog]);
      
    }
  }
  
  return (
    <View style={styles.container}>
      <Title>Game Screen</Title>
      <NumberContainer>
        <Text>{currentGuess}</Text>
      </NumberContainer>
      <InstructionText style={{marginTop: 15}}>Higher or Lower</InstructionText>
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={()=>nextGuessHandler("lower")}>
            <Ionicons name="remove" size={24} color={"white"}/>
          </PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={()=>nextGuessHandler("greater")}>
            <Ionicons name="add" size={24} color={"white"}/>
          </PrimaryButton>
        </View>
      </View>
      <View style={{padding: 16}}>
        <FlatList 
          data={guessLog} 
          renderItem={(itemData)=>(
            <GuessLogContainer roundNumber={guessLog.length - itemData.index} guessNumber={itemData.item}/>
          )}
          keyExtractor={(item)=>item}
        />
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
