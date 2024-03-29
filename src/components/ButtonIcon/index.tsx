import React from 'react'
import { Text,Image,View,TouchableOpacityProps } from 'react-native'
import {RectButton,RectButtonProps } from 'react-native-gesture-handler'
import DiscordImg from '../../assets/discord.png'

import {styles} from './styled'
type Props = RectButtonProps & {
    title:string
}
export function Buttton({title,...rest}:Props){
    return(
        <RectButton {...rest} style={styles.container}>
        <View style={styles.iconWrapper}>
            <Image source={DiscordImg} style={styles.icon}/>
        </View>
        <Text style={styles.title}>
        {title}
        </Text>
        </RectButton>
    )
}

