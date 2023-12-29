import {
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
  Text,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import UserInfor from "../UserInfor/UserInformation";

export default function User_Infor({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          flex: 2.5,
          flexDirection: "column",
        }}
      >
        <Image //avatar
          source={require("../../../assets/images/ava.png")}
          style={{ width: 150, height: 150, borderRadius: 100, marginTop: 20 }}
        />

        <TouchableOpacity //button camera
          style={{
            padding: 10,
            borderRadius: 100,
            backgroundColor: "#EEEEEE",
            bottom: 40,
            left: 50,
          }}
          onPress={() => console.log("cam")}
        >
          <Image
            source={require("../../../assets/icons/camera.png")}
            style={{ width: 30, height: 30 }}
          />
        </TouchableOpacity>

        <Text
          style={{
            fontWeight: "bold",
            fontSize: 25,
            marginTop: 20,
            bottom: 50,
          }}
        >
          Trần Quang Khải
        </Text>
      </View>

      <View style={{ flexDirection: "column", flex: 2.5 }}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate(UserInfor);
          }}
        >
          <View style={styles.box}>
            <Image
              source={require("../../../assets/icons/user.png")}
              style={{ width: 30, height: 30, justifyContent: "center" }}
            />
            <Text
              style={{
                fontSize: 20,
                justifyContent: "center",
                marginRight: 100,
              }}
            >
              Thông tin tài khoản
            </Text>
            <Image
              source={require("../../../assets/icons/next.png")}
              style={{
                width: 15,
                height: 15,
                justifyContent: "center",
                marginRight: 20,
              }}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate("History");
          }}
        >
          <View style={styles.box}>
            <Image
              source={require("../../../assets/icons/book.png")}
              style={{ width: 30, height: 30, justifyContent: "center" }}
            />
            <Text
              style={{
                fontSize: 20,
                justifyContent: "center",
                marginRight: 120,
              }}
            >
              Nhật ký check in
            </Text>
            <Image
              source={require("../../../assets/icons/next.png")}
              style={{
                width: 15,
                height: 15,
                justifyContent: "center",
                marginRight: 20,
              }}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Setting");
          }}
        >
          <View style={styles.box}>
            <Image
              source={require("../../../assets/icons/settings.png")}
              style={{ width: 30, height: 30, justifyContent: "center" }}
            />
            <Text
              style={{
                fontSize: 20,
                justifyContent: "center",
                marginRight: 205,
              }}
            >
              Cài đặt
            </Text>
            <Image
              source={require("../../../assets/icons/next.png")}
              style={{
                width: 15,
                height: 15,
                justifyContent: "center",
                marginRight: 20,
              }}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Login");
          }}
        >
          <View
            style={{
              flexDirection: "row",
              padding: 10,
              marginLeft: 5,
              justifyContent: "center",
            }}
          >
            <Image
              source={require("../../../assets/icons/exit.png")}
              style={{ width: 30, height: 30, justifyContent: "center" }}
              tintColor={"red"}
            />
            <Text
              style={{
                fontSize: 20,
                justifyContent: "center",
                marginLeft: 25,
                color: "red",
              }}
            >
              Đăng xuất
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.footernode}
          onPress={() => {
            navigation.navigate("HomePage");
          }}
        >
          <Image
            source={require("../../../assets/icons/home.png")}
            style={{ width: 25, height: 25 }}
          />
          <Text style={{ fontSize: 7 }}>Trang chủ</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.footernode}
          onPress={() => {
            navigation.navigate("User_Infor");
          }}
        >
          <Image
            source={require("../../../assets/icons/user.png")}
            style={{ width: 25, height: 25 }}
          />
          <Text style={{ fontSize: 7 }}>Tài khoản</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.scanbutton}
        onPress={() => {
          navigation.navigate("ScanQR");
        }}
      >
        <Image
          source={require("../../../assets/icons/qr.png")}
          style={{ width: 50, height: 50 }}
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  box: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  scanbutton: {
    padding: 15,
    borderRadius: 100,
    backgroundColor: "pink",
    position: "absolute",
    bottom: "3%",
    left: "40%",
  },
  footernode: {
    flexDirection: "column",
    backgroundColor: "#ECECEC",
    alignItems: "center",
    justifyContent: "flex-end",
    marginHorizontal: 50,
  },
  footer: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    padding: 10,
    flex: 0.4,
    width: "auto",
    height: 60,
    backgroundColor: "#ECECEC",
  },
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: "white",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
