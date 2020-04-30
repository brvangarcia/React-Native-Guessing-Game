import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  ScrollView, Dimensions
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import Card from "../componets/card";
import Colors from "../constants/color";
import Input from "../componets/input";
import NumberContainer from "../componets/numberContainer";
import Vutton from "../componets/vutton";

const generateRandom = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const rndNum = Math.floor(Math.random() * (max - min)) + min;
  if (rndNum === exclude) {
    return generateRandom(min, max, exclude);
  } else {
    return rndNum;
  }
};

const renderList = value => {
  <View key={value}>
    <Text>{value}</Text>
  </View>
};

const GameScreen = props => {
  const initialGuess = generateRandom(1, 100, props.userChoice);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [passedGuesses, setPassedGuesses] = useState([initialGuess]);
  const currentLow = useRef(1);
  const currentMax = useRef(100);

  const { userChoice, onGameOver } = props;

  useEffect(() => {
    if (currentGuess === userChoice) {
      onGameOver(passedGuesses.length);
    }
  }, [currentGuess, userChoice, onGameOver]);

  const nextGuess = direction => {
    if (
      (direction === "lower" && currentGuess < props.userChoice) ||
      (direction === "greater" && currentGuess > props.userChoice)
    ) {
      Alert.alert("Don't lie", "You know you r wrong", [
        { text: "sorry", style: "cancel" }
      ]);
      return;
    }
    if (direction === "lower") {
      currentMax.current = currentGuess;
    } else {
      currentLow.current = currentGuess + 1;
    }
    const nexGuess = generateRandom(
      currentLow.current,
      currentMax.current,
      currentGuess
    );
    setCurrentGuess(nexGuess);

    setPassedGuesses(curPassed => [nexGuess, ...curPassed]);
  };
  return (
    <View style={style.screen}>
      <Text>Oppoents Number</Text>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={style.buttonContainer}>
        <Vutton onPress={nextGuess.bind(this, "lower")}>
          <Ionicons name="md-remove" />
        </Vutton>
        <Vutton onPress={nextGuess.bind(this, "greater")}>
          <Ionicons name="md-add" />
        </Vutton>
      </Card>
      <ScrollView>
        {passedGuesses.map(guess => (
                    renderList(guess)
                ))}
      </ScrollView>
    </View>
  );
};

const style = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center"
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: Dimensions.get('window').height > 600 ? 20 : 10,
    width: 400,
    maxWidth: "90%"
  }
});

export default GameScreen;
