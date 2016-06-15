import React, { Component } from 'react';
import ReactNative, {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import colors from '@/runner/colors'



const UsingText = (props)=>{
  return (
    <View style={styles.container}>
      <Text style={[styles.text, {fontFamily:'AmericanTypewriter', fontSize:100}]}>
        Using
      </Text>
      <Text style={{color:'white', letterSpacing:-20, fontSize:100, fontStyle:'italic', fontFamily:'Baskerville'}}>
          T
          <Text style={{fontSize:60, letterSpacing:0}}>ext</Text>
        </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: colors[1],
  },
});





UsingText.displayName = 'UsingText'
import UsingTextTest from './UsingText.test'
export {UsingText, UsingTextTest}


