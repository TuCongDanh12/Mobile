import {
  height,
  width,
} from "deprecated-react-native-prop-types/DeprecatedImagePropType";
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
import tw from "twrnc";
export default function UserInfor({ navigation }) {
  const [inputName, setInputName] = useState("Trần Quang Khải");
  const [inputEmail, setInputEmail] = useState("");
  const [inputPhone, setInputPhone] = useState("0123456798");
  const [inputAddress, setInputAddress] = useState("");

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
          <Text style={styles.centerText}>Thông tin tài khoản</Text>
        </View>
      </View>
      <ScrollView>
        <View style={styles.body}>
          <View style={styles.item}>
            <Text style={styles.labels}>Họ tên</Text>
            <View style={styles.input}>
              <TextInput
                style={{ marginLeft: 10 }}
                value={inputName}
                onChangeText={(text) => setInputName(text)}
                editable={false}
              />
            </View>
          </View>

          <View style={styles.item}>
            <Text style={styles.labels}>Số điện thoại</Text>
            <View style={styles.input}>
              <TextInput
                style={{ marginLeft: 10 }}
                onChangeText={(text) => setInputPhone(text)}
                value={inputPhone}
                editable={false}
              />
            </View>
          </View>

          <View style={styles.item}>
            <Text style={styles.labels}>Email</Text>
            <View style={styles.input1}>
              <TextInput
                style={{ marginLeft: 10 }}
                onChangeText={(text) => setInputEmail(text)}
                value={inputEmail}
              />
            </View>
          </View>

          <View style={styles.item}>
            <Text style={styles.labels}>Địa chỉ</Text>
            <View style={styles.input1}>
              <TextInput
                style={{ marginLeft: 10 }}
                onChangeText={(text) => setInputAddress(text)}
                value={inputAddress}
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
            Cập nhật thông tin
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
    backgroundColor: "#DDDDDD",
  },
  input1: {
    paddingVertical: 10,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 10,
    backgroundColor: "#F8F8F8",
  },
});
