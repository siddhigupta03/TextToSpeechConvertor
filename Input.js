import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import * as Speech from 'expo-speech';

export default class Input extends React.Component {
  constructor() {
    super();
    this.state={
      text: ''
    }
  }
  speaks=() =>{
    var say = this.state.text;
    Speech.speak(say);
  }
  render() {
    return (
      <View>
        <TextInput style={styles.input} onChangeText={text=>{this.setState({text:text})}}
        value={this.state.text}/>
        <TouchableOpacity style={styles.b} onPress={this.speaks}>
          <Text style={styles.t}>Hear from here</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 4,
    textAlign: 'center',
    margin: 40,
  },
  b:{
    borderWidth:3,
    marginBottom:20,
    marginRight:10,
    marginLeft:10,
    alignSelf:"center",
    padding:5
  },
  t:{
    textAlign:'center',
    backgroundColor:'#f0f',
    padding:5,
    borderWidth:2,
    borderRadius:20,
  }
});
