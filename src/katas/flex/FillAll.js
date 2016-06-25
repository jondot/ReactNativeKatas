
import React, { Component } from 'react';
import ReactNative, {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import colors from '@/runner/colors'



const FillAll = (props)=>{
  return (
    <View style={styles.container}>
      <Icon style={styles.text} name='ios-bulb-outline' size={120} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: colors[0],
  },
  text:{
    color: 'white',
    textAlign:'center'
  }
});





FillAll.displayName = 'FillAll'
import FillAllTest from './FillAll.test'
export {FillAll, FillAllTest}


