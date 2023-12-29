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
import { useNavigation } from "@react-navigation/native";
import tw from "twrnc";

const { width, height } = Dimensions.get("window");

export default function Search() {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([1, 2, 3, 4, 5]);
  const [results1, setResults1] = useState([1, 2, 3, 4, 5]);

  let name = "Thư viện bách khoa";

  return (
    <SafeAreaView style={tw` flex-1`}>
      {/* search input */}
      <View
        style={tw`mx-4 mb-3 mt-3 flex-row justify-between items-center border border-neutral-400 rounded-full`}
      >
        <TextInput
          onChangeText={() => {}}
          placeholder="Tìm kiếm địa điểm"
          placeholderTextColor={"#C8C8C8"}
          style={tw`pb-1 pl-6 flex-1 text-base text-black tracking-wider`}
        />
        <TouchableOpacity
          onPress={() => navigation.navigate("HomePage")}
          style={tw`rounded-full p-2 m-1 bg-neutral-500`}
        >
          <XMarkIcon size="15" color="white" />
        </TouchableOpacity>
      </View>

      {results.length > 0 ? (
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 15 }}
          // style={tw`space-y-3`}
        >
          <Text className="text-white font-semibold ml-1">
            Kết quả ({results.length})
          </Text>

          <View style={tw`flex-row justify-between flex-wrap mt-4`}>
            {results.map((item, index) => {
              return (
                <TouchableWithoutFeedback
                  key={index}
                  onPress={() => navigation.push("Infor", item)}
                >
                  <View style={tw`mb-8`}>
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
      ) : (
        <View style={tw`flex-row justify-center mt-40`}>
          <Image
            source={require("../../assets/images/search-map-icon.png")}
            style={tw`h-60 w-60`}
          />
        </View>
      )}
    </SafeAreaView>
  );
}
