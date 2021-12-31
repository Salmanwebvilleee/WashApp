import React, { useState,useRef } from 'react';
import { View, SafeAreaView, Button, Image, Text, TouchableOpacity, PixelRatio } from 'react-native';
import StyleImages from '../../styles/StyleImages';
import Viewstyles from '../../styles/ViewStyles';
import WelcomeStyles from './WelcomeStyles';
import * as ImageAssets from '../../util/ImageAssets';
import textStyles from '../../styles/textStyles';
import Consts from '../../util/Consts';
import { useNavigation } from '@react-navigation/native';
import {
    IndicatorViewPager,
    PagerDotIndicator
} from '@shankarmorwal/rn-viewpager';

const Welcome = () => {

    const [page,setPage] = useState(0)
    const viewPager = useRef(IndicatorViewPager);
    const navigation = useNavigation();

    const onPageSelected = (e) => {
        setPage(e.position)
    }

    return (
        <SafeAreaView style={Viewstyles.viewHeader}>
            <View style={[Viewstyles.viewFlex1, Viewstyles.viewMargin]}>

                <View style={[Viewstyles.viewRow, WelcomeStyles.viewHeaderTop]}>
                    <View style={Viewstyles.viewFlex1}>
                        <Image style={StyleImages.backImage} resizeMode='cover' source={ImageAssets.back_btn} /></View>
                        <TouchableOpacity onPress={()=>{
                    navigation.replace('Auth')
               }}>  
                    <Text style={[textStyles.textBold18_600]}>{Consts.skip}</Text>
                    </TouchableOpacity>
                </View>

                <View style={[WelcomeStyles.viewMargin, Viewstyles.viewFlex1]}>

                    <IndicatorViewPager
                        ref={viewPager}
                        autoPlayEnable={false}
                        initialPage={0}
                        pageCount={4}
                        autoPlayInterval={0}
                        onPageSelected={onPageSelected}
                        style={WelcomeStyles.viewPager}
                        indicator={<PagerDotIndicator
                            pageCount={4}
                            selectedDotStyle={[WelcomeStyles.dotStyles,WelcomeStyles.selectedDot]}
                            dotStyle={[WelcomeStyles.dotStyles,WelcomeStyles.unselectedDot]}
                            style={{
                                position:'absolute',
                                alignSelf:'center',
                                bottom:0, flex:1}} />}>
                        <View style={WelcomeStyles.viewPagerMain}>
                            <Image
                                style={WelcomeStyles.viewPagerImages}
                                source={ImageAssets.welcome1} />
                            <View style={WelcomeStyles.viewText}>
                                <Text style={[WelcomeStyles.headingText]}>{Consts.washFold}</Text>
                                <Text style={[WelcomeStyles.descText]}>{Consts.loremipsum}</Text>
                            </View>
                        </View>

                        <View style={WelcomeStyles.viewPagerMain}>
                            <Image
                                style={WelcomeStyles.viewPagerImages}
                                source={ImageAssets.welcome2} />

                            <View style={WelcomeStyles.viewText}>
                                <Text style={[WelcomeStyles.headingText]}>{Consts.dryClean}</Text>
                                <Text style={[WelcomeStyles.descText]}>{Consts.loremipsum}</Text>
                            </View>
                        </View>

                        <View style={WelcomeStyles.viewPagerMain}>

                            <Image
                                style={WelcomeStyles.viewPagerImages}
                                source={ImageAssets.welcome3} />

                            <View style={WelcomeStyles.viewText}>

                                <Text style={[WelcomeStyles.headingText]}>{Consts.washIron}</Text>
                                <Text style={[WelcomeStyles.descText]}>{Consts.loremipsum}</Text>

                            </View>
                        </View>

                        <View style={WelcomeStyles.viewPagerMain}>
                            <Image
                                style={WelcomeStyles.viewPagerImages}
                                source={ImageAssets.welcome4} />
                            <View style={WelcomeStyles.viewText}>

                                <Text style={[WelcomeStyles.headingText]}>{Consts.premiumwash}</Text>
                                <Text style={[WelcomeStyles.descText]}>{Consts.loremipsum}</Text>

                            </View>
                        </View>

                    </IndicatorViewPager>
                </View>

            </View>
            <View style={[Viewstyles.viewF9F9FB, Viewstyles.viewRow, WelcomeStyles.bottomView]}>
                                
               <Text style={{flex:1}}>Tools</Text>
               {
                   page != 3 ?
                   <TouchableOpacity onPress={()=>{
                    viewPager.current.setPage(page + 1)
                }}>          
                <View style={[Viewstyles.viewRadius8,WelcomeStyles.btnNext]}>
                <Image
                                 style={WelcomeStyles.arrowLeft}
                                 source={ImageAssets.arrowLeft} />
                                 
                    </View>       
                    </TouchableOpacity> :

<TouchableOpacity onPress={()=>{
   navigation.replace('Auth')
}}>          
<View style={[WelcomeStyles.view50]}>

    <Text style={[textStyles.textWhite,textStyles.btnTextCenter]}>{Consts.getStarted}</Text>
                 
    </View>       
    </TouchableOpacity> 

                }
                   
            </View>
        </SafeAreaView>
    )

}
export default Welcome;