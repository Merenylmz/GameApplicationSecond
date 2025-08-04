import { View, Image, Text, StyleSheet, Dimensions, useWindowDimensions, Platform } from 'react-native';

import Title from '../components/ui/Title';
import PrimaryButton from '../components/ui/PrimaryButton';

function GameOverScreen({userNumber, roundsNumber, onStartNewGame}) {
  const {height} = useWindowDimensions();
  return (
    <View style={[styles.rootContainer, {padding: height < 420 ? 55:45}]}>
      <Title>GAME OVER!</Title>
        <View style={[styles.imageContainer, { width: height < 420 ? 150 : 300, height: height < 420 ? 150 : 300, borderRadius: height < 420 ? 75 : 150, margin: height < 420 ? 10 : 36}]}>
          <Image
            style={styles.image}
            source={require('../assets/images/success.png')}
          />
        </View>
      <Text style={[styles.summaryText, {fontSize: height < 420 ? 16 : 24}]}>
        Your phone needed <Text style={styles.highlight}>{roundsNumber}</Text>{' '}
        rounds to guess the number{' '}
        <Text style={styles.highlight}>{userNumber}</Text>.
      </Text>
      {/* Platform kodu ile hangi işletim sisteminde olduğumuz algılayabiliriz */}
      <Text>{Platform.OS == "ios" ? "IOS":"ANDROID" }</Text>
      <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
    </View>
  );
}

export default GameOverScreen;


const styles = StyleSheet.create({
  rootContainer: {
    alignItems: "center"
  },
  imageContainer: {
    borderWidth: 3,
    borderColor: "black",
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  summaryText: {
    fontFamily: 'open-sans',
    textAlign: 'center',
    marginBottom: 24,
  },
  highlight: {
    fontFamily: 'open-sans-bold',
    color: "black",
  },
});