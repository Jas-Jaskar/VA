import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, AsyncStorage, Keyboard,ImageBackground,Button } from 'react-native';
import {styles} from "../stylesheets/dashBoardStyles";
import {
    GoogleSignin,
    GoogleSigninButton,
    statusCodes,
} from 'react-native-google-signin';
import {AccessToken, GraphRequest, GraphRequestManager, LoginButton,LoginManager} from "react-native-fbsdk";

export default class Dashboard extends Component {

    constructor(props){
        super(props);
        this.fbUserInfo = {};
        this.state= {};
    }


    render()
    {
        return(
            <ImageBackground source={require('../res/bgImage.jpg')} style={styles.container}>
                <View style = {styles.SquareShapeView} >
                <Text style={styles.header}> DASHBOARD </Text>
                <Text> {'\n'} </Text>
                <Button style={styles.button} onPress={() => this.props.navigation.replace('Login', {name: 'login'})} title="Sign-in"/>
                <Text> {"\n"} </Text>
                <Text style={styles.text}> Dont have an account </Text>
                <Button style={styles.button} onPress={() => this.props.navigation.replace('RegisterEmail', {name: 'signup'})} title="Sign-up"/>
                </View>
            </ImageBackground>

        )
    }
}
