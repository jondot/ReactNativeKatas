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


// Did you know?
// - the default direction, unless specified is 'column'

const Direction = (props)=>{
  return (
    <View style={styles.container}>
      <Box/>
      <Box/>
      <Box/>
      <View style={{flexDirection:'row'}}>
        <Box/>
        <Box/>
        <Box/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: colors[3],
  },
  text:{
    color: 'white',
    textAlign:'center'
  }
});





Direction.displayName = 'Direction'
import DirectionTest from './Direction.test'
export {Direction, DirectionTest}


