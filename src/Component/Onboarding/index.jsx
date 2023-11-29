import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image} from 'react-native';
import Button from '../Button';
import ProcessOnboarding from '../ProcessOnboarding';
export default function Onboarding({heading,title,children,source}) {
  return (
    <View
        style={
            [styles.container,
                
            ]
        }
    >  
    
        <Image style={{width:'100%', }} source={source} resizeMode="contain" />
        <Text style={[styles.text,{fontSize:28, fontWeight:800,marginTop:20}]}>{heading}</Text>
        <Text style={[styles.text,{fontSize:13, fontWeight:400,marginTop:20, marginHorizontal: 10}]}>{title}</Text>
        <ProcessOnboarding style={[styles.processOnboarding]}selectedIndex={1}/>
        <Button style={[styles.button]}> {children}</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',

  },
  text:{
    textAlign:'center',
  },
  processOnboarding:{
    marginTop:30,
    
  },
  button:{
    marginTop:30
  }
});
