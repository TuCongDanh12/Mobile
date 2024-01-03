import {
  View,
  Text,
  ScrollView,
  TouchableWithoutFeedback,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
const { width, height } = Dimensions.get("window");
import tw from "twrnc";

export default function List({ title, data }) {
  const navigation = useNavigation();
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
    <View style={tw`mb-8 `}>
      <View style={tw`mx-4 flex-row justify-between items-center`}>
        <Text style={tw`text-lg font-medium`}>{title}</Text>

        <TouchableOpacity
          onPress={() =>
            navigation.navigate("SeeAll", { title: title, data: data })
          }
        >
          <Text
            style={{
              // background: '#eab308',
              color: "#CF2A66",
              fontSize: 12,
            }}
          >
            Xem thêm
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 15 }}
      >
        {locaList.map((item, index) => {
          return (
            <TouchableWithoutFeedback
              key={index}
              onPress={() => navigation.push("Infor", { img: item.img, name: item.name})}
            >
              <View style={tw`mt-4 mr-4`}>
                <Image
                  source={{ uri: item.img}}

                  style={{
                    width: width * 0.33,
                    height: height * 0.22,
                    borderRadius: 10,
                  }}
                />
                <Text style={tw`mt-1 ml-1 font-medium`}>
                  {item.name.length > 14 ? item.name.slice(0, 14) + "..." : item.name}
                </Text>
              </View>
            </TouchableWithoutFeedback>
          );
        })}
      </ScrollView>
    </View>
  );
}
