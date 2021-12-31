import React from 'react';
import { SafeAreaView,View } from 'react-native';
import Viewstyles from '../styles/ViewStyles';

const Headers =(props) =>{

    return(
        <SafeAreaView style={[Viewstyles.viewHeader]}>
            {props.children} 
            </SafeAreaView>
    )
}
export default Headers;