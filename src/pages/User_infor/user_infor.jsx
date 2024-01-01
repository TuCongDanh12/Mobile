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
import SettingList from "../../Component/SettingList/index"
import tw from "twrnc";
import Navbar from "../../Component/Navbar/index"

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
            fontSize: 20,
            marginTop: 20,
            bottom: 50,
          }}
        >
          Trần Quang Khải
        </Text>
      </View>

      <View style={{ flexDirection: "column", flex: 2.5 }}>
   

        
        <SettingList title="Thông tin tài khoản" icon={require("../../../assets/icons/user.png")} link= {UserInfor}/>

        <SettingList title="Nhật kí check-in" icon={require("../../../assets/icons/book.png")} link= "History"/>

        <SettingList title="Cài đặt" icon={require("../../../assets/icons/Vector.png")} link= "Setting"/>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Login");
          }}
        >
        

          <View style={tw`flex-row justify-between items-center mx-4 my-3`}>
            <View style={tw`flex-row`}>
            <Image
              source={require("../../../assets/icons/exit.png")}
              style={{ width: 26, height: 26, justifyContent: "center" , marginRight: 20,
}}              tintColor={"red"}

            />
            <Text
              style={{
                fontSize: 16,
                justifyContent: "center",
                color: "red",
              }}
            >
              Đăng xuất
            </Text>
            </View>
            

            <Image
              source={require("../../../assets/icons/next.png")}
              style={{
                width: 0,
                height: 0,
                justifyContent: "center",
                marginRight: 20,
              }}
            />
          </View>
        </TouchableOpacity>
      </View>


<Navbar/>


      

      
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
