import React from 'react';
import {View, StyleSheet, Text, Button, Image} from 'react-native';
import BodyText from '../components/BodyText';
import Colors from '../constants/colors';
import MainButton from '../components/MainButton';

const GameOverScreen = (props: any) => {
  return (
    <View style={styles.screen}>
      <Text>The Game is Over!</Text>
      <View style={styles.imageContainer}>
        <Image
          source={require('../assets/success.png')}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <View style={styles.resultContainer}>
        <BodyText style={styles.resultText}>Number of rounds: <Text style={styles.highlight}>{props.roundsNumber}</Text></BodyText>
      </View>
      <MainButton onPress={props.onRestart}>NEW GAME</MainButton>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: 'black',
    overflow: 'hidden',
    marginVertical: 30
  },
  image: {
    width: '100%',
    height: '100%'
  },
  highlight: {
    color: Colors.primary,
    fontFamily: 'open-sans-bold'
  },
  resultContainer: {
    marginHorizontal: 20,
    marginVertical: 20,
  },
  resultText: {
    textAlign: 'center',
    fontSize: 20
  }
});

export default GameOverScreen;