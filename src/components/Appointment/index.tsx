import React from 'react';
import { View, Text } from 'react-native'
import { GuildIcon } from '../GuidIcon'
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'
import { styles } from './styles';
import { categories } from '../../ultil/categories';
import PlayerSvg from '../../assets/player.svg'
import CaledarSvg from '../../assets/calendar.svg'
import { theme } from '../../global/styles/theme';
export type GuildProps = {
    id: string,
    name: string,
    icon: null,
    owner: boolean,
}
export type AppointmentProps = {
    id: string,
    guild: GuildProps,
    category: string,
    date: string,
    description: string
}
type Props = RectButtonProps & {
    data: AppointmentProps
}
export function Appoiments({ data, ...rest }: Props) {
    const [category] = categories.filter(item => item.id === data.category)
    const { owner } = data.guild
    const { primary, on } = theme.colors
    return (
        <RectButton  {...rest}>
            <View style={styles.container}>
                <GuildIcon />
                <View style={styles.content}>
                    <View style={styles.header}>
                        <Text style={styles.title}>
                            {
                                data.guild.name
                            }
                        </Text>
                        <Text style={styles.category}>
                            {
                                category.title
                            }
                        </Text>
                    </View>
                    <View style={styles.footer}>
                        <View style={styles.dateInfo}>
                            <CaledarSvg />
                            <Text style={styles.date}>
                                {
                                    data.date
                                }
                            </Text>
                        </View>

                        <View style={styles.playerInfo}>
                            <PlayerSvg fill={owner ? primary : on}></PlayerSvg>
                            <Text style={[styles.player, { color: owner ? primary : on }]}>
                                {owner ? 'Anfitrião' : 'Visitates'}
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
        </RectButton>
    )
}