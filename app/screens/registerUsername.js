import React, { Component } from 'react';
import {Button, Text, TextInput, TouchableOpacity, View} from "react-native";
import {styles} from "../stylesheets/registerUsernameStyles";
import Spinner from "react-native-loading-spinner-overlay";

export default class RegisterUsername extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username : "",
            spinner:false
        }
    }

    validateUsername = async() => {
        let reg = /\S+@\S+\.\S+/;
        if(reg.test(this.state.username) === false){
            alert(" Invalid Username. Valid Username Format : minimum 3 to 25 characters long,numbers,alphabets and '@' symbol ");
        }
        else{
            this.setState({spinner :true})
            fetch('http://192.168.0.116:3000/verify/uname', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    "email":this.state.username,
                })
            })
                .then((response) => (response.json()))
                .then((responsejson) => {
                    //alert(JSON.stringify(responsejson));
                    this.setState({spinner :false});
                    if( (responsejson.status) === "failure"){
                        alert("Username already Exist");
                    }
                    else{
                        this.props.navigation.replace('RegisterPassword',{
                            USERNAME: this.state.username,
                            EMAIL:this.props.navigation.state.params.EMAIL
                        });
                    }

                })
                .catch((error)=> {
                        this.setState({spinner: false});
                        alert(error);
                    }
                )
        }
    };

    render() {
        const {navigate} = this.props.navigation;
        return(
            <View style={styles.container}>
                <Text style={styles.header}> Add your Name </Text>
                <Spinner
                    visible={this.state.spinner}
                    textContent={'Loading...'}
                    textStyle={styles.spinnerTextStyle}
                />
                <TextInput style={styles.inputBox}
                           onChangeText={(username) => this.setState({username})}
                           underlineColorAndroid='rgba(0,0,0,0)'
                           textContentType={"emailAddress"}
                           placeholder="Username"
                           placeholderTextColor = "#002f6c"
                           selectionColor="#fff"
                           keyboardType="email-address"
                           maxLength = {256}/>
                <Button style={styles.button} onPress={this.validateUsername} title="Next"/>
                <Button style={styles.button} onPress={() => this.props.navigation.navigate('Dashboard')} title="Go to Dashboard"/>
            </View>
        )
    }
}