import React,{ReactNode} from 'react';
import {Modal,View,ModalProps} from 'react-native'
import { Background } from '../Backgroud';
import {styles} from './styles'
type Props = ModalProps & {
    children:ReactNode
}
export function ModalView ({children,...rest}:Props){
return(
    <Modal  animationType="slide" {...rest}>
    <View style={styles.overlay}>
        <View style={styles.container}>
            <Background>
                <View style={styles.bar}/>
                {
                    children
                }
            </Background>
        </View>
    </View>
    </Modal>
)
}