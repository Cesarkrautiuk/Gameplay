import React from 'react'

import { FlatList, ImageBackground, Text,View } from 'react-native'
import {Background} from '../../components/Backgroud'
import BannerPng from '../../assets/banner.png'
import {styles} from './styles'
import {Header} from '../../components/Header'
import {Member} from '../../components/Member'
import {Fontisto}  from '@expo/vector-icons'
import {BorderlessButton} from 'react-native-gesture-handler'
import { theme } from '../../global/styles/theme'
import {ListerHeader} from '../../components/ListHeader'
import {ListDivider} from '../../components/ListerDivider'
import {Buttton} from '../../components/ButtonIcon'
export function AppointmentDetails(){
    const members =[
        {
            id: '1',
            username: 'Rodrigo',
            avatar_url: 'http://github.com/rodrigorgtic.png',
            status:"online"
        },
        {
            id: '2',
            username: 'Rodrigo',
            avatar_url: 'http://github.com/rodrigorgtic.png',
            status:"ofiline"
        },
        
    ]
    return (
        <Background>
        <Header title="Detalhes" action={<BorderlessButton><Fontisto name="share" color={theme.colors.primary} size={24}/></BorderlessButton>} />
        <ImageBackground style={styles.banner} source={BannerPng}>
           <View style={styles.bannerContent}>
           <Text style={styles.title}>
                Lendário
            </Text>
            <Text style={styles.subtitle}>
                É hoje que vamos chegar challernger sem perder uma partida da md10
            </Text>
           </View>
        </ImageBackground>
        <ListerHeader title="Jogadores" subtitle="Total 3" />
        <FlatList data={members} keyExtractor={item => item.id} renderItem={({item})=>( 
        <Member data={item}  />
        )} ItemSeparatorComponent={ () => <ListDivider/>} style={styles.members} />
        <View style={styles.Footer}>
        <Buttton title="Entrar na partida" />
        </View>
       
        </Background>
    )
}