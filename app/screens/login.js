import React, { Component } from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    KeyboardAvoidingView,
    ScrollView,
    AsyncStorage,
    Keyboard,
    TextInput,
    Switch,
    ImageBackground, Button
} from 'react-native';
import { styles } from '../stylesheets/login_and_signup';
import Textbox from '../components/textbox';
import {Icon, Input, Item, Label} from "native-base";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view"
export default class Login extends Component {
    constructor(props){
        super(props);
        this.state={
            email:'',
            password: '',
            showPassword: true,
        }
    }

    saveData =async()=>{
        alert("login successful");
        this.props.navigation.replace('Tab_Navigator');
    };

    toggleSwitch = () => {
        this.setState({ showPassword: !this.state.showPassword });
    };

    render() {
        const {navigate} = this.props.navigation;
        return(
                <View style={styles.container}>
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
                               secureTextEntry={this.state.showPassword}
                               placeholderTextColor = "#002f6c"
                               maxLength = {15}
                               ref={(input) => this.password = input}/>

                    <Switch
                        onValueChange={this.toggleSwitch}
                        value={!this.state.showPassword}
                    />
                    <Text>Show Password</Text>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText} onPress={this.saveData}> Login </Text>
                    </TouchableOpacity>
                    <Text style={styles.text} onPress={() => navigate('ForgetPassword', {name: 'forgetpassword'})}> Forget Password?</Text>
                </View>
        )
    }
}
