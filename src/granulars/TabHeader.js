import React from 'react';
import { SafeAreaView,View } from 'react-native';
import Viewstyles from '../styles/ViewStyles';

const TabHeader =(props) =>{

    return(
        <SafeAreaView style={[Viewstyles.tabHeader]}>
            {props.children} 
            </SafeAreaView>
    )
}
export default TabHeader;