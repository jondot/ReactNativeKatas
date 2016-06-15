import React, { Component } from 'react';
import ReactNative, {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import colors from '@/runner/colors'



const Clipping = (props)=>{
  return (
    <View style={styles.container}>
      <View style={{height:80, width:80, borderRadius:40, overflow:'hidden'}}>
        <View style={{height:80, width:80, backgroundColor:'orange'}}>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: colors[2],
  },
});





Clipping.displayName = 'Clipping'
import ClippingTest from './Clipping.test'
export {Clipping, ClippingTest}


