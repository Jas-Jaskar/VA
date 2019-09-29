/*This is an Example of Facebook Login*/
import React, { Component } from 'react';
import { View, StyleSheet, Text, Alert, Image } from 'react-native';
import {Tab} from "./app/config/tabnavigator";
import {StackNavi} from "./app/config/stacknavigator";

export default class App extends Component {
  render(){
    return(
        <StackNavi/>
    );
  }
}