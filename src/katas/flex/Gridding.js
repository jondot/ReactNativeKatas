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



const Gridding = (props)=>{
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
        <Box style={{flex:1/2}}/>
        <Box style={{flex:1/4}}/>
        <Box style={{flex:1/4}}/>
      </View>
      <View style={{flexDirection:'row'}}>
        <Box style={{flex:1/3}}/>
        <Box style={{flex:1/3}}/>
        <Box style={{flex:1/3}}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: colors[8],
  },
  text:{
    color: 'white',
    textAlign:'center'
  }
});





Gridding.displayName = 'Gridding'
import GriddingTest from './Gridding.test'
export {Gridding, GriddingTest}


