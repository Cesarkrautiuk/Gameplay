import React from 'react'
import { Text, Image, View, TouchableOpacityProps } from 'react-native'
import { SvgProps } from 'react-native-svg'
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'
import { styles } from './styled'
import { LinearGradient } from 'expo-linear-gradient'
import { theme } from '../../global/styles/theme'
type Props = RectButtonProps & {
    title: string,
    icon: React.FC<SvgProps>,
    checked?: boolean,
    hasCheck?:boolean

}
export function Category({ title, icon: Icon, checked = true, hasCheck = false,...rest }: Props) {
    const { secondary80, secondary100,secondary85,secondary40,secondary50  } = theme.colors
    return (
        <RectButton {...rest} >
            <LinearGradient style={styles.container} colors={[secondary80, secondary100]}>
                <LinearGradient colors={[checked ? secondary85 : secondary50,secondary40]} style={[styles.content, { opacity: checked ? 1 : 0.5 }]} >
               {        hasCheck &&
                        <View style={checked ? styles.checked : styles.check}/>
               }
                    <Icon width={48} height={48} />
                    <Text style={styles.title}>
                        {
                            title
                        }
                    </Text>
                </LinearGradient>
            </LinearGradient>
        </RectButton>
    ) 
}

