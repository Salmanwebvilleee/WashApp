import React from "react";
import {View,Image,TouchableOpacity,StyleSheet} from 'react-native';
import * as ImageAssets from '../util/ImageAssets'
import StyleImages from "../styles/StyleImages";
import Viewstyles from "../styles/ViewStyles";

const SocialLogin = ()=>{

    return(
        <View style={[Viewstyles.viewRow,styles.viewHeader]}>
        <View style={[Viewstyles.viewRadius8, styles.mainView]}>
        <Image
                style={[StyleImages.fbIcon,styles.imgCenter]}
                source={ImageAssets.fbIcon} />
            </View>

            <View style={[Viewstyles.viewDC4E43,styles.googleView]}>
        <Image
                style={[StyleImages.googleIcon,styles.imgCenter]}
                source={ImageAssets.googleIcon} />        
            </View>
            </View>            
    )
}

const styles = StyleSheet.create({
    viewHeader:{
        marginTop:20,
        marginBottom:10,
        justifyContent:'center'
    },
    mainView:{
        justifyContent: 'center',
        width:72,
        alignSelf:'center' 
    },
    imgCenter:{
        alignSelf:'center'
    },
    googleView:{
        justifyContent: 'center',
        width:72,
        alignSelf:'center',
        marginLeft:10
    }
})
export default React.memo(SocialLogin);