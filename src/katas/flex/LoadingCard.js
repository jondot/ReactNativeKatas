import React, { Component } from 'react';
import ReactNative, {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import colors from '@/runner/colors'



const LoadingCard = (props)=>{
  return (
    <View style={styles.container}>
      <View style={{flexDirection:'row', width:200, height: 80, backgroundColor:'#CDDC39',padding:10, paddingTop:5}}>
        <Icon style={styles.text} name='ios-time-outline' size={22} />
        <Text style={[styles.text,{flex:1, alignSelf:'center'}]}>Loading...</Text>
        <Icon style={styles.text} name='ios-close-outline' size={22} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: colors[6],
  },
  text:{
    color: 'white',
    textAlign:'center'
  }
});





LoadingCard.displayName = 'LoadingCard'
import LoadingCardTest from './LoadingCard.test'
export {LoadingCard, LoadingCardTest}


