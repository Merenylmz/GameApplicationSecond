import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, SafeAreaView } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient';
import { useEffect, useState } from 'react';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';
import {useFonts} from "expo-font";
import AppLoading from './screens/AppLoading';

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [isGameOver, setIsGameOver] = useState(true);
  const [guessRoundNumber, setGuessRoundNumber] = useState(0);

  const [fontLoaded, error] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });

  
  if (!fontLoaded) {
    return <AppLoading />
  }

  const pickedNumberHandler = (pickedNumber) => {
    setUserNumber(pickedNumber);
    setIsGameOver(false);
  };

  const gameOverHandler = ()=>{
    setIsGameOver(true);
  };

  const startNewGameHandler = () =>{
    setUserNumber(null);
    setGuessRoundNumber(0);
  }

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />
  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} setGuessRoundNumber={setGuessRoundNumber}/>;
  }
  if (isGameOver && userNumber) {
    screen = <GameOverScreen userNumber={userNumber} onStartNewGame={startNewGameHandler} roundsNumber={guessRoundNumber} />
  }

  return (
    <LinearGradient colors={["#4e0329", "#ddb52f"]} style={styles.container}>
      <ImageBackground source={require('./assets/images/background.png')} imageStyle={{opacity: .15}} resizeMode="cover" style={styles.container}>
        <SafeAreaView>
          {screen}
        </SafeAreaView>
      </ImageBackground>
      <StatusBar style="light" />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
