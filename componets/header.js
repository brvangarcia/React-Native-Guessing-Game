import React from 'react'
import {View, Text, StyleSheet, Platform} from 'react-native'

const Header = props => {
    return(
        <View style={style.header}>
            <Text style={style.headerTitle}>{props.title}</Text>
        </View>
    )
}

const style = StyleSheet.create({
    header: {
        width: '100%',
        height: 90,
        paddingTop: 36,
        backgroundColor: Platform.OS === 'android' ? 'gray' : 'white',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomColor: Platform.OS === 'ios' ? '#ccc' : 'transparent',
        borderBottomWidth: Platform.OS === 'ios' ? 1 : 0
    },
    headerTitle: {
        color: 'black',
        fontSize: 18,

    }
})

export default Header;