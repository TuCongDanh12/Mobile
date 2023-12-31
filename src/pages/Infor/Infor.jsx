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

export default function Infor({ navigation }) {
  const [Search, setSearch] = useState("");

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
            <Text style={styles.title}>Bách Khoa Thành phố Hồ Chí Minh</Text>
          </View>

          <View style={{ padding: 10 }}>
            <Image
              source={require("../../../assets/images/BK.png")}
              style={{ width: 300, height: 250 }}
            />
          </View>

          <View style={{ padding: 10 }}>
            <Text style={{ textAlign: "justify" }}>
              Nổi tiếng với danh hiệu là trường đại học đào tạo kỹ thuật đầu
              ngành của miền Nam, Đại học Bách Khoa TP.HCM là trường đại học
              trọng điểm và cũng là trường nổi tiếng nhất trong hệ thống Đại học
              Quốc gia TP.HCM. Trường Đại học Bách Khoa – ĐHQG TP.HCM (website:
              hcmut.edu.vn) đã trải qua 55 năm hình thành và phát triển. Hiện
              nay, với môi trường sáng tạo và chuyên nghiệp được định hình ngày
              càng rõ nét, trường Đại học Bách Khoa vẫn không ngừng lớn mạnh,
              giữ vững vai trò đầu tàu về đào tạo và nghiên cứu khoa học của khu
              vực phía Nam cũng như của cả nước.
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
