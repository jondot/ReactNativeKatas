import React, { Component } from 'react';
import ReactNative, {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import colors from '@/runner/colors'



const TabButton = (props)=>{
  return (
    <View style={styles.container}>
      <Icon style={styles.text} name='ios-bulb-outline' size={120} />
      <Text style={styles.text}>Tab Button</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: colors[1],
  },

  text:{
    color: 'white',
    textAlign:'center'
  },

});





TabButton.displayName = 'TabButton'
import TabButtonTest from './TabButton.test'
export {TabButton, TabButtonTest}
