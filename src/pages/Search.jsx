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
  const [results, setResults] = useState([]);

  let name = "Thư viện bách khoa";
  const locaList = [
    {
        img: "https://photo-cms-giaoduc.epicdn.me/w700/Uploaded/2023/lwivvpiv/2022_07_10/gdvn-neu-17-8049.jpg",
        name: 'Hội trường bách khoa',
    },
    {
        img: "https://thanhnien.mediacdn.vn/Uploaded/haanh/2022_06_29/img-0130-398.jpg",
        name: 'Đại học bách khoa HCM',
    },
    {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOfjE2QRFg34SO6KoMtWYOqr9xs2b7uCCNEw&usqp=CAU",
        name: 'Thư viện',
    },
    {
        img: "https://cafefcdn.com/203337114487263232/2023/10/31/1-1620-1698718053767-16987180543791191312606.jpg",
        name: 'Nhà ăn bách khoa',
    },
    {
      img: "https://lawnet.vn/uploads/image/2020/10/29/Phong-thi-nghiem-nghien-cuu-SV-bien-doi-gen-phai-co-it-nhat-7-can-bo-co-huu.jpg",
      name: 'Phòng thí nghiệm',
  },
];
const handleSearch = (searchTerm) => {
  // Filter the data based on the search term
  if(searchTerm=="")   setResults([]);
  else{
    const filtered = locaList.filter(item =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    // Update the state with the filtered data
    setResults(filtered);
  }
  
};

  return (
    <SafeAreaView style={tw` flex-1`}>
      {/* search input */}
      <View
        style={tw`mx-4 mb-3 mt-3 flex-row justify-between items-center border border-neutral-400 rounded-full`}
      >
        <TextInput
          onChangeText={handleSearch}
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
                  source={{ uri: item.img}}
                  style={{
                        width: width * 0.44,
                        height: height * 0.3,
                        borderRadius: 10,
                      }}
                    />
                    <Text style={tw`mt-1 ml-1 font-medium`}>
                    {item.name.length > 19 ? item.name.slice(0, 19) + "..." : item.name}
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
