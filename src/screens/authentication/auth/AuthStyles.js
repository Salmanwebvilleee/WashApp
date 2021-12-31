import React from "react";
import { StyleSheet } from "react-native";
import normalize from "react-native-normalize";
import colors from "../../../util/Colors";

const authStyles = StyleSheet.create({
    authLogoStyle:{
        alignSelf:'center'
    },
    viewwhite:{
        justifyContent:'center'
    },
    indicatorText: {color: colors.text1C1C1C,
        fontSize:normalize(18),
        fontWeight:"400",
        textAlign:'center'
    },
    indicatorSelectedText: {
        color: colors.primary,
        fontSize:normalize(18),
        fontWeight:"600",
        textAlign:'center'
    },
    indicatorBorder: { 
        backgroundColor: colors.primary,
        marginLeft:normalize(30),
        marginRight:normalize(30),
    },
    pageIndicator:{
        justifyContent:'center',
        alignSelf:'center'
    },
    indicatorReverse:{
        flexDirection: 'column-reverse',
         flex:1
    }

})
export default authStyles;