
import React, { Component } from 'react';
import ReactNative, {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import colors from '@/runner/colors'



// A Loading Card
//
// Make use of everything you've learned so far.
//
// Hint: a flexDirection picked wisely can go a long way
// Hint: flex:1 is not just for containers
//


const LoadingCard= (props)=>{
  return (
    <View style={styles.container}>
      <View style={{width:200, height: 80, backgroundColor:'#CDDC39',padding:10, paddingTop:5}}>
        <Icon style={styles.text} name='ios-time-outline' size={22} />
        <Text style={[styles.text,{}]}>Loading...</Text>
        <Icon style={styles.text} name='ios-close-outline' size={22} />
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: colors[6],
    alignItems:'center',
    justifyContent:'center',
  },
  text:{
    color: 'white',
    textAlign:'center'
  }
});





LoadingCard.displayName = 'LoadingCard'
export default LoadingCard

