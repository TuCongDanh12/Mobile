import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Platform,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { MagnifyingGlassIcon } from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";

import tw from "twrnc";
import Trending from "../../Component/Trending";
import List from "../../Component/List";

const ios = Platform.OS === "ios";

export default function HomePage() {
  const navigation = useNavigation();

  const [trending, setTrending] = useState([1, 2, 3, 4, 5]);
  const [propose, setPropose] = useState([1, 2, 3, 4, 5]);
  const [nearby, setNearby] = useState([1, 2, 3, 4, 5]);

  return (
    <View style={tw`flex-1`}>
      <SafeAreaView>
        <StatusBar style="dark" />
        <View style={tw`flex-row justify-between items-center mx-4 my-3`}>
          <View>
            <Image
              source={require("../../../assets/images/Logo.png")}
              style={{ height: 30, aspectRatio: 104 / 31 }}
            />
          </View>

          <TouchableOpacity onPress={() => navigation.navigate("Search")}>
            <MagnifyingGlassIcon size="24" strokeWidth={2.5} color="#3C3C43" />
          </TouchableOpacity>
        </View>
      </SafeAreaView>

      <ScrollView>
        <View style={tw`flex-row items-center mx-4 my-3`}>
          <TouchableOpacity onPress={() => navigation.navigate("User_Infor")}>
            <Image
              source={require("../../../assets/images/avatar.png")}
              style={{
                height: 50,
                width: 50,
                aspectRatio: 1 / 1,
                borderRadius: 30,
              }}
            />
          </TouchableOpacity>

          <Text style={{ fontSize: 18, fontWeight: 600, marginLeft: 20 }}>
            Trần Quang Khải
          </Text>
        </View>

        <View
          style={{
            borderBottomWidth: 10,
            borderBottomColor: "#E7E7E7",
            width: "100%",
            marginBottom: 20,
          }}
        />
        <Trending data={trending} />

        <View
          style={{
            borderBottomWidth: 10,
            borderBottomColor: "#E7E7E7",
            width: "100%",
            marginBottom: 12,
          }}
        />
        <List title="Đề xuất cho bạn" data={propose} />

        <View
          style={{
            borderBottomWidth: 10,
            borderBottomColor: "#E7E7E7",
            width: "100%",
            marginBottom: 12,
          }}
        />
        <List title="Địa điểm gần bạn" data={nearby} />

        {/* khoảng trống */}
        <View
          style={{
            borderBottomWidth: 10,
            borderBottomColor: "rgba(0, 0, 0, 0)",
            width: "100%",
            marginBottom: 80,
          }}
        />
      </ScrollView>

      <SafeAreaView >
      <View style={{
            flexDirection: "row",
            alignItems: "flex-end",
            justifyContent: "space-between",
            padding: 10,
            height: 80,
            marginTop:-30,
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
      </SafeAreaView>
    </View>
  );
}