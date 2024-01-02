import {
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Text,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function ScanQR({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ backgroundColor: "#FFE5ED", width: 120, marginTop: 15 }}>
        <Ionicons.Button
          name="arrow-back-outline"
          size={20}
          backgroundColor={"#FFE5ED"}
          color={"#F34584"}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Text style={{ fontSize: 15, color: "#F34584" }}>QUAY LẠI</Text>
        </Ionicons.Button>
      </View>

      <View
        style={{ alignItems: "center", backgroundColor: "#FFE5ED", flex: 1 }}
      >
        <Text style={{ marginTop: 50, fontSize: 30, fontWeight: "bold" }}>
          Quét mã QR
        </Text>
        <Text style={{ marginTop: 10, fontSize: 20 }}>
          {" "}
          Quét mã QR để check in
        </Text>
      </View>

      <View
        style={{ alignItems: "center", backgroundColor: "#FFE5ED", flex: 2 }}
      >
        <Image
          source={require("../../../assets/icons/qr.png")}
          style={{ marginTop: 60, width: 200, height: 200 }}
        />
      </View>

      <View
        style={{
          alignItems: "center",
          flex: 1,
          justifyContent: "center",
          backgroundColor: "#FFE5ED",
        }}
      >
        <TouchableOpacity
          style={styles.button}
          onPress={() => console.log("Scan")}
        >
          <Text
            style={{
              alignItems: "center",
              justifyContent: "center",
              color: "black",
              fontSize: 15,
              backgroundColor: "pink",
              fontWeight: "bold",
            }}
          >
            QUÉT MÃ
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFE5ED",
  },
  button: {
    width: 90,
    height: 40,
    fontSize: 30,
    backgroundColor: "pink",
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center",
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
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
