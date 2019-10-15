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
        height: 80 // this dose not change the header height
    },
    scrollview :{
        flex: 1,
        backgroundColor: 'white'
    },
    inputBox: {
        width: 300,
        backgroundColor: '#eeeeee',
        borderRadius: 25,
        paddingHorizontal: 16,
        fontSize: 16,
        color: '#002f6c',
        marginVertical: 10
    },
    button: {
        width: 300,
        height: 52,
        backgroundColor: '#4f83cc',
        //borderRadius: 25,
        marginVertical: 10,
        paddingVertical: 12
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

    TextCont: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingVertical: 16,
        flexDirection: 'row'
    },
    Text: {
        color: '#12799f',
        fontSize:16
    },
    navigateButton: {
        color: '#12799f',
        fontSize:16,
        fontWeight: '500'
    }
});