import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        width: '100%',
        height: '100%'
    },
    text:{
        textAlign:'center'
    },
    header: {
        textAlign:'center',
        fontSize:25,
        height: 80 // this dose not change the header height
    },
    SquareShapeView: {

        width: '75%',
        height: '50%',
        backgroundColor: 'transparent',
        padding:10,
    },
    button: {
        width: "50%",
        height: 52,
        backgroundColor: '#4f83cc',
        borderRadius: 20,
        marginVertical: 10,
        //paddingVertical: 12
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#ffffff',
        textAlign: 'center'
    },

});