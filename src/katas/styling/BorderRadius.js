import React, { Component } from 'react';
import ReactNative, {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import colors from '@/runner/colors'

const Disc = (props)=><View style={[{margin:10, backgroundColor:'white', borderRadius:30, width:60, height:60}, props.style]}/>

const BorderRadius = (props)=>{
  return (
    <View style={styles.container}>
      <Disc style={{borderRadius:10}}/>
      <Disc style={{borderRadius:20}}/>
      <Disc/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: colors[7],
  },
});





BorderRadius.displayName = 'BorderRadius'
import BorderRadiusTest from './BorderRadius.test'
export {BorderRadius, BorderRadiusTest}


