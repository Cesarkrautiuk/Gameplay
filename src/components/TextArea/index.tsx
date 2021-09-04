import React from 'react';
import {styles} from './styled'
import {View,TextInput,TextProps} from 'react-native'

export function TextArea({...rest}){
    return (
        <TextInput  style={styles.container}/> 
    )
} 