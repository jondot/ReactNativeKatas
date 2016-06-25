
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


// Flex Alignment
//
// Align these boxes as needed.
// Hint: Don't be afraid to group boxes under container views
// Hint: learn about flex alignment here:
//       - https://facebook.github.io/react-native/docs/flexbox.html
//       - Try using only the link above and experimenting before Googling
//         'flexbox alignment'
//

const Alignment= (props)=>{
  return (
    <View style={styles.container}>
      <Box/>
      <Box/>
      <Box/>
      <Box/>
      <Box/>
      <Box/>
      <Box/>
    </View>
  )
}


// TODO: A focusing instruction, what's the immediate thing I need to do?
//
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors[1],
    flex:1,
  },
  text:{
    color: 'white',
    textAlign:'center'
  }
});





Alignment.displayName = 'Alignment'
export default Alignment

