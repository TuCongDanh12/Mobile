import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image} from 'react-native';
import Button from '../Button';
import ProcessOnboarding from '../ProcessOnboarding';
export default function Onboarding({heading,title,children,source, onPress, selectedIndex,style}) {
  return (
    <View
        
        style={
            [styles.container,           
            ]
        }
    >  
    
        <Image style={{width:'100%', height: 350, marginTop:0 }} source={source} resizeMode="contain" />
        <Text style={[styles.text,{fontSize:28, fontWeight:800,marginTop:10}]}>{heading}</Text>
        <Text style={[styles.text,{fontSize:13, fontWeight:400,marginTop:10,marginBottom:20, marginHorizontal: 10}]}>{title}</Text>
        <ProcessOnboarding style={[styles.processOnboarding,{marginTop:10}]}selectedIndex={selectedIndex}/>
        <Button style={[styles.button,{marginTop:30}]} onPress={onPress}> {children}</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex:1,
    alignItems: 'center',
    // justifyContent: 'center',

  },
  text:{
    textAlign:'center',
  },

});
