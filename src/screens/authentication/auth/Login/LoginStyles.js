import React from 'react';
import { StyleSheet } from "react-native";
import normalize from "react-native-normalize";
import colors from "../../../../util/Colors";
import Login from "./Login";

const LoginStyles = StyleSheet.create({

    textInput:{
        backgroundColor:colors.white,
        fontSize:normalize(15),
        color: 'green'
    },
    forgotPassText:{
        fontSize:normalize(15),
        fontWeight:'500',
        color:colors.primary
    },
        marginTop10:{
            marginTop:10
        },
        marginTop20:{
            marginTop:20
        },
        viewLogin:{
            justifyContent: 'center'
        },
        alignCenter:{
            alignSelf:'center'
        },
       
})
export default LoginStyles;