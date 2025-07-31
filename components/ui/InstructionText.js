import { StyleSheet, Text, View } from "react-native";
import React from "react";

const InstructionText = ({children, style}) => {
  return <Text style={[style, styles.text]}>{children}</Text>;
};

export default InstructionText;

const styles = StyleSheet.create({
  text:{
    fontSize: 24,
    fontFamily: "open-sans-bold",
    color: '#ddb52f',
    textAlign: 'center',
    borderWidth: 3,
    borderColor: '#ddb52f',
    padding: 12,
    borderRadius: 8
  }
});
