import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function ButtonLogin({ children, style, ...prop}) {
  return (
    <TouchableOpacity style={[styles.container, style]} {...prop}>
      
      <Text
        style={{
          color: "#FFF",
          fontSize: 20,
          fontWeight: "bold",
          paddingHorizontal: 15,
        }}
      >
        {children}
      </Text>
      
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F34584",
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center",
    height: 46,
  },
});
