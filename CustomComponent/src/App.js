import React from 'react';
import {Text,SafeAreaView,StyleSheet,View,TouchableOpacity} from 'react-native';
import Card from './components/Card'
function App(){
  return(
    <SafeAreaView style = {styles.container}>
      
      <Card title = "Eddard Stark" text = "Winter Is Coming.."/> 
      <Card title = "Eddard Stark" text = "Winter Is Coming.."/> 
    </SafeAreaView>
  );
}
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e0e0'
  },
  
})