
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



// Alignment Axis
//
// Properties: justifyContent, alignItems
//
// Remember: `justifyContent` works against the current rowDirection,
// and alignItems will always be along the crossing direction.
//

const AlignmentAxis= (props)=>{
  return (
    <View style={styles.container}>
      <Box />
      <Box />
      <Box />
      <Box />
    </View>
  )
}


// TODO: A focusing instruction, what's the immediate thing I need to do?
//
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
export default AlignmentAxis

