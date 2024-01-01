// import { Input } from "antd";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/Feather";
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
} from "react-native";
// onPress={() => {
//   // quay ve trang truoc
//   navigation.goBack();

//   // quay lai 2 bac
//   // navigation.pop(2);
//   // tro ve trang dau tien
//   navigation.popToTop();
// }}
export default function Setting({ navigation }) {
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
          <Text style={styles.centerText}>Cài đặt</Text>
        </View>
      </View>
      <ScrollView>
        <View style={styles.body}>
          <TouchableOpacity
            style={styles.item}
            onPress={() => {
              navigation.navigate("ChangePassword");
            }}
          >
            <View style={styles.square}>
              <Icon name="refresh-cw" size={24} color="black" />
            </View>
            <View style={styles.content}>
              <Text style={styles.location}>Đổi mật khẩu</Text>
            </View>
          </TouchableOpacity>

          <View style={styles.item}>
            <View style={styles.square}>
              <Icon name="trash-2" size={24} color="red" />
            </View>
            <View style={styles.content}>
              <Text style={[styles.location, { color: "red" }]}>
                Xóa tài khoản
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
  },
  square:{
    marginLeft: 10,
    marginRight: 20
  },
  header: {
    alignItems: "center",
    paddingVertical: 20,
    borderBottomColor: "#DDDDDD",
    borderBottomWidth: 1,
    paddingHorizontal: 16,
    flexDirection: "row",
  },
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
    marginBottom:50,
  },
  item: {
    flexDirection: "row",
    marginBottom: 16,
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 18,
    borderBottomColor: "#DDDDDD",
    borderBottomWidth: 1,
    paddingBottom: 20,
  },
  content: {
    width: "90%",
    fontSize: 18,
  },
});
