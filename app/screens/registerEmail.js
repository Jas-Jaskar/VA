import React, { Component } from 'react';
import {
    Text,
    KeyboardAvoidingView,
    TouchableOpacity, AsyncStorage, Keyboard, TextInput, View, Button
} from 'react-native';
import  KeyboardSpacer from 'react-native-keyboard-spacer';
import { styles } from '../stylesheets/registerEmailStyles';
import {Icon, Input, Item, Label} from "native-base";
import Spinner from 'react-native-loading-spinner-overlay';


export default class RegisterEmail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            spinner: false,
        }
    }

    validateEmail = async() => {
        let reg = /\S+@\S+\.\S+/;
        if(reg.test(this.state.email) === false){
            alert("Invalid Email Format");
        }
        else{
            this.setState({spinner :true})
            fetch('http://192.168.0.116:3000/verify/email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    "email":this.state.email,
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
                        this.props.navigation.replace('RegisterUsername',{
                            EMAIL: this.state.email,
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









                <Button onPress={this.validateEmail} title="Next"/>
                <View style={styles.bottomBtn}>
                <Button color='red' onPress={() => this.props.navigation.navigate('Dashboard')} title="Go to Dashboard"/>
                </View>
            </View>


        )
    }
}

