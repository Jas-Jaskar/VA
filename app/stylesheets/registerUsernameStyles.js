import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white',
        width: '100%',
        height: '100%'
    },
    header: {
        textAlign:'center',
        fontSize:25,
        marginVertical:15,
        //height: 80 // this dose not change the header height
    },
    spinnerTextStyle: {
        color: '#FFF'
    },

    inputBox: {
        width: 300,
        backgroundColor: '#eeeeee',
        borderRadius: 25,
        paddingHorizontal: 16,
        fontSize: 16,
        color: '#002f6c',
        marginVertical: 5
    },
    button: {
        width: 200,
        height: 52,
        backgroundColor: '#4f83cc',
        borderRadius: 20,
        marginVertical: 5,
        textAlign: 'center',
        marginLeft:5,
        marginRight:5
    },
    text:{
        textAlign:'center'
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#ffffff',
        textAlign: 'center'
    },


});