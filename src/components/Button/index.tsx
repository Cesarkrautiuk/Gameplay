import React from 'react'
import { Text } from 'react-native'
import {RectButton,RectButtonProps } from 'react-native-gesture-handler'
import DiscordImg from '../../assets/discord.png'

import {styles} from './styled'
type Props = RectButtonProps & {
    title:string
}
export function Buttto({title,...rest}:Props){
    return(
        <RectButton {...rest} style={styles.container}> 
        <Text style={styles.title}>
        {title}
        </Text>
        </RectButton>
    )
}

