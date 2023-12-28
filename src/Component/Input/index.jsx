import { StyleSheet, View, TextInput, Text} from "react-native";
const Errors = ({ error }) => <Text style={styles.errors}>{error}</Text>;
export default function Input({
  type = "text",
  error,
  style,
  placeholder,
  ...prop
}) {
  return (
    <View style={{width:'100%',flexDirection:'row', justifyContent:'center', position:'relative'}}>
      <TextInput
        style={[styles.input, style]}
        type={type}
        placeholder={placeholder}
        {...prop}
      />
       {error && <Errors error={error} />}
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderRadius: 20,
    borderWidth: 1, // Kích thước đường viền
    borderColor: "#C4C4C4", // Màu sắc của đường viền
    borderStyle: "solid", // Kiểu của đường viền ('solid', 'dotted', 'dashed', etc.)
    padding: 10, // Để hiển thị đường viền rõ ràng, có thể thêm một khoảng padding
  },
  errors : {
    color:'red',
    position:'absolute',
    top: 48,
    left: 20,
  }
});
