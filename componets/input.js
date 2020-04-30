import React from 'react'
import {Text, StyleSheet, TextInput} from 'react-native'

const Input = props => {
    return(
        <TextInput {...props} style={{...style.input, ...props.style}} />
    )
}

const style = StyleSheet.create({
    input: {
        height: 30,
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        marginVertical: 10,
    }
})

export default Input;