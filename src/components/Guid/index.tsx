import React from 'react';
import { View,TouchableOpacityProps, TouchableOpacity,Text } from 'react-native';
import {styles} from './syled'
import {Feather} from '@expo/vector-icons'
import {GuildIcon} from '../GuidIcon'
import { theme } from '../../global/styles/theme';
export type GuidProps = {
    id:string,
    name:string,
    icon:string | null   
    owner:boolean
}

 type Props = TouchableOpacityProps & {
data:GuidProps
}
export function Guild({data,...rest}:Props){
    return (
        <TouchableOpacity style={styles.container} activeOpacity={.07} {...rest}>
            <GuildIcon/>
            <View style={styles.content}>
            <View>
                <Text style={styles.title}>data.name</Text>
                <Text style={styles.type}>
                    {
                        data.owner ? 'Administrador' :'convidado'
                    }
                </Text>
            </View>
            </View>
            <Feather name="chevron-right"  color={theme.colors.heading} size={24}/>
        </TouchableOpacity>
    )
}