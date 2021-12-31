import React from "react";
import { StyleSheet } from "react-native";
import normalize from 'react-native-normalize';
import colors from "../util/Colors";

const textStyles = StyleSheet.create({

    textBold18_600:{
        fontSize:normalize(18),
        fontWeight:'600'
    },
    text24:{
        fontSize:normalize(24),
    },
    textWhite:{
        color:colors.white
    },
    text600:{
        fontWeight:'600'
    },
    textOr:{
        fontWeight:'500',
        fontSize:normalize(17),
        color:colors.text1C1C1C
    },
    text16:{
        fontWeight:'500',
        fontSize:normalize(16),
        color:colors.text1C1C1C
    },
    textHeading:{
        fontSize:normalize(18),
        color:colors.black,
        fontWeight:'600',
        textAlign:'center',
        alignSelf:'center',
        flex:1
    },
    textSubHeading:{
        fontSize:normalize(18),
        color:colors.black,
        fontWeight:'600',
        flex:1
    },
    textLanguage:{
        fontSize:normalize(16),
        color:colors.primary,
        fontWeight:'500',
        alignSelf:'center',
        textAlign:'center'
        },
        textSearch:{
            fontSize:normalize(14),
            fontWeight:'400',
            marginLeft:10,
            flex:1
        },
        btnTextCenter:{
            textAlign:'center',
            fontWeight:'600',
            alignSelf:'center',
        }

})
export default textStyles;