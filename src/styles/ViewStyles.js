import React from "react";
import { StyleSheet } from "react-native";
import colors from "../util/Colors";

const Viewstyles = StyleSheet.create({
    viewHeader:{
        backgroundColor:colors.white,
        flex:1
    },
    tabHeader:{
        flex:1
    },
    viewMain:{
        marginLeft:25,
        marginRight:25
    },
    viewMargin:{
        marginLeft:15,
        marginRight:15
    },
    viewFlex1:{
        flex:1,
    },
    viewRow:{
        flexDirection:'row',
        
    },
    viewColumn:{
        flexDirection:'column'
    },
    viewCenter:{
        justifyContent:'center'
    },
    viewF9F9FB:{
    backgroundColor:'#F9F9FB'
    },
    viewRadius8:{
        borderRadius:8,
        backgroundColor:colors.primary,
        height:50,
    },
    viewTopWhite:{
        height:180,
        backgroundColor:colors.white,
        borderBottomLeftRadius:30,
        borderBottomRightRadius:30,
        elevation:5
    },
    viewDC4E43:{
        borderRadius:8,
        backgroundColor:colors.google,
        height:50,
    },
    viewHeaderWhite:{
        height:74,
        backgroundColor:colors.white,
        borderBottomLeftRadius:30,
        borderBottomRightRadius:30,
        elevation:5,
        justifyContent:'center'
    },
    viewLanguage:{
        width:38,
        height:38,
        backgroundColor:colors.primary,
        opacity:0.3,
        borderRadius:9,
        justifyContent:'center'
    },
    view10:{
        height:45,
        borderRadius:10,
        backgroundColor:colors.white,
    },
   
})
export default Viewstyles;