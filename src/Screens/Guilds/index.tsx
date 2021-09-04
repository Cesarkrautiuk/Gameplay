import React from 'react';
import { View,FlatList } from 'react-native';
import { Guild } from '../../components/Guid';
import { ListDivider } from '../../components/ListerDivider';
import {styles} from './styled'

export function Gulds(){
    const guilds = [
        {
            id:'1',
            name:'Lendários',
            icon:'null',
            owner:true,
        } ,   
        {
            id:'2',
            name:'Lendários',
            icon:'null',
            owner:true,
        }     
    ]
    return (
        <View style={styles.container}>
            <FlatList data={guilds} keyExtractor={item =>item.id} renderItem={({item})=>(
                <Guild data={item}/>
            )}
            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={()=> <ListDivider/>}
           style={styles.guilds}
           />
        </View>
    )
}