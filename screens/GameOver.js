import React, {useState, useRef, useEffect} from 'react'
import {View, Text, StyleSheet, TextInput, Button, TouchableWithoutFeedback, Keyboard, Alert, Image, Dimensions, ScrollView} from 'react-native'

import Card from '../componets/card'
import Colors from '../constants/color'
import Input from '../componets/input'
import NumberContainer from '../componets/numberContainer'

import Vutton from '../componets/vutton'


const GameOver = props => {
    console.log(props);
    
    return(
        <ScrollView>    
            <View style={style.screen}>
            <Text> Over</Text>
            <View style={style.view}>
            <Image style={style.image} source={require('../assets/logo.png')} />
            </View>
            
            <Text style={style.highlight}>Rounds: {props.numberRounds}</Text>
            <Text style={style.highlight}>Number was{props.userNumber}</Text>
            <Vutton  onPress={props.onRestart} >new game </Vutton>
        </View>
        </ScrollView>
        
        
    )
}

const style = StyleSheet.create({
        screen: {
            flex: 1,
            justifyContent:'center',
            alignItems:'center'
        },
        image : {
           
           width: '100%',
           height: '100%'
        }, 
        view: {
            overflow: 'hidden',
            width: Dimensions.get('window').width * 0.7,
            height: Dimensions.get('window').width * 0.7,
            borderRadius: Dimensions.get('window').width * 0.7 / 2,
            borderWidth: 3,
            borderColor: 'black'
        }, highlight: {
            color: Colors.primary
        }
})

export default GameOver;