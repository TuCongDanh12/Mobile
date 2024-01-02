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
          {locaList.map((item, index) => {
            return (
              <TouchableWithoutFeedback
                key={index}
                onPress={() => navigation.push("Infor", item)}
              >
                <View style={tw` mb-8`}>
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
    </SafeAreaView>
  );
}
