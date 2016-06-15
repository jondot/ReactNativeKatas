
import React, { Component } from 'react';
import ReactNative, {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import colors from '@/runner/colors'



// Clipping
//
// Some times a container view needs to enforce visuals on
// child views due to its own sizing constraints.
//
// Hint
// - There's only one critical property you need to use, it
// is a notorious one.
//

const Clipping= (props)=>{
  return (
    <View style={styles.container}>
      <View style={{height:80, width:80, borderRadius:40}}>
        <View style={{height:80, width:80, backgroundColor:'orange'}}>
        </View>
      </View>
    </View>
  )
}


// TODO: A focusing instruction, what's the immediate thing I need to do?
//
const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: colors[2],
  },
});





Clipping.displayName = 'Clipping'
export default Clipping

