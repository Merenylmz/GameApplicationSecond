import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

const PrimaryButton = ({children, onPress}) => {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable onPress={onPress} style={({pressed})=> pressed ? [styles.buttonInnerContainer, styles.pressed] : styles.buttonInnerContainer} android_ripple={{color: "#640223ff"}}>
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    margin: 4,
    borderRadius: 28,
    overflow: 'hidden',
  },
  buttonInnerContainer:{
    backgroundColor: '#7a003dff',
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
    borderWidth: 2,
    borderColor: '#7a003dff',
  },
  buttonText: {
    color: "#fff",
    textAlign: 'center',
    fontFamily: "open-sans-bold"
  },
  pressed: {
    opacity: 0.75,
    backgroundColor: '#640223ff',
    borderColor: '#640223ff',
    borderWidth: 2,
  }
});
