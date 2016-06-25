import React, { Component } from 'react';
import ReactNative, {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import Box from './box'
import Icon from 'react-native-vector-icons/Ionicons'
import colors from '@/runner/colors'



const AlignmentAxis = (props)=>{
  return (
    <View style={styles.container}>
      <Box />
      <View style={{flex:1, alignItems:'flex-end', justifyContent:'flex-end'}}>
        <Box />
        <Box />
      </View>
      <Box />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: colors[2],
  },
  text:{
    color: 'white',
    textAlign:'center'
  }
});





AlignmentAxis.displayName = 'AlignmentAxis'
import AlignmentAxisTest from './AlignmentAxis.test'
export {AlignmentAxis, AlignmentAxisTest}


