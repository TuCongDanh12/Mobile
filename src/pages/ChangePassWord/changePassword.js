import React, { useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  TextInput,
  useColorScheme,
  Button,
  Touchable,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import Icon from "react-native-vector-icons/Feather";
export default function ChangePassword({ navigation }) {
  const [inputValue, setInputValue] = useState("");
  const [inputOldPassword, setInputOldPassword] = useState("");
  const [inputNewPassword, setInputNewPassword] = useState("");
  const [inputConfirmPassword, setInputConfirmPassword] = useState("");

  const handleInputChange = (text) => {
    setInputValue(text);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.leftElement}>
          <Icon
            name="arrow-left"
            size={24}
            color="#CE5C7D"
            onPress={() => {
              navigation.goBack();
            }}
          />
        </View>
        <View style={styles.centerElement}>
          <Text style={styles.centerText}>Đổi mật khẩu</Text>
        </View>
      </View>
      <ScrollView>
        <View style={styles.body}>
          <View style={styles.item}>
            <Text style={styles.labels}>Mật khẩu hiện tại</Text>
            <View style={styles.input}>
              <TextInput
                placeholder="Mật khẩu hiện tại"
                // onChangeText={handleInputChange}
                value={inputOldPassword}
                onChangeText={(text) => setInputOldPassword(text)}
              />
            </View>
          </View>

          <View style={styles.item}>
            <Text style={styles.labels}>Mật khẩu mới</Text>
            <View style={styles.input}>
              <TextInput
                placeholder="Mật khẩu mới"
                onChangeText={(text) => setInputNewPassword(text)}
                value={inputNewPassword}
              />
            </View>
          </View>

          <View style={styles.item}>
            <Text style={styles.labels}>Nhập lại mật khẩu mới</Text>
            <View style={styles.input}>
              <TextInput
                placeholder="Nhập lại mật khẩu mới"
                value={inputConfirmPassword}
                onChangeText={(text) => setInputConfirmPassword(text)}
              />
            </View>
          </View>
        </View>
      </ScrollView>
      <View
        style={{
          padding: 10,
          borderRadius: 5,
          alignItems: "center",
          marginVertical: 10,
        }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: "#F8F8F8",
            borderWidth: 1,
            borderColor: "#F34584",
            borderRadius: 5,
            padding: 10,
          }}
        >
          <Text
            style={{
              color: "#F34584",
              borderColor: "#F34584",
            }}
          >
            Cập nhật mật khẩu
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: { paddingTop: 30 },
  header: {
    alignItems: "center",
    paddingVertical: 20,
    borderBottomColor: "#DDDDDD",
    borderBottomWidth: 1,
    paddingHorizontal: 16,
    flexDirection: "row",
  },
  leftElement: {},
  centerElement: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  centerText: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
  },
  body: {
    paddingHorizontal: 18,
    paddingTop: 16,
  },
  item: {
    marginBottom: 16,
  },
  labels: {
    fontSize: 16,
  },
  input: {
    paddingVertical: 10,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 10,
    backgroundColor: "#F8F8F8",
    paddingHorizontal: 18,
  },
});
