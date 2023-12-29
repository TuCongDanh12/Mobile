import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  TouchableWithoutFeedback,
  Dimensions,
} from "react-native";
import React, { useCallback, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { XMarkIcon } from "react-native-heroicons/outline";
import { useNavigation, useRoute } from "@react-navigation/native";
import { ArrowLeftIcon } from "react-native-heroicons/outline";

import tw from "twrnc";

const { width, height } = Dimensions.get("window");

export default function SeeAll() {
  const navigation = useNavigation();
  const [data, setData] = useState([1, 2, 3, 4, 5]);
  let name = "Thư viện bách khoa";

  return (
    <SafeAreaView style={tw`flex-1`}>
      <View style={tw`flex-row items-center mx-4 my-3`}>
        <TouchableOpacity onPress={() => navigation.navigate("HomePage")}>
          <ArrowLeftIcon size="22" strokeWidth={2.5} color="#3C3C43" />
        </TouchableOpacity>

        <Text style={{ fontSize: 16, fontWeight: 600, marginLeft: 90 }}>
          Đề xuất cho bạn
        </Text>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 15 }}
        // style={tw`space-y-3`}
      >
        <View style={tw`flex-row justify-between flex-wrap mt-4`}>
          {data.map((item, index) => {
            return (
              <TouchableWithoutFeedback
                key={index}
                onPress={() => navigation.push("Infor", item)}
              >
                <View style={tw` mb-8`}>
                  <Image
                    source={require("../../assets/images/bk.jpg")}
                    style={{
                      width: width * 0.44,
                      height: height * 0.3,
                      borderRadius: 10,
                    }}
                  />
                  <Text style={tw`mt-1 ml-1 font-medium`}>
                    {name.length > 21 ? name.slice(0, 21) + "..." : name}
                  </Text>
                </View>
              </TouchableWithoutFeedback>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
