import React from 'react';
import { TouchableOpacity,Image, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from './src/screens/Splash';
import Welcome from './src/screens/welcome/Welcome';
import Auth from './src/screens/authentication/auth/Auth';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from './src/screens/authentication/auth/Login/Login';
import Signup from './src/screens/authentication/auth/Login/Signup';
import colors from './src/util/Colors';
import normalize from 'react-native-normalize';
import Consts from './src/util/Consts';
import * as ImageAssets from './src/util/ImageAssets';
import LabelText from './src/screens/home/LabelText';
import { useNavigation } from '@react-navigation/native';
import Home from './src/screens/home/Home';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeTab (){
  const navigation = useNavigation();

  return(
<Tab.Navigator  
initialRouteName='Home'
screenOptions={{
  backgroundColor:colors.black,
  headerShown: false,
  tabBarLabelStyle: { fontSize: normalize(12), marginBottom: 5, inactiveTintColor: colors.white, activeTintColor: colors.white },
  tabBarItemStyle: { width: 100 },
  tabBarStyle: { backgroundColor: colors.white, height: normalize(64), borderTopLeftRadius:30, borderTopRightRadius:30 },
  tabBarOptions: {
    style: { backgroundColor: colors.white },
    flex: 1
  }
}}>
      <Tab.Screen name={Consts.home} component={Home} options={{
        tabBarLabel: ({ size, focused, color }) => {
          return (
           <LabelText
           label={Consts.home}
           focused={focused}>
           </LabelText>
          )},
        tabBarIcon: ({ size, focused, color }) => {
          return (
            <TouchableOpacity 
            onPress={()=>{
              navigation.navigate(Consts.Home)
            }}
            activeOpacity={0.9}>
            <Image
              style={{ width: 20, height: 20, tintColor: focused ? colors.primary : colors.textGray }}
              source={
                ImageAssets.home}
            />
            </TouchableOpacity>
          );
        },
      }} />
      <Tab.Screen name={Consts.myservice} component={Signup} options={{
        tabBarLabel: ({ size, focused, color }) => {
          return (
           <LabelText
           focused={focused}
           label={Consts.myservice}>
           </LabelText>
          )},
        tabBarIcon: ({ size, focused, color }) => {
          return (
            <TouchableOpacity 
            onPress={()=>{
              navigation.navigate(Consts.myservice)
            }}
            activeOpacity={0.9}>
            <Image
              style={{ width: 20, height: 20, tintColor: focused ? colors.primary : colors.textGray }}
              source={
                ImageAssets.my_service}
            />
            </TouchableOpacity>
          );
        },
      }}  />
<Tab.Screen name={Consts.notification} component={Signup} options={{
        tabBarLabel: ({ size, focused, color }) => {
          return (
           <LabelText
           label={Consts.notification}>
           </LabelText>
          )},
        tabBarIcon: ({ size, focused, color }) => {
          return (
            <TouchableOpacity 
            onPress={()=>{
              navigation.navigate(Consts.notification)
            }}
            activeOpacity={0.9}>
            <Image
              style={{ width: 18, height: 20, tintColor: focused ? colors.primary : colors.textGray }}
              source={
                ImageAssets.notification}
            />
            </TouchableOpacity>
          );
        },
      }} />
<Tab.Screen name={Consts.myaccount} component={Signup} options={{
        tabBarLabel: ({ size, focused, color }) => {
          return (
           <LabelText
           label={Consts.myaccount}>
           </LabelText>
          )},
        tabBarIcon: ({ size, focused, color }) => {
          return (
            <TouchableOpacity 
            onPress={()=>{
              navigation.navigate(Consts.myaccount)
            }}
            activeOpacity={0.9}>
            <Image
              style={{ width: 20, height: 20, tintColor: focused ? colors.primary : colors.textGray }}
              source={
                ImageAssets.my_account}
            />
            </TouchableOpacity>
          );
        },
      }}  />
    </Tab.Navigator>
  )
}

const App = () =>{
  return(
  <NavigationContainer>
  <Stack.Navigator initialRouteName='Welcome' screenOptions={{headerShown: false}}>
    <Stack.Screen name="Splash" component={Splash} />
    <Stack.Screen name="Welcome" component={Welcome} />
    <Stack.Screen name="Auth" component={Auth} />
    <Stack.Screen name='HomeTab' component={HomeTab}/>
  </Stack.Navigator>
</NavigationContainer>
  )
}

const styles = StyleSheet.create({
})
export default App;