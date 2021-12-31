import React,{useState,useEffect,useRef} from "react";
import {View,SafeAreaView,Image,Text,Dimensions} from 'react-native'
import Viewstyles from "../../../styles/ViewStyles";
import * as ImageAssets from '../../../util/ImageAssets';
import StyleImages from "../../../styles/StyleImages";
import authStyles from "./AuthStyles";
import {
    IndicatorViewPager,
    PagerTitleIndicator,
} from '@shankarmorwal/rn-viewpager';
import Login from "./Login/Login";
import Signup from "./Login/Signup";
import LoginStyles from "./Login/LoginStyles";

const Auth = () => {

    const titles = ["Login", "Sign up"]
    const viewPager = useRef(IndicatorViewPager);
    const itemWidth = {"width": Dimensions.get("window").width / titles.length}
  
    const _renderTitleIndicator = () => {
        return <PagerTitleIndicator
        itemStyle={authStyles.PagerTitleIndicator}
        selectedBorderStyle={authStyles.indicatorBorder}
        itemTextStyle={[authStyles.indicatorText,itemWidth]}
        changePageWithAnimation={true}
        selectedItemTextStyle={[authStyles.indicatorSelectedText,itemWidth]}
        titles={titles} />;
    }

    return(
        <SafeAreaView style={Viewstyles.viewHeader}>
            <View style={[Viewstyles.viewFlex1]}>

             <View style={[Viewstyles.viewTopWhite,authStyles.viewwhite]}>
                 
             <Image
                                style={[StyleImages.auhtLogo,authStyles.authLogoStyle]}
                                source={ImageAssets.authLogo} 
                                resizeMode="cover"/>

                 </View>   

                 <IndicatorViewPager
                     indicator={_renderTitleIndicator()}
                     style={authStyles.indicatorReverse}>
                    <Login></Login>
                    <Signup></Signup>
                   
                </IndicatorViewPager>
                
           
           </View>
       </SafeAreaView> 
    )
}
export default React.memo(Auth);