import React from "react";
import {View} from 'react-native';
import Viewstyles from "../styles/ViewStyles";

const WhiteTopHeader =(props)=>{
    return(
        <View style={[Viewstyles.viewHeaderWhite]}>
          {props.children}
        </View>
    )
}
export default React.memo(WhiteTopHeader);