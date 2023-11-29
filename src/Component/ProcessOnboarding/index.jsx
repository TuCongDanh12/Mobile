import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function ProcessOnboarding({ selectedIndex }) {
  return (
    <View style={[styles.container]}>
        <View style={[styles.button,selectedIndex === 1 && styles.selectedButton]}></View>
        <View style={[styles.button,selectedIndex === 2 && styles.selectedButton]}></View>
        <View style={[styles.button,selectedIndex === 3 && styles.selectedButton]}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 100,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    
  },
  button:{
    width:16,
    height:16,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#818181',
    borderStyle: 'solid',

  },
  selectedButton: {
    width:20,
    height:20,
    borderRadius: 20,
    backgroundColor: '#F34584',
  },
});
