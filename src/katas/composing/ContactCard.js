import React, { Component } from 'react';
import ReactNative, {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import colors from '@/runner/colors'



const ContactCard = (props)=>{
  return (
    <View style={[styles.container, {alignItems:'stretch'}]}>
      <View style={{margin:10, shadowRadius:10,shadowColor:'#175E4C', shadowOffset:{width:2, height:6},shadowOpacity:0.7, backgroundColor:'#2ABB9B', padding:20}}>
        <View style={{flexDirection:'row'}}>
          <View style={{width:80, height:80, borderRadius:40, backgroundColor:'#229E85'}}>
          </View>
          <View style={{marginLeft:20, paddingTop:10, alignItems:'flex-start'}}>
            <Text style={styles.text}>Chuck Norris</Text>
            <Text style={styles.text}>CEO</Text>
          </View>
        </View>
        <View style={{marginTop:20}}>
          <Text style={{color:'white'}}><Icon name="ios-call-outline" size={16}/> 481-5162342</Text>
          <Text style={{color:'white'}}><Icon name="ios-send-outline" size={16}/> chuck@norrisfamily.arpa</Text>
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
  text:{
    color: 'white',
    textAlign:'center'
  }
});





ContactCard.displayName = 'ContactCard'
import ContactCardTest from './ContactCard.test'
export {ContactCard, ContactCardTest}


