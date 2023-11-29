import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function Button({children}) {
  return (
    <View style={styles.container}>
      <Text style={{color:'#FFF',fontSize:24,fontWeight:'bold',paddingHorizontal:15}}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    
    backgroundColor: '#F34584',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    height:55,
  },
});
