import React,{useState} from 'react';
import {View,Text} from 'react-native'
import {style} from './styles'
import {Profile} from '../../components/Profile'
import {Buttton} from './../../components/ButtonAdd'
import {CategoriSelect} from './../../components/CategorySelect'
import {ListerHeader} from './../../components/ListHeader'
import { FlatList } from 'react-native-gesture-handler';
import {Appoiments} from '../../components/Appointment'
import {ListDivider} from '../../components/ListerDivider'
import {Background} from '../../components/Backgroud'
import { useNavigation } from '@react-navigation/core';
export function Home (){
    const [category,setCategory] = useState('')
    const navigation = useNavigation()
    function handleCategotySelect (categoryId:string){
        categoryId === category ? setCategory('') : setCategory(categoryId)
    }
    function handleAppointmentDetais(){
        navigation.navigate('AppointmentDetails')
    }
    function hanbleAppointmentCreate(){
        navigation.navigate('AppointmentCreate')        
    }
    const appoiments = [
        {
            id:'1',
            guild:{
              id:'1',
              name:'Ledários',
              icon:null,
              owner:true  
            },
            category: '1',
            date:'22/06 ás 20:40',
            decripetion:'fsdfsddsf'
        },
        {
            id:'2',
            guild:{
              id:'1',
              name:'Ledários',
              icon:null,
              owner:true  
            },
            category: '1',
            date:'22/06 ás 20:40',
            decripetion:'fsdfsddsf'
        },
    ]
    return(
        <Background>
        <View style={style.header}>
        <Profile/>
        <Buttton onPress={hanbleAppointmentCreate}/>
        </View> 
      
        <CategoriSelect categoriesSelect={category} setCategory={handleCategotySelect} />
        <View style={style.content}>
        <ListerHeader title="Partida agendadas" subtitle="Total 6"/>
        <FlatList ItemSeparatorComponent={()=> <ListDivider/>} style={style.matches}  showsHorizontalScrollIndicator = {false}
        data={appoiments} keyExtractor={item => item.id}
        renderItem={({item})=>(
            <Appoiments data={item}  onPress={handleAppointmentDetais}/>
        )}
        />
        </View>
        </Background>
        
    )
}