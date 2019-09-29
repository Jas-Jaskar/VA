
import React from 'react';
import {View,Image} from 'react-native';
import { Tab } from  './tabnavigator';
import Login from '../screens/login';
import Signup from '../screens/signup';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


const Stack = createStackNavigator(
    {
        Login_Page :{
            screen:Login,
            navigationOptions :{
                header:null
            }
        },
        Signup_Page :{
            screen:Signup,
            navigationOptions :{
                header:null
            }
        },
        Tab_Navigator :{
            screen:Tab,
            navigationOptions :{
                header:null
            }
        }
    },
    {initialRouteName: 'Login_Page'});

export const StackNavi = createAppContainer(Stack);
