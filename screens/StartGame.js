import React, {useState, useEffect} from 'react'
import {View, Text, StyleSheet, TextInput, Button, TouchableWithoutFeedback, Keyboard, Alert, Dimensions, ScrollView, KeyboardAvoidingView} from 'react-native'

import Card from '../componets/card'
import Colors from '../constants/color'
import Input from '../componets/input'
import NumberContainer from '../componets/numberContainer'
import Vutton from '../componets/vutton'

const StartGame = props => {
    const [enteredValue, setEnterdValue] = useState('')
    const [confirmed, setConfirm] = useState(false)
    const [selectedNum , setSelectedNum] = useState()
    const [buttonWidth, setButtonWidth] = useState(Dimensions.get('window').width / 4)

   
    useEffect(()=>{
        const updateLayout = () => {
            setButtonWidth(Dimensions.get('window').width / 4)
        }
        Dimensions.addEventListener('change', updateLayout)
        return (() => {
            Dimensions.removeEventListener('change', updateLayout)
        })
    })

   

    const numberInput = inputText => {
        setEnterdValue(inputText.replace(/[^0-9]/g, ''));
    }
    const resetInput = () => {
        setEnterdValue('')
        setConfirm(false)
    }
    const firmInput = () => {
        const chosenNumber = parseInt(enteredValue)
        if(isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99){
            Alert.alert('Invalid number', 'Number has to be a number', [{text: 'okay', style:'destructive', onPress: resetInput}])
            return;
        }
        setConfirm(true)
        setEnterdValue('')
        setSelectedNum(chosenNumber)
        Keyboard.dismiss()
    }

    let confirmedOutput;

    if(confirmed) {
        confirmedOutput =
        <Card style={style.summary}>
            <Text>You selected</Text>
            <NumberContainer>{selectedNum}</NumberContainer>
            <Vutton onPress={() => {
                props.onStart(selectedNum)
            }} >START GAME</Vutton>
        </Card>
        
    }
    return(
        <ScrollView>
            <KeyboardAvoidingView behavior='position' keyboardVerticalOffset={30}>
            <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss()
        }}>
            <View style={style.screen}>
            <Text style={style.title}>Start a Game</Text>
            <Card style={style.inputContainer}>
                <Text>Select a Number</Text>
                <Input style={style.input} blurOnSubmit autoCapitalize='none' autoCorrect={false} keyboardType='number-pad'  maxLength={2} onChangeText={numberInput} value={enteredValue} />
                <View style={style.buttonContainer}>
                    <View style={{width: buttonWidth}}>
                    <Button title='Reset' onPress={resetInput} color={Colors.accent} />
                </View>
                <View style={{width: buttonWidth}}>
                <Button title='Confirm' onPress={firmInput} color={Colors.primary} />
                </View>
                
                
                </View>
            </Card>
            {confirmedOutput}
        </View>
        </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
             
        </ScrollView>
       
        
    )
}

const style = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems:'center',
        
    },
    title: {
        fontSize: 20,
        marginVertical: 10,
        
    },
    inputContainer:{
        width: '80%',
        minWidth: 300,
        maxWidth: '95%',
        alignItems:'center',
        
    }, buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15
    },
    // button: {
    //     width: ,
    // },
    input: {
        width: 50,
        textAlign:'center'
    },
    summary : {
        marginTop: 20,
        alignItems:'center'
    }
})

export default StartGame;