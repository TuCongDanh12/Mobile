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
        <View style={{
            flexDirection: "row",
            alignItems: "flex-end",
            justifyContent: "space-between",
            padding: 10,
            height: 80,
            backgroundColor: "#ECECEC",
            }}>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("HomePage");
                  }}
                >
                  <Image
                    source={require("../../../assets/icons/Homeicon.png")}
                    style={{ height: 40, aspectRatio: 135 / 120 , marginLeft: 30, marginBottom: 10}}
                  />
                </TouchableOpacity>
        
                <TouchableOpacity
                onPress={() => {
                  navigation.navigate("ScanQR");
                }}
              >
                <Image
                  source={require("../../../assets/icons/QRicon.png")}
                  style={{ width: 100, height: 100 }}
                />
              </TouchableOpacity>
        
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("User_Infor");
                  }}
                >
                  <Image
                    source={require("../../../assets/icons/Accounticon.png")}
                    style={{ height: 40, aspectRatio: 132 / 138 , marginRight: 30, marginBottom: 10}}
                  />
                </TouchableOpacity>
              </View>
    );
  }
  