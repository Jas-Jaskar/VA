import React, { Component } from 'react';
import {Button, Switch, Text, TextInput, TouchableOpacity, View} from "react-native";
import {styles} from "../stylesheets/registerPasswordStyles";
import Spinner from "react-native-loading-spinner-overlay";

export default class RegisterPassword extends Component {

    constructor(props) {
        super(props);
        this.state = {
            password : "",
            confirmPassword : "",
            showPassword : true,
            spinner:false
        }
    }

    validatePassword = async() => {
        //let reg = /\S+@\S+\.\S+/;
        //if( reg.test(this.password) === false){
            //alert("Invalid Format. Minimum 8 to 15 characters Long");
        //}

        if(this.state.password !== this.state.confirmPassword){
            alert("Password doesnt match")
        }
        else{
            //alert(user.username)
            this.setState({spinner :true})
            fetch('http://192.168.0.116:3000/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    "email":this.props.navigation.state.params.EMAIL,
                    "username":this.props.navigation.state.params.USERNAME,
                    "password":this.state.password
                })
            })
                .then((response) => (response.json()))
                .then((responsejson) => {
                    //alert(JSON.stringify(responsejson));
                    this.setState({spinner :false});
                    if( (responsejson.status) === "failure"){
                        alert("Email address already Exist");
                    }
                    else{
                        this.props.navigation.replace('Tab');
                    }

                })
                .catch((error)=> {
                        this.setState({spinner: false});
                        alert(error);
                    }
                )
        }
    };

    toggleSwitch = () => {
        this.setState({ showPassword: !this.state.showPassword });
    };

    render() {
        const {navigate} = this.props.navigation;
        return(
            <View style={styles.container}>
                <Spinner
                    visible={this.state.spinner}
                    textContent={'Loading...'}
                    textStyle={styles.spinnerTextStyle}
                />
                <Text style={styles.header}> Register Your Password </Text>
                <TextInput style={styles.inputBox}
                           onChangeText={(password) => this.setState({password})}
                           placeholder="Password"
                           secureTextEntry={this.state.showPassword}
                           placeholderTextColor = "#002f6c"
                           maxLength = {15}
                           onSubmitEditing={()=> this.confirmPassword.focus()}/>
                <TextInput style={styles.inputBox}
                           onChangeText={(confirmPassword) => this.setState({confirmPassword})}
                           underlineColorAndroid='rgba(0,0,0,0)'
                           placeholder="ConfirmPassword"
                           secureTextEntry={this.state.showPassword}
                           placeholderTextColor = "#002f6c"
                           maxLength = {15}
                           ref={(input) => this.confirmPassword = input}/>
                <Switch
                    onValueChange={this.toggleSwitch}
                    value={!this.state.showPassword}
                />
                <Text>Show Password</Text>
                <Button style={styles.button} onPress={this.validatePassword} title="Submit"/>
                <Button style={styles.button} onPress={() => this.props.navigation.navigate('Dashboard')} title="Go to Dashboard"/>
            </View>
        )
    }
}