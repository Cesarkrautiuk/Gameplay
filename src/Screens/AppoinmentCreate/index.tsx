import React, { useState } from 'react'
import { RectButton } from 'react-native-gesture-handler'
import { FlatList, ImageBackground, Text, View,ScrollView,KeyboardAvoidingView, Platform, Modal } from 'react-native'
import { Background } from '../../components/Backgroud'
import BannerPng from '../../assets/banner.png'
import { styles } from './styles'
import { Header } from '../../components/Header'
import { Buttto} from '../../components/Button'
import { Fontisto } from '@expo/vector-icons'
import { BorderlessButton } from 'react-native-gesture-handler'
import { theme } from '../../global/styles/theme'
import { CategoriSelect } from '../../components/CategorySelect'
import { TextArea } from '../../components/TextArea'
import { SmallInput } from '../../components/SmallInput'
import { Feather } from '@expo/vector-icons'
import { GuildIcon } from '../../components/GuidIcon'
import { ModalView } from '../../components/modalView'
import { Gulds } from '../Guilds'
export function AppointmentCreate() {
    const members = [
        {
            id: '1',
            username: 'Rodrigo',
            avatar_url: 'http://github.com/rodrigorgtic.png',
            status: "online"
        },
        {
            id: '2',
            username: 'Rodrigo',
            avatar_url: 'http://github.com/rodrigorgtic.png',
            status: "ofiline"
        },

    ]
    const [category, setCategory] = useState('')
    return (
        <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios'?'padding' : 'height'}>
            <ScrollView>
        <Background>
            <Header title="Agendar partida" action={<BorderlessButton><Fontisto name="share" color={theme.colors.primary} size={24} /></BorderlessButton>} />
            <Text style={[styles.label, { marginLeft: 24, marginTop: 36, marginBottom: 18 }]}>
                Categoria
        </Text>
            <CategoriSelect hasCheck setCategory={setCategory} categoriesSelect={category} />
            <View style={styles.form}>
                <RectButton>
                    <View style={styles.select}>
                        <View style={styles.image}>
                            <GuildIcon />
                        </View>
                        <View style={styles.selectBody}>
                            <Text style={styles.label}>
                                Selecione um servidor
                </Text>
                        </View>
                        <Feather name="chevron-right" color={theme.colors.heading} size={18} />
                    </View>
                </RectButton>
                <View style={styles.field}>
                    <View>
                        <Text style={styles.label}>Dia e mês</Text>
                        <View style={styles.column}>
                            <SmallInput maxLength={2} />
                            <Text style={styles.divider}>/</Text>
                            <SmallInput maxLength={2} />
                        </View>
                    </View>
                    <View>
                        <Text style={styles.label}>Hora e minuto</Text>
                        <View style={styles.column}>
                            <SmallInput maxLength={2} />
                            <Text style={styles.divider}>:</Text>
                            <SmallInput maxLength={2} />
                        </View>
                    </View>
                </View>
                <View style={[styles.field,{marginBottom:12}]}>
                    <Text style={styles.label}>Descricao</Text>
                    <Text style={styles.catacteresLimit}>Max 100 catacteres</Text>
                </View>
                <TextArea multiline maxLength={100} numberOfLines={5} autoCorrect={false}/>
                <View style={styles.footer}>
                     <Buttto title="Agendar"/>
                </View>
            </View>
        </Background>
        </ScrollView>
        <ModalView >
        <Gulds/>
        </ModalView>
        </KeyboardAvoidingView>
    )
}