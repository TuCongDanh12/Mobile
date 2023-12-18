import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function Button({ children, style, onPress }) {
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={()=>onPress()}>
      
      <Text
        style={{
          color: "#FFF",
          fontSize: 24,
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
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    height: 55,
  },
});
