import React, { Component } from 'react';
import ReactNative, {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import colors from '@/runner/colors'
import Box from './box'


const Alignment = (props)=>{
  return (
    <View style={styles.container}>
      <Box/>
      <View style={{alignItems:'center'}}>
        <Box/>
        <View style={{flexDirection:'row'}}>
          <Box/>
          <Box/>
          <Box/>
        </View>
        <Box/>
      </View>
      <Box/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: colors[1],
  },
  text:{
    color: 'white',
    textAlign:'center'
  }
});





Alignment.displayName = 'Alignment'
import AlignmentTest from './Alignment.test'
export {Alignment, AlignmentTest}


