import {
  Image,
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import ButtonLogin from "./../../Component/Button/ButtonLogin";
import Input from "../../Component/Input";
export default function Register({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={[styles.container, { flex: 1 }]}>
        <View
          style={{
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            style={{ marginBottom: 60 }}
            source={require("../../../assets/images/Logo.png")}
          />
          <Input
            style={{ width: "90%", marginBottom: 20 }}
            placeholder={"Số điện thoại"}
          />
          <Input
            style={{ width: "90%", marginBottom: 20 }}
            type={"password"}
            placeholder={"Mật khẩu"}
          />
          <Input
            style={{ width: "90%", marginBottom: 30 }}
            type={"password"}
            placeholder={"Nhập lại mật khẩu"}
          />

          <ButtonLogin style={{ width: "90%", marginBottom: 10 }}>
            Đăng kí
          </ButtonLogin>
        </View>

        <View style={{ flexDirection: "row" }}>
          <Text style={{ paddingHorizontal: 10 }}>Đã có tài khoản?</Text>
          <Text
            style={styles.link}
            onPress={() => {
              navigation.navigate("Login");
            }}
          >
            Đăng nhập
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  link: {
    color: "#D60000",
    fontSize: 14,
  },
  buttonGoole: {
    width: "90%",
    padding: 15, // Padding ở các phía của container
    alignItems: "flex-start", // Canh lề phần nội dung theo trục chính
    margin: 15, // Khoảng cách giữa các thành phần khác nhau
    borderRadius: 10, // Độ cong của góc
    backgroundColor: "#FFF", // Màu nền
    shadowColor: "#000", // Màu của bóng đổ
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.17, // Độ trong suốt của bóng đổ
    shadowRadius: 3, // Độ cong của bóng đổ
    elevation: 3, // Độ nâng của bóng đổ (chỉ áp dụng cho Android)
    margin: 10, // Khoảng cách giữa các thành phần khác nhau
  },
});
