import React from 'react';
import {View,Image} from 'react-native';
import { Tab } from  './tabnavigator';
import Login from '../screens/login';
import RegisterEmail from '../screens/registerEmail';
import Dashboard from "../screens/dashboard";
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import RegisterPassword from "../screens/registerPassword";
import RegisterUsername from "../screens/registerUsername";


const Stack = createStackNavigator(
    {
        Dashboard :{
            screen:Dashboard,
            navigationOptions :{
                header:null
            }
        },
        Login :{
            screen:Login,
            navigationOptions :{
                title:'Login'
            }
        },
        RegisterEmail :{
            screen:RegisterEmail,
            navigationOptions :{
                title:'Signup'
            }
        },
        RegisterUsername :{
            screen:RegisterUsername,
            navigationOptions :{
                title:'Signup'
            }
        },
        RegisterPassword :{
            screen:RegisterPassword,
            navigationOptions :{
                title:'Signup'
            }
        },
        ForgetPassword :{
            screen:Tab,
            navigationOptions:{
                title:'ForgetPassword'
            }
        },
        Tab :{
            screen:Tab,
            navigationOptions :{
                header:null
            }
        }
    },
    {initialRouteName: 'Dashboard'});

export const StackNavi = createAppContainer(Stack);
