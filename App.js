import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import Constants from 'expo-constants';
import Input from './Input'

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  return(
    <View style={styles.view}>
    <Image source={require('./text-to-speech.jpg')} style={styles.img}/>
    <Input/>
    </View>
  );
}

const styles = StyleSheet.create({
  img:{
    alignSelf:'center',
    width:330,
    margin:0
  },
  view:{
    borderWidth:2
  }
});