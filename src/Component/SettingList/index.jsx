import {
    View,
    Text,
    ScrollView,
    TouchableWithoutFeedback,
    Image,
    Dimensions,
    StyleSheet,
    TouchableOpacity,
  } from "react-native";
  import React from "react";
  import { useNavigation } from "@react-navigation/native";
  const { width, height } = Dimensions.get("window");
  import tw from "twrnc";
  
  export default function List({ title, icon, link }) {
    const navigation = useNavigation();
    return (
      <TouchableOpacity
          onPress={() => {
            navigation.navigate(link);
          }}
        >
          <View style={tw`flex-row justify-between items-center mx-4 my-3`}>
            <View style={tw`flex-row`}>
            <Image
              source={icon}
              style={{ width: 28, height: 28, justifyContent: "center" , marginRight: 20}}
            />
            <Text
              style={{
                fontSize: 18,
                justifyContent: "center",
              }}
            >
              {title}
            </Text>
            </View>
            

            <Image
              source={require("../../../assets/icons/next.png")}
              style={{
                width: 15,
                height: 15,
                justifyContent: "center",
              }}
            />
          </View>
        </TouchableOpacity>
    );
  }
  