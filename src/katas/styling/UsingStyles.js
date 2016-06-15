import React, { Component } from 'react';
import ReactNative, {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import colors from '@/runner/colors'



const UsingStyles = (props)=>{
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Using Styles</Text>
      <Text style={{color:'pink'}}>Inline styles</Text>
      <Text style={styles.inline}>Optimized StyleSheet styles</Text>
      <Text style={[styles.inline, {color:'lime'}]}>Array styles</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: colors[0],
  },
  inline:{
     fontSize:24,
     color:'yellow',
  },
  text:{
    color: 'white',
    textAlign:'center'
  }
});





UsingStyles.displayName = 'UsingStyles'
import UsingStylesTest from './UsingStyles.test'
export {UsingStyles, UsingStylesTest}


