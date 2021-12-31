import React, { useState, useEffect } from "react";
import { View, SafeAreaView, Button, TouchableOpacity, Text, ScrollView, Image, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import LoginStyles from "./LoginStyles";
import Viewstyles from "../../../../styles/ViewStyles";
import TextInputPass from "../../../../granulars/TextInputPass";
import colors from "../../../../util/Colors";
import CheckBox from 'react-native-check-box'
import textStyles from "../../../../styles/textStyles";
import * as ImageAssets from '../../../../util/ImageAssets'
import StyleImages from "../../../../styles/StyleImages";
import SocialLogin from "../../../../granulars/SocialLogin";
import Consts from "../../../../util/Consts";

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [securePass, setSecurePass] = useState(true)
    const [checked, setChecked] = useState(false);

    return (
        <ScrollView
            contentContainerStyle={{ flexGrow: 1 }} >

            <View style={[Viewstyles.viewMargin]}>
                <TextInput
                    value={email}
                    style={[LoginStyles.textInput, LoginStyles.marginTop10]}
                    label={Consts.email}
                    keyboardType="email-address"
                    onChangeText={text => {
                        setEmail(text)
                    }} />

                <TextInputPass
                    label={Consts.password}
                    value={password}
                    securEnty={securePass}
                    secure={setSecurePass}
                    setPass={setPassword}>
                </TextInputPass>

                <View style={[Viewstyles.viewRow, LoginStyles.marginTop20]}>

                    <CheckBox
                        style={Viewstyles.viewFlex1}
                        onClick={() => {
                            checked ? setChecked(false) :
                                setChecked(true)
                        }}
                        checkBoxColor={colors.primary}
                        checkedCheckBoxColor={colors.primary}
                        isChecked={checked}
                        rightText={Consts.rememberMe} />
                    <Text style={[LoginStyles.forgotPassText]}>{Consts.forgotPass}</Text>
                </View>

                <View style={[Viewstyles.viewRadius8, LoginStyles.marginTop20,LoginStyles.viewLogin]}>
                    <Text style={[textStyles.textWhite, textStyles.text600, { alignSelf: 'center' }]}>{Consts.Login}</Text>
                </View>


                <View style={[Viewstyles.viewRow, LoginStyles.marginTop20,LoginStyles.viewLogin]}>

                    <Image
                        style={StyleImages.line}
                        source={ImageAssets.line} />


                    <Text style={[textStyles.textOr,LoginStyles.alignCenter]}>{Consts.or}</Text>

                    <Image
                        style={StyleImages.line}
                        source={ImageAssets.rightline} />
                </View>

                <Text style={[textStyles.text16, LoginStyles.marginTop10,LoginStyles.alignCenter]}>{Consts.loginWith}</Text>
               <SocialLogin/>        
                
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    marginTop10:{
        marginTop:10
    },
    marginTop20:{
        marginTop:20
    },
    viewLogin:{
        justifyContent: 'center'
    },
    alignCenter:{
        alignSelf:'center'
    }
})
export default React.memo(Login);