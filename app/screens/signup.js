import React, { Component } from 'react';
import {
    Text,
    KeyboardAvoidingView,
    TouchableOpacity, AsyncStorage, Keyboard, TextInput,View
} from 'react-native';
import  KeyboardSpacer from 'react-native-keyboard-spacer';
import { styles } from '../stylesheets/login_or_signup';
import {Icon, Input, Item, Label} from "native-base";


export default class Signup extends Component {

    constructor(props){
        super(props);
        this.state={
            email:'',
            password: '',
            username:'',
            cnfrm_password:'',
            username_format:'',
            email_format:'',
            password_foramt:'',
            cnfrm_password_status:'',
            error_flag:false
        }
    }
    saveData =async()=> {
        const {email, password, username, cnfrm_password} = this.state;
        this.validateUsername(username)
            .then(this.validateEmail(email))
            .then(this.validatePassword(password))
            .then(this.validateConfirmPassword(password,cnfrm_password))
        if(this.state.error_flag === false){
            fetch('http://192.168.0.118:3000/register', {
                method: 'POST',
                headers: {
                       'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    "email":email,
                    "username":username,
                    "password":password
                })
            })
                .then((response) => response.json())
                .then((responsejson) => alert(JSON.stringify(responsejson)))
                .catch(
                   alert("error in server response")
                )
        }
    };
    validateEmail = (email) =>
    {
        var re = /\S+@\S+\.\S+/;
        if( (re.test(email)) === false ){
            this.setState({email_format:'Invalid Email.(Email Format :: abc@domainname)'})
            this.state.error_flag = true;
        }
    };
    validateUsername = (username) =>
    {
        if(username.length < 6) {
            this.setState({username_format: 'Invalid Username.Should contain atleast 5 characters'})
            this.state.error_flag = true;
        }
    };
    validatePassword = (password) =>
    {
        if( ( password.match(/[A-Z]/) && password.match(/[a-z]/) && password.match(/[0-9]/) ) === false ){
            this.setState({password_format:'Should contain atleast 8 - 15 characters with one uppercase, one lowercase and one number'})
            this.state.error_flag = true;
        }
    };
    validateConfirmPassword = (password,cnfrm_password) =>
    {
        if(password !== cnfrm_password){
            this.setState({cnfrm_password:"Password doesn't matched"});
            this.state.error_flag = true;
        }
    };

    render() {
        const {navigate} = this.props.navigation;
        return(
            <View style={styles.container}>
                <Text> {"\n"} </Text>
                <Text> {"\n"} </Text>
                <TextInput style={styles.inputBox}
                           onChangeText={(username) => this.setState({username:username})}
                           underlineColorAndroid='rgba(0,0,0,0)'
                           placeholder="Username"
                           placeholderTextColor = "#002f6c"
                           selectionColor="#fff"
                           maxLength = {25}/>
                <Text fontSize = "12">{this.state.username_format}</Text>
                <TextInput style={styles.inputBox}
                           onChangeText={(email) => this.setState({email})}
                           underlineColorAndroid='rgba(0,0,0,0)'
                           textContentType={"emailAddress"}
                           placeholder="Email"
                           placeholderTextColor = "#002f6c"
                           selectionColor="#fff"
                           keyboardType="email-address"
                           maxLength = {256}/>
                <Text fontSize = "12">{this.state.email_format}</Text>
                <TextInput style={styles.inputBox}
                           onChangeText={(password) => this.setState({password})}
                           underlineColorAndroid='rgba(0,0,0,0)'
                           placeholder="Password"
                           secureTextEntry={true}
                           placeholderTextColor = "#002f6c"
                           maxLength = {15}/>
                <Text fontSize = "12">{this.state.password_format}</Text>
                <TextInput style={styles.inputBox}
                           onChangeText={(cnfrm_password) => this.setState({cnfrm_password})}
                           underlineColorAndroid='rgba(0,0,0,0)'
                           placeholder="confirm_Password"
                           secureTextEntry={true}
                           maxLength = {15}
                           placeholderTextColor = "#002f6c"/>
                <Text fontSize = "12" >{this.state.cnfrm_password_status}</Text>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText} onPress={this.saveData}>Signup</Text>
                </TouchableOpacity>

                <View style={styles.TextCont}>
                    <Text style={styles.Text}>Already have an account? </Text>
                    <TouchableOpacity onPress={() => navigate('Login_Page', {name: 'Jane'})}><Text style={styles.navigateButton}>Sign in</Text></TouchableOpacity>
                </View>
                <KeyboardSpacer />
            </View>
        )
    }
}

