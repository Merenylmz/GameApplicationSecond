import { StyleSheet, Text, View } from "react-native";
import React from "react";
import {Ionicons} from "@expo/vector-icons";

const AppLoading = () => {
  return (
    <View style={styles.container}>
      <Ionicons name="reload" color={"black"} size={65}/>
    </View>
  );
};

export default AppLoading;

const styles = StyleSheet.create({
    container:{
        justifyContent: "center",
        alignItems: "center",
        flex: 1
    }
});
