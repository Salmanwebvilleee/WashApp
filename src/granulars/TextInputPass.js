import React from "react";
import {View,Image} from 'react-native';
import { TextInput } from 'react-native-paper';
import LoginStyles from "../screens/authentication/auth/Login/LoginStyles";
import StyleImages from "../styles/StyleImages";
import Viewstyles from "../styles/ViewStyles";
import * as ImageAssets from '../util/ImageAssets';
import { TouchableOpacity } from "react-native";

const TextInputPass =(props) =>{
  
  const {label,password,setPass,secure,securEnty} = props;
 
  return(
      <View style={[Viewstyles.viewRow,{marginTop:10,flex:1}]}>

      <TextInput
              value={password}
              style={[LoginStyles.textInput,{marginTop:10,width:'100%'}]}
              label={label}
              secureTextEntry={securEnty}
              onChangeText={text =>{
                  setPass(text)
              }}/>
              <TouchableOpacity
              onPress={()=>{
                securEnty == false ? secure(true) : secure(false)
              }}
              style={[StyleImages.passImage]}>

       <Image style={[StyleImages.passImage]}
       source={securEnty ? ImageAssets.eye : ImageAssets.uneye}/>
       </TouchableOpacity>
              </View>
    )
}
export default TextInputPass;