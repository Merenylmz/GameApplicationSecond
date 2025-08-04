import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Title = ({children}) => {
  return <Text style={styles.title}>{children}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  title:{
    fontSize: 24,
    fontFamily: "open-sans-bold",
    color: '#ffffffff',
    textAlign: 'center',
    borderWidth: 2,
    borderColor: '#ffffffff',
    padding: 12,
    // maxWidth: "80%",
    // width: 300
  }
});
