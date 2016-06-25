import React, { Component } from 'react';
import ReactNative, {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import colors from '@/runner/colors'
import R from 'ramda'


const settings =  {
  "Name":"Chuck Norris",
  "Address":"56th Lowkick Ave., Texas",
  "Phone":"481-5162342",
  "Email":"chuck@norrisfamily.arpa",
}


const ProfileScreen = (props)=>{
  return (
    <View style={styles.container}>
      <View style={{alignSelf:'center', backgroundColor:'gray', width:120, height:120, borderRadius:90, marginBottom:20}}>
      </View>
      <Text style={{alignSelf:'center', marginBottom:30, fontSize:26, fontWeight:'100'}}>
        Chuck Norris
      </Text>
      {
        Object.keys(settings).map((key)=>{
          return <View key={key} style={styles.setting}>
            <Text style={styles.settingProp}>
              {key}
            </Text>
            <Text style={styles.settingVal}>
              {settings[key]}
            </Text>
          </View>
        })
      }

    </View>
  )
}

const styles = StyleSheet.create({
  setting:{
    padding:20,
    flexDirection:'row',
    borderBottomWidth:1,
    borderColor:'#d8d8d8',
  },
  settingProp:{
    color:'#888',
    marginRight:10,
    width:70,
  },
  container: {
    flex:1,
    marginTop: 30,
    backgroundColor: 'white',
  },
});





ProfileScreen.displayName = 'ProfileScreen'
import ProfileScreenTest from './ProfileScreen.test'
export {ProfileScreen, ProfileScreenTest}


