import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'

const Vutton = props => {
    return(
        <TouchableOpacity onPress={props.onPress}>
            <View style={style.button}>
                <Text  style={style.buttonText}>{props.children}</Text>
            </View>
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    button :{
        backgroundColor: 'green',
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 25
    
    },
    buttonText: {
        color: 'white',
    }
})

export default Vutton;