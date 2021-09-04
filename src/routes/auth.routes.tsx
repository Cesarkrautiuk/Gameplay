import React from 'react';

import {createStackNavigator} from '@react-navigation/stack'
import {Home} from '../Screens/Home'
import {SignIn} from '../Screens/Signin'
import {AppointmentDetails} from '../Screens/AppointmentDetails'
import {AppointmentCreate} from '../Screens/AppoinmentCreate'
import { theme } from '../global/styles/theme';

const { Navigator,Screen} = createStackNavigator()

export function AuthRoute(){
    return(
        <Navigator headerMode="none" screenOptions={{cardStyle:{backgroundColor:theme.colors.secondary100}}}>
        <Screen name="SignIn" component={SignIn}/>
        <Screen name="Home" component={Home}/>
        <Screen name="AppointmentDetails" component={AppointmentDetails}/>
        <Screen name="AppointmentCreate" component={AppointmentCreate}/>
        </Navigator>
    )
} 