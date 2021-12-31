import React from "react";
import { View,Button,SafeAreaView,Text,Image,TextInput,FlatList, ScrollView } from "react-native";
import TabHeader from "../../granulars/TabHeader";
import WhitetopHeader from "../../granulars/WhitetopHeader";
import StyleImages from "../../styles/StyleImages";
import textStyles from "../../styles/textStyles";
import Viewstyles from "../../styles/ViewStyles";
import Consts from "../../util/Consts";
import * as ImageAssets from '../../util/ImageAssets'
import LoginStyles from "../authentication/auth/Login/LoginStyles";
import homeStyles from "./HomeStyles";

const Home =() =>{

    const BANNER_DATA = [
        {
          id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
          title: 'First Item',
        },
        {
          id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
          title: 'Second Item',
        },
        {
          id: '58694a0f-3da1-471f-bd96-145571e29d72',
          title: 'Third Item',
        },
      ];

      const SERVICES = [
        {
          id: '1',
          title: 'Laundry',
        },
        {
          id: '2',
          title: 'Dry Clean',
        },
        {
          id: '3',
          title: 'Iron',
        },
        {
            id: '4',
            title: 'Laundry',
          },
          {
            id: '5',
            title: 'Dry Clean',
          },
          {
            id: '6',
            title: 'Iron',
          },
      ];


      const renderBannerItem = ({ item, index }) => (
      
        <View style={homeStyles.viewBanner}>
           <Image
           style={homeStyles.bannerImage}
           source={ImageAssets.homeDummy}/> 

        </View>
    );

    const renderServices = ({ item, index }) => (
      
        <View style={[homeStyles.viewServices]}>
          
          <Text style={homeStyles.servicesText}>{item.title}</Text>
        </View>
    );
    
    return(
        <TabHeader>
         <WhitetopHeader>
           <View style={homeStyles.viewRow}>

               <Image style={homeStyles.locationIcon}
               source={ImageAssets.home_location}/>

               <Text 
               style={textStyles.textHeading}>Lorem ipsum is dummy</Text>
               
               <View style={Viewstyles.viewLanguage}>
               <Text style={textStyles.textLanguage}>En</Text>
               </View>
               </View>

             </WhitetopHeader>  
             <ScrollView>
                <View style={[Viewstyles.viewMain]}>

            <View style={[Viewstyles.view10,homeStyles.viewSearch]}>

                <TextInput
                style={[textStyles.textSearch]}
                placeholder="Search Here .."
                numberOfLines={1}/>

                <Image
                style={[StyleImages.imgSearch,homeStyles.searchView]}
                source={ImageAssets.search}/>
               
            </View>
            <View>
            <FlatList
                                style={homeStyles.homeFlat}
                                nestedScrollEnabled
                                horizontal
                                showsHorizontalScrollIndicator={false}
                                data={BANNER_DATA}
                                renderItem={renderBannerItem}
                                keyExtractor={item => item.id}/>
                                </View>

                                <Text 
               style={[textStyles.textSubHeading,LoginStyles.marginTop10]}>{Consts.servieWash}</Text>

                          <View>
            <FlatList
                                style={homeStyles.homeFlat}
                                nestedScrollEnabled
                                data={SERVICES}
                                renderItem={renderServices}
                                numColumns={2}
                                keyExtractor={item => item.id}/>
                                </View>       

            </View>
            </ScrollView>
        </TabHeader>
    )
}
export default React.memo(Home);