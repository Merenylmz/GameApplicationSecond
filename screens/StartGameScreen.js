import { Alert,  KeyboardAvoidingView, ScrollView, StyleSheet, Text, TextInput, useWindowDimensions, View } from "react-native";
import React, { useState } from "react";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";
import InstructionText from "../components/ui/InstructionText";

const StartGameScreen = ({onPickNumber}) => {
  const [enteredValue, setEnteredValue] = useState('');
  const {height} = useWindowDimensions();

  const confirmButtonHandler = () =>{
    const chosenNumber = parseInt(enteredValue);
    if (isNaN(chosenNumber) || chosenNumber <=0 || chosenNumber > 99) {
      Alert.alert("Invalid Number!", "Number has to be a number between 1 and 99", [
        {text: "OK", style: "destructive", onPress:()=>setEnteredValue('')},
      ]);
      return;
    }
    onPickNumber(chosenNumber);
    setEnteredValue('');
  }

  //ScrollView ile KeyboardAvoidingView Birlikte kullanılmalı 
  return (
    <ScrollView>
      <KeyboardAvoidingView style={{flex: 1}} behavior="position">
        <View style={[styles.inputContainer, height < 420 ? {marginLeft: 65}:{}]}>
          <View>
            <InstructionText>Enter Number</InstructionText>
          </View>
          <TextInput style={styles.textInput} maxLength={2} keyboardType="number-pad" value={enteredValue} onChangeText={(e)=>setEnteredValue(e)}/>
          <View style={styles.buttonsContainer}>
            <View style={styles.buttonContainer}>
              <PrimaryButton onPress={()=>setEnteredValue('')}>Reset</PrimaryButton>
            </View>
            <View style={styles.buttonContainer}>
              <PrimaryButton onPress={confirmButtonHandler}>Confirm</PrimaryButton>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 100,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: '#450123ff',
    borderRadius: 8,
    width: '88%',
    alignItems: "center",

    //Android Shadow
    elevation: 4,
    //iOS Shadow
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25
    //-------------
  },
  textInput: {
    marginVertical: 8,
    color: '#ddb52f',
    width: 50,
    height: 60,
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    borderBottomColor: '#ddb52f',
    borderBottomWidth: 2,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: 'center',
  },
  buttonContainer:{
    flex: 1
  }
});
