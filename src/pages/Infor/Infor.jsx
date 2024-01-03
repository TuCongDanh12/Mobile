import {
  StyleSheet,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
  Text,
  View,
  TextInput,
} from "react-native";

import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { useRoute } from '@react-navigation/native';


export default function Infor({ navigation }) {
  const [Search, setSearch] = useState("");
  const route = useRoute();
  const randomNumber = Math.floor(Math.random() * 5) + 1; // Số nguyên từ 1 đến 5

  const locaList = [
    {
        no:1,
        img: "https://photo-cms-giaoduc.epicdn.me/w700/Uploaded/2023/lwivvpiv/2022_07_10/gdvn-neu-17-8049.jpg",
        name: 'Hội trường bách khoa',
    },
    { no:2,
        img: "https://thanhnien.mediacdn.vn/Uploaded/haanh/2022_06_29/img-0130-398.jpg",
        name: 'Đại học bách khoa HCM',
    },
    {no:3,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOfjE2QRFg34SO6KoMtWYOqr9xs2b7uCCNEw&usqp=CAU",
        name: 'Thư viện',
    },
    {no:4,
        img: "https://cafefcdn.com/203337114487263232/2023/10/31/1-1620-1698718053767-16987180543791191312606.jpg",
        name: 'Nhà ăn bách khoa',
    },
    {no:5,
      img: "https://lawnet.vn/uploads/image/2020/10/29/Phong-thi-nghiem-nghien-cuu-SV-bien-doi-gen-phai-co-it-nhat-7-can-bo-co-huu.jpg",
      name: 'Phòng thí nghiệm',
  },
];

const filtered = locaList.filter(item =>
  item.no==randomNumber
);

imgs=filtered[0].img;
names=filtered[0].name;
  // Nhận tham số từ đối tượng route.params
  const img = route.params?.img || imgs;
  const name = route.params?.name || names;
  console.log(names);
  console.log(imgs);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View
          style={{
            // flexDirection: "row",
            // justifyContent: "space-between",
            // marginTop: 20,
            alignItems: "center",
            // paddingVertical: 20,
            borderBottomColor: "#DDDDDD",
            borderBottomWidth: 1,
            paddingHorizontal: 16,
            flexDirection: "row",
          }}
        >
          <View>
            <Ionicons.Button
              name="arrow-back-outline"
              size={20}
              backgroundColor={"white"}
              color={"black"}
              onPress={() => navigation.goBack()}
            ></Ionicons.Button>
          </View>

          <View
            style={{
              // alignItems: "center",
              // justifyContent: "center",
              // marginRight: 10,
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: 18,
                color: "black",
                fontWeight: "bold",
                textAlign: "center",
                marginLeft: -40,
              }}
            >
              Thông tin địa điểm
            </Text>
          </View>
        </View>
      </View>

      <ScrollView>
        <View style={{ alignItems: "center", padding: 10 }}>
          <View style={{ padding: 10 }}>
            <Text style={styles.title}>{name}</Text>
          </View>

          <View style={{ padding: 10 }}>
            <Image
              // source={require("../../../assets/images/BK.png")}
              source={{ uri: img}}
              style={{ width: 350, height: 250, borderRadius:10 }}
            />
          </View>

          <View style={{ padding: 10 }}>
            <Text style={{ textAlign: "justify" }}>
              {name} Nổi tiếng với danh hiệu là trường đại học đào tạo kỹ thuật đầu
              ngành của miền Nam, Đại học Bách Khoa TP.HCM là trường đại học
              trọng điểm và cũng là trường nổi tiếng nhất trong hệ thống Đại học
              Quốc gia TP.HCM. Trường Đại học Bách Khoa – ĐHQG TP.HCM (website:
              hcmut.edu.vn) đã trải qua 55 năm hình thành và phát triển. Hiện
              nay, với môi trường sáng tạo và chuyên nghiệp được định hình ngày
              càng rõ nét, trường Đại học Bách Khoa vẫn không ngừng lớn mạnh,
              giữ vững vai trò đầu tàu về đào tạo và nghiên cứu khoa học của khu
              vực phía Nam cũng như của cả nước.
              {'\n'}{'\n'}
              có lẽ là địa điểm Việt Nam không còn xa lạ với du khách 
              cả trong và ngoài nước. Nơi đây gây ấn tượng với khách tham quan bởi vẻ 
              đẹp hoài cổ và thơ mộng. Nằm e ấp bên dòng sông Hoài, cảnh sắc ở Hội An 
              đẹp như một bức tranh trữ tình tô điểm bởi những chiếc đèn lồng rực rỡ 
              sắc màu. 
              {'\n'}{'\n'}
              Sinh viên sẽ có dịp chiêm ngưỡng những di sản kiến trúc 
              độc đáo tồn tại hàng trăm năm cùng nhiều điểm vui chơi hấp dẫn như Cù Lao 
              Chàm, biển Cửa Đại, làng rau Trà Quế,... Ẩm thực nơi đây cũng là một nét nổi
              bật khiến nhiều du khách thích thú với những món ngon như cao lầu, hoành 
              thánh, mì Quảng…
            </Text>
          </View>
        </View>

        <View style={{ padding: 10 }}>
          <Text style={{ fontWeight: "bold", fontSize: 15 }}>Bình luận</Text>
        </View>

        <View style={{ flexDirection: "row", padding: 10, height: 150 }}>
          <Image
            source={require("../../../assets/images/ava.png")}
            style={{ width: 40, height: 40, borderRadius: 100, padding: 10 }}
          />

          <TextInput
            style={styles.input}
            value={Search}
            onChangeText={setSearch}
            placeholder="Viết bình luận..."
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    width: "100%",
    paddingTop: 30,
  },
  input: {
    height: 40,
    width: "80%",
    paddingLeft: 20,
    borderWidth: 1,
    borderRadius: 30,
    marginHorizontal: 10,
  },
  box: {
    marginTop: 70,
    width: 250,
    height: 90,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
