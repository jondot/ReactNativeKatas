
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



// Gridding (Doing Grids)
//
// Some times you might want to shape content into a grid.
// This is very easy with flex.
//
//

const Gridding= (props)=>{
  return (
    <View style={styles.container}>
      <View style={{flexDirection:'row'}}>
        <Box style={{flex:1}}/>
        <Box style={{flex:1}}/>
      </View>
      <View style={{flexDirection:'row'}}>
        <Box style={{flex:1}}/>
        <Box style={{flex:1}}/>
        <Box style={{flex:1}}/>
        <Box style={{flex:1}}/>
      </View>
      <View style={{flex:1, justifyContent:'center'}}>
        <Icon style={styles.text} name="ios-grid-outline" size={120}/>
      </View>
      <View style={{flexDirection:'row'}}>
        <Box style={{flex:2}}/>
        <Box style={{flex:1}}/>
        <Box style={{flex:1}}/>
      </View>
      <View style={{flexDirection:'row'}}>
        <Box style={{flex:1}}/>
        <Box style={{flex:1}}/>
        <Box style={{flex:1}}/>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: colors[8],
    flex:1,
  },
  text:{
    color: 'white',
    textAlign:'center'
  }
});





Gridding.displayName = 'Gridding'
export default Gridding

