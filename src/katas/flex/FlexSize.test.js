
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



// Flex Sizing
//
// To control the amount of flex of views, you can
// adjust view flex weights which makes them expand
// or contract against each other.
//
// Hint: views make up the weight of their common container
// Google: flex visual weight
//

const FlexSize= (props)=>{
  return (
    <View style={styles.container}>
      <View style={{flex:1}}>
        <Box style={{flex:0.7}}/>
        <Box style={{backgroundColor:'yellow'}}/>
        <Box/>
        <Box style={{backgroundColor:'yellow', flex:0.3}}/>
      </View>
      <View style={{flex:1}}>
        <Box style={{flex:1}}/>
        <Box style={{backgroundColor:'yellow'}}/>
        <Box/>
        <Box style={{backgroundColor:'yellow',flex:1}}/>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection:'row',
    backgroundColor: colors[1],
  },
});





FlexSize.displayName = 'FlexSize'
export default FlexSize

