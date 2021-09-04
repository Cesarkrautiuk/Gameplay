import React from 'react';
import {styles} from './styled'
import {View,TextInput,TextProps} from 'react-native'

export function SmallInput({...rest}){
    return (
        <TextInput  style={styles.container} keyboardType="numeric"/> 
    )
}