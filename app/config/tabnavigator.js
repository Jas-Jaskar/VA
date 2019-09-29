
import React from 'react';
import {View,Image} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import Home from '../screens/home';
import Settings from '../screens/settings';
import Entypo from 'react-native-vector-icons/Entypo';

const homeIcon = (<Entypo name="home" size={30} color="#900" />);
const settingsIcon = (<Icon name="wrench" size={30} color="#900" />);

const RootTab = createBottomTabNavigator({
        Home:{
            screen : Home,
            navigationOptions :{
                tabBarLabel:'Home',
                tabBarIcon: homeIcon
            }

        },
        Settings:{
            screen :Settings,
            navigationOptions : {
                tabBarLabel: 'Settings',
                tabBarIcon: settingsIcon
            }


        }
    },
    {
        tabBarPosition:'bottom',
        swipeEnabled:'true',
        tabBarOptions: {
            showIcon:'true',
            activeTintColor: '#e91e63',
            inactiveTintColor: 'black',
            activeBackgroundColor: 'grey'
        },
        labelStyle:{
            fontSize:22,
            padding:12
        }
    }
);

export const Tab = createAppContainer(RootTab);

