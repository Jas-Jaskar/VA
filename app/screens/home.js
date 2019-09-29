import React,{ Component } from 'react';
import { ScrollView, View, Text, StyleSheet,Alert } from 'react-native';

class Home extends Component {
    static navigationOptions = {
        title: 'HomeScreen',
    };

    state = {
        myState: 'Lorem'
    };

    constructor() {
        super();
        this.updateState = this.updateState.bind(this);
    }
    //onpress(){
    //    Alert.alert('jaskar')
    //}
    updateState(){
        this.setState({myState:"hi"});
    }

    render() {
        return (
            <View>
                <Text onPress = {this.updateState}>
                    {this.state.myState}
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    textFirst: {
        fontSize: 50,
        fontWeight:'bold',
        textAlign:'center',
        marginTop: 300,
    },
});

export default Home;
