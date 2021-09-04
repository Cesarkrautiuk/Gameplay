import React from 'react';
import {Text, View} from 'react-native'
import { Avatar } from '../Avatar';
import { style } from './styled';

export function Profile(){
    return (
        <View style={style.container}>
        <Avatar urlImage="https:github.com/rodrigorgtic.png"/>
        <View>
            <View style={style.user}>
                <Text style={style.greeting}>Ola</Text>
                <Text style={style.username}>
                    Cesar k
                </Text>
            </View>
            <Text style={style.message}>
                Hoje e dia de vitória
            </Text>
        </View>
        </View>
    )
}