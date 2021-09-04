import React, { useState } from 'react';
import IllustrationImg from '../../assets/illustration.png'
import { View, Text,StatusBar, TextInput, Image } from 'react-native'
import { styles } from './styles';
import { Buttton } from '../../components/ButtonIcon';
import { useNavigation } from '@react-navigation/core';
import {Background} from '../../components/Backgroud'
export function SignIn() {
    const navigation = useNavigation()
    function handleSignIn(){
        navigation.navigate('Home')
    }
    return (
        <Background>
        <View style={styles.container}>
            <Image style={styles.img} source={IllustrationImg} />
            <View style={styles.content}>
                <Text style={styles.title}>
                    Conecte-se {`\n`}
                    e organize suas {`\n`}
                    jogatinas 
                </Text>
                <Text style={styles.subtitle}>
                    Crie grupos para jogar seus games {`\n`}
                       favoritos com seus amigos
                </Text>
                <Buttton onPress={handleSignIn} title="Entrar com Discord"/>       
            </View>
        </View>
        </Background>
    )
}
