import { View, Text, ScrollView, TouchableWithoutFeedback, Image, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
const {width, height} =  Dimensions.get('window');
import tw from 'twrnc';

export default function List({title, data}) {
  const navigation = useNavigation();
  let name = 'Thư viện bách khoa';
  return (
    <View style={tw`mb-8 space-y-4`}>
      
      <View style={tw`mx-4 flex-row justify-between items-center`}>
        <Text style={tw`text-lg font-medium`}>{title}</Text>
        
            <TouchableOpacity onPress={()=> navigation.navigate('SeeAll', {title: title, data: data})}>
              <Text style={{
                background: '#eab308',
                color: '#CF2A66', fontSize: 12}} >Xem thêm</Text>
            </TouchableOpacity>
        
        
        
      </View>
      
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingHorizontal: 15}}
      >
        {
            data.map((item, index)=>{
                return (
                    <TouchableWithoutFeedback 
                      key={index} 
                      onPress={()=> navigation.push('Movie', item)}
                    >
                        <View style={tw`mt-4 mr-4`}>
                            <Image 
                              source={require('../../../assets/images/bk.jpg')} 
                              style={{ width: width*0.33, height: height*0.22, borderRadius: 10}} 
                            />
                            <Text style={tw`mt-1 ml-1 font-medium`}>
                                {
                                    name.length>14? name.slice(0,14)+'...': name
                                }
                            </Text>
                        </View>
                    </TouchableWithoutFeedback>
                )
            })
        }
      </ScrollView>
    </View>
  )
}