import React, { Component } from 'react'
import ReactNative, {
  StyleSheet,
  Text,
  View,
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
export default ()=><View style={styles.container}>
                     <Icon name="ios-checkmark-circle-outline" size={120} style={{color:'white'}}/>
                     <Text style={{fontSize:40, color:'white'}}>All Done!</Text>
                   </View>

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2ecc71',
  },
})
