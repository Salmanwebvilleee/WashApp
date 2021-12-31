import React from "react";
import { TextInput } from 'react-native-paper';

const TextInputs =(props) =>{
    return(
        <TextInput
        value={props.value}
        style={{backgroundColor:'white'}}
        label={props.label}
        secureTextEntry={props.isPassword}
        onChangeText={text =>{
            
        }}
      />
    )
}
export default TextInputs;