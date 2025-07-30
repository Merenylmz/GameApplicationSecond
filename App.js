import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, SafeAreaView } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [isGameOver, setIsGameOver] = useState(true);

  const pickedNumberHandler = (pickedNumber) => {
    setUserNumber(pickedNumber);
    setIsGameOver(false);
  };

  const gameOverHandler = ()=>{
    setIsGameOver(true);
  };

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />
  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />;
  }
  if (isGameOver && userNumber) {
    screen = <GameOverScreen />
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
