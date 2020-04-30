import React, {useState} from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';

import Header from './componets/header'
import StartGame from './screens/StartGame'
import GameScreen from './screens/GameScreen'
import GameOver from './screens/GameOver'



export default function App() {
  const [selectedNum, setSelectednum] = useState('')
  const [rounds, setRounds] = useState(0)

  const configureGame = () => {
    setRounds(0)
    setSelectednum(null)
  }
  
  const gameOver = numberOf => {
    setRounds(numberOf)
  }

  const startGame = (selectedNum) => {
    setSelectednum(selectedNum)
    setRounds(0)
  }
  let content = <StartGame onStart={startGame} />;

  if(selectedNum && rounds <= 0) {
    content = <GameScreen userChoice={selectedNum} onGameOver={gameOver} />
  }else if(rounds > 0) {
    
     content = <GameOver numberRounds={rounds} userNumber={selectedNum} onRestart={configureGame} />
  }
  return (
    <View style={styles.screen}>
     <Header title='Guess a Number' />
     {content}
     
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex:1
  }
});
