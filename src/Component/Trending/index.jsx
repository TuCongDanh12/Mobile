import {
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
  Dimensions,
} from "react-native";
import React from "react";
import Carousel from "react-native-snap-carousel";
import { useNavigation } from "@react-navigation/native";
import tw from "twrnc";

var { width, height } = Dimensions.get("window");

export default function Trending({ data }) {
  const navigation = useNavigation();

  const handleClick = (item) => {
    navigation.navigate("Infor", item);
  };

  const locaList = [
    {
        img: "https://afamilycdn.com/2018/3/8/img0734-15204757505411296701947-1520476246246316658369.png",
        name: 'Đại học nhân văng',
    },
    {
        img: "https://nhavanhoasinhvien.vn/wp-content/uploads/2020/06/q1.jpg",
        name: 'Nhà văn hóa sinh viên',
    },
    {
      img: "https://cafebiz.cafebizcdn.vn/162123310254002176/2022/8/30/8dai-hoc-thuong-mai-1661845920180975824556-1661851373476-16618513736901433869588.jpg",
      name: 'Bãi giữ xe',
  },
  {
    img: "https://trangtuyensinh.com.vn/wp-content/uploads/2022/02/b-16027363633051255712834.jpg",
    name: 'Con đường tình yêu',
},
{
    img: "https://thanhnien.mediacdn.vn/Uploaded/haanh/2022_06_29/img-0130-398.jpg",
    name: 'Đại học bách khoa HCM',
},
];

  return (
    <View style={tw`mb-8`}>
      <Text style={tw`font-medium text-lg mx-4 mb-5`}>Trending</Text>
      <Carousel
        data={locaList}
        renderItem={({ item }) => (
          <MovieCard handleClick={handleClick} item={item} />
        )}
        firstItem={1}
        // loop={true}
        // inactiveSlideScale={0.86}
        inactiveSlideOpacity={0.6}
        sliderWidth={width}
        itemWidth={width * 0.62}
        slideStyle={{ display: "flex", alignItems: "center" }}
      />
    </View>
  );
}

const MovieCard = ({ item, handleClick }) => {
  return (
    <TouchableWithoutFeedback onPress={() => handleClick(item)}>
      <Image
        source={{ uri: item.img}}
        // source={{uri: image500(item.poster_path)}}
        style={{
          width: width * 0.6,
          height: height * 0.4,
          borderRadius: 10,
        }}
      />
    </TouchableWithoutFeedback>
  );
};
