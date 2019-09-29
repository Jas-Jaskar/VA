import React, { Component } from 'react';
import { Text, View, TouchableOpacity, AsyncStorage, Keyboard, TextInput } from 'react-native';
import { styles } from '../stylesheets/login_or_signup';
import Textbox from '../components/textbox';
import {Icon, Input, Item, Label} from "native-base";

export default class Login extends Component {
    constructor(props){
        super(props);
        this.state={
            email:'',
            password: '',
            icon:'eye-off'
        }
    }

    saveData =async()=>{
        alert("login successful");
        this.props.navigation.replace('Tab_Navigator');
    };

    render() {
        const {navigate} = this.props.navigation;
        return(
            <View style={styles.container}>
                <Text> {"\n"} </Text>
                <Text> {"\n"} </Text>
                <TextInput style={styles.inputBox}
                           onChangeText={(email) => this.setState({email})}
                           underlineColorAndroid='rgba(0,0,0,0)'
                           placeholder="Email"
                           placeholderTextColor = "#002f6c"
                           selectionColor="#fff"
                           maxLength = {256}
                           keyboardType="email-address"
                           onSubmitEditing={()=> this.password.focus()}/>

                <TextInput style={styles.inputBox}
                           onChangeText={(password) => this.setState({password})}
                           underlineColorAndroid='rgba(0,0,0,0)'
                           placeholder="Password"
                           secureTextEntry={true}
                           placeholderTextColor = "#002f6c"
                           maxLength = {15}
                           ref={(input) => this.password = input}
                />
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText} onPress={this.saveData}> Login </Text>
                </TouchableOpacity>

                <Text>   ------or Login using------   </Text>

                <View style={styles.TextCont}>
                    <Text style={styles.Text}>Dont have an account yet? </Text>
                    <TouchableOpacity onPress={() => navigate('Signup_Page', {name: 'Jane'})}><Text style={styles.navigateButton}>Signup</Text></TouchableOpacity>
                </View>
            </View>
        )
    }
}
