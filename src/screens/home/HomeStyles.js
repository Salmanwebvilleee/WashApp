import React from "react";
import { StyleSheet,Dimensions } from "react-native";
import normalize from "react-native-normalize";
import colors from "../../util/Colors";

const {height, width} = Dimensions.get('window');
const itemWidth = (width - 15) / 3;
const homeStyles = StyleSheet.create({

    viewRow:{
    marginLeft:25,
    marginRight:25,
    flexDirection:'row'
    },
    locationIcon:{
        width:15,
        height:20,
    },
    viewSearch:{
        marginTop:25,
        flexDirection:'row'
    },
    searchView:{
       marginRight:10
    },
    bannerList:{
        marginTop:20
    },
    bannerImage:{
        width:280,
        height:175,
        overflow:'hidden',
    },
    viewBanner:{
        marginRight:10,
        borderRadius:10,
        overflow:'hidden',
    },
    homeFlat:{
        marginTop: 25,
        alignSelf:'center'
    },
    viewServices:{
        backgroundColor:colors.white,
        borderRadius:10,
        height:80,
        flex:1/2,
       margin:10,
        justifyContent:'center'
    },
    servicesText:{
        fontSize:normalize(18),
        color:colors.black,
        fontWeight:'600',
        textAlign:'center',
        alignSelf:'center',
    },
})
export default homeStyles;