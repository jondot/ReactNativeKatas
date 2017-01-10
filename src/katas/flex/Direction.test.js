
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



// Direction
//
// In flex, you can specify how boxes can flow. Either vertical or horizontal
// flows are acceptable. In other words, you can use the following property in
// your styles:
// * flexDirection: [column|row]
//

const Direction= (props)=>{
  return (
    <View style={styles.container}>
      <Box/>
      <Box/>
      <Box/>
      <View style={{}}>
        <Box/>
        <Box/>
        <Box/>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: colors[3],
  },
  text:{
    color: 'white',
    textAlign:'center'
  }
});





Direction.displayName = 'Direction'
export default Direction

