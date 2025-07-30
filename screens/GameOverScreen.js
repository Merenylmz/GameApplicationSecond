import { StyleSheet, Text, View } from "react-native";
import React from "react";

const GameOverScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={{color: "#fff"}}>GameOverScreen</Text>
    </View>
  );
};

export default GameOverScreen;

const styles = StyleSheet.create({
    container:{
        padding: 40
    }
});
