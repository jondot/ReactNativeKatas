
import React, { Component } from 'react';
import ReactNative, {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import colors from '@/runner/colors'



// Border Radius
//
// Hints
// - Use the `borderRadius` property
//

const Disc = (props)=><View style={[{margin:10, backgroundColor:'white', width:60, height:60}, props.style]}/>

const BorderRadius = (props)=>{
  return (
    <View style={styles.container}>
      <Disc style={{}}/>
      <Disc style={{}}/>
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
export default BorderRadius

