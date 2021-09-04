import React from 'react'
import { ScrollView} from 'react-native'
import {categories} from '../../ultil/categories'
import {Category} from '../Category/'

import {styles} from './style'
type Props = {
    categoriesSelect:string
    setCategory:(category:string) => void,
    hasCheck?: boolean
}
export function CategoriSelect({categoriesSelect,setCategory,hasCheck = false}:Props){
    return(
        <ScrollView contentContainerStyle={{paddingRight:40}}  showsHorizontalScrollIndicator={false}  horizontal style={styles.container}>
       {
           categories.map(categories =>(
               <Category key={categories.id} title={categories.title} icon={categories.icon}
               checked={categories.id === categoriesSelect}  onPress={()=>setCategory(categories.id)}
               hasCheck={hasCheck}
               />
           ))
       }
       
        </ScrollView>
    )
}