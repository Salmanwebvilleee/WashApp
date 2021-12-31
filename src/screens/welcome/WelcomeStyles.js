import React from "react";
import { StyleSheet } from "react-native";
import normalize from "react-native-normalize";
import colors from "../../util/Colors";

const WelcomeStyles = StyleSheet.create({

    viewHeaderTop: {
        marginTop: 20
    },
    bottomView: {
        height: 80,
        alignItems:'center',
        paddingLeft:10,
        paddingRight:10
    },
    pagerLeftCenter: {
        alignSelf: 'flex-start'
    },
    viewPagerImages: {
        width: 303,
        height: 295,

    },
    viewPager: {
        flex: 1,
        backgroundColor: 'white',
        marginLeft: 15,
        marginRight: 15,
    },
    viewPagerMain: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        alignSelf: 'center',
        justifyContent: 'center'
    },
    viewText:{
        marginTop: 20, 
        flexDirection: 'column',
        alignSelf:'center'
    },
    headingText:{
        fontSize:normalize(24),
        color:colors.black,
        fontWeight:'700',
        alignSelf:'center'
    },
    descText:{
        fontSize:normalize(15),
        color:colors.textGray,
        fontWeight:'500',
        marginTop:10
    },
    btnNext:{
        width:50,
        justifyContent:'center'
    },
    arrowLeft:{
        width:20,
        height:14,
        alignSelf:'center'
    },
    dotStyles:{
        width:10,
        height:10,
        borderRadius: 10/2
    },
    selectedDot:{
        backgroundColor:colors.primary
    },
    unselectedDot:{
        backgroundColor:colors.black
    },
    view50:{
        height:50,
        width:140,
        backgroundColor:colors.primary,
        justifyContent:'center',
        borderRadius:8
    }
   



})
export default WelcomeStyles;