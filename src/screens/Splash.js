import React, { useEffect } from "react";
import {View,Image,Text, SafeAreaView, StatusBar} from 'react-native';
import StyleImages from "../styles/StyleImages";
import Viewstyles from "../styles/ViewStyles";
import {app_logo} from "../util/ImageAssets";
import { useNavigation } from '@react-navigation/native';

const Splash = () =>{

   const navigation = useNavigation();
  const timeout = setTimeout(() => {
    // Add your logic for the transition
  }, 3000);

  useEffect(()=>{
    StatusBar.setHidden(true, 'none');
    setTimeout(() => {
             
       navigation.replace('Welcome')
  
          }, 3000)
  });

return(
    <SafeAreaView style={Viewstyles.viewHeader}>
     <View style={[Viewstyles.viewCenter,Viewstyles.viewFlex1]}>
     <Image style={[StyleImages.splash_logo]} resizeMode='cover' source={app_logo} />
         </View>   
    </SafeAreaView>
)
}
export default Splash;