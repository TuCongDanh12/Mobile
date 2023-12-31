import React from "react";
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
export default function History({ navigation }) {
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
          <Text style={styles.centerText}>Nhật kí check-in</Text>
        </View>
      </View>
      <ScrollView>
        <View style={styles.body}>
          <View style={styles.item}>
            <View style={styles.square}>
              <Image
                source={require("../../../assets/images/background.jpg")}
                style={styles.image}
              />
            </View>
            <View style={styles.content}>
              <Text style={styles.location}>Nhà ăn B1</Text>
              <Text style={styles.time}>1:35 PM, 23/11/2023</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: { marginTop: 30 },
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
  },
  item: {
    flexDirection: "row",
    backgroundColor: "#DDDDDD",
    // backgroundColor: "#F3F3F3",
    marginTop: 20,
    paddingVertical: 20,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 18,
  },
  square: {
    width: 40,
    height: 40,
    backgroundColor: "blue",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 50,
  },
  content: {
    width: "80%",
    fontSize: 18,
  },
  location: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
