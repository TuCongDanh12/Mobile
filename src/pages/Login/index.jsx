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
import { useForm } from "../../Hooks/useForm";
export default function Login({ navigation }) {
  const { validate, register, form } = useForm({
    telephonenumber: [{ required: true }],
    password: [{ required: true }],
  });
  const onPress = async (ev) => {
    try {
      ev.preventDefault();
      if (validate()) {
        const res = await execute(form);
        console.log(res);

        // setDisable(true)
        // await message.success('Đăng nhập thành công', [2])
        // setDisable(false)
      }
    } catch (err) {
      //   message.error('Username or Password incorrect', [3])
    }
  };
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
            {...register("telephonenumber")}
            style={{ width: "90%", marginBottom: 20 }}
            placeholder={"Số điện thoại"}
          />
          <Input
            {...register("password")}
            style={{ width: "90%", marginBottom: 20 }}
            type={"password"}
            placeholder={"Mật khẩu"}
          />

          <ButtonLogin
            onPress={() => navigation.navigate("HomePage")}
            style={{ width: "90%", marginBottom: 10 }}
          >
            Đăng nhập
          </ButtonLogin>
        </View>
        <View
          style={{
            width: "90%",
            flexDirection: "row",
            justifyContent: "flex-end",
            marginBottom: 10,
          }}
        >
          <Text style={[styles.link]}>Quên mật khẩu</Text>
        </View>
        <View
          style={{
            width: "90%",
            flexDirection: "row",
            justifyContent: "flex-center",
            alignItems: "center",
          }}
        >
          <View
            style={{ flex: 1, height: 1, backgroundColor: "#8A8989" }}
          ></View>
          <Text> Hoặc</Text>
          <View
            style={{ flex: 1, height: 1, backgroundColor: "#8A8989" }}
          ></View>
        </View>
        <TouchableOpacity
          style={[
            styles.buttonGoole,
            {
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: 30,
            },
          ]}
        >
          <Image
            style={{ width: 24, height: 24, marginHorizontal: 10 }}
            source={require("../../../assets/images/google.png")}
          />
          <Text>Đăng nhập với Google</Text>
        </TouchableOpacity>
        <View style={{ flexDirection: "row" }}>
          <Text style={{ paddingHorizontal: 10 }}>Bạn chưa có tài khoản</Text>
          <Text
            style={styles.link}
            onPress={() => {
              navigation.navigate("Register");
            }}
          >
            Đăng ký
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
