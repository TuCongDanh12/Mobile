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
export default function UserInfor({ navigation }) {
  const [inputValue, setInputValue] = useState("");

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
          <Text style={styles.centerText}>Thông tin tài khoản</Text>
        </View>
      </View>
      <ScrollView>
        <View style={styles.body}>
          <View style={styles.item}>
            <Text style={styles.labels}>Họ tên</Text>
            <View style={styles.input}>
              <TextInput
                // style={styles.input}
                //   placeholder="Nhập giá trị"
                onChangeText={handleInputChange}
                value={inputValue}
              />
            </View>
          </View>

          <View style={styles.item}>
            <Text style={styles.labels}>Email</Text>
            <View style={styles.input}>
              <TextInput
                // style={styles.input}
                //   placeholder="Nhập giá trị"
                onChangeText={handleInputChange}
                value={inputValue}
              />
            </View>
          </View>

          <View style={styles.item}>
            <Text style={styles.labels}>SDT</Text>
            <View style={styles.input}>
              <TextInput
                // style={styles.input}
                //   placeholder="Nhập giá trị"
                onChangeText={handleInputChange}
                value={inputValue}
              />
            </View>
          </View>

          <View style={styles.item}>
            <Text style={styles.labels}>CCCD</Text>
            <View style={styles.input}>
              <TextInput
                // style={styles.input}
                //   placeholder="Nhập giá trị"
                onChangeText={handleInputChange}
                value={inputValue}
              />
            </View>
          </View>

          <View style={styles.item}>
            <Text style={styles.labels}>Địa chỉ</Text>
            <View style={styles.input}>
              <TextInput
                // style={styles.input}
                //   placeholder="Nhập giá trị"
                onChangeText={handleInputChange}
                value={inputValue}
              />
            </View>
          </View>
        </View>
      </ScrollView>
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
});
