import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import ChangePassword from './components/ChangePassword';
import Login from './components/Login';

const {Navigator, Screen} = createStackNavigator();
function NavigationUser (){
    return(
        <Navigator>
            <Screen name = 'ChangePassword' component={ChangePassword}/>
            <Screen name = 'Login' component={Login}/>
        </Navigator>
    )
}
export default NavigationUser;
