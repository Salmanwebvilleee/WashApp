import React from 'react';
import {View,Text,StyleSheet} from  'react-native';
import normalize from 'react-native-normalize';
import colors from '../../util/Colors';
import { useNavigation } from '@react-navigation/native';

const LabelText = (props) =>{
    const {label,focused} = props;
    const navigation = useNavigation();
    return(
        <Text 
        onPress={()=>{
          navigation.navigate('Home')
        }}
        style={{ color: focused ? colors.primary : colors.textGray,
             fontSize: normalize(12),
              marginBottom: 5, 
              marginTop: -5,
              fontWeight:focused ? '600' : '500',
              fontFamily: '' }}>{label}</Text>
    )
   
}
 

export default LabelText;