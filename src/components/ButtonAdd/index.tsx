import React from 'react'
import {RectButton,RectButtonProps } from 'react-native-gesture-handler'
import { Text,Image,View,TouchableOpacityProps } from 'react-native'
import {styles}from './styled'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import { theme } from '../../global/styles/theme'
type Props = RectButtonProps;
export function Buttton({...rest}:Props){
    return(
        <RectButton {...rest} style={styles.container}>
            <MaterialCommunityIcons name="plus" color={theme.colors.heading} size={24}/>
        </RectButton>
    )
} 