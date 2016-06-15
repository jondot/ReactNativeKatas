
import React, { Component } from 'react';
import ReactNative, {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import colors from '@/runner/colors'



// Using styles
//
// Colors can be changed with the 'color' property
// Font size can be changed with the fontSize property
//

const UsingStyles= (props)=>{
  return (
    <View style={styles.container}>
      <Text style={{}}>Using Styles</Text>
      <Text style={{}}>Inline styles</Text>
      <Text style={styles.inline}>Optimized StyleSheet styles</Text>
      <Text style={[styles.inline]}>Array styles</Text>
    </View>
  )
}


// TODO: Add your StyleSheet styles below
//
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors[0],
    justifyContent:'center',
    alignItems:'center',
    flex:1,
  },
  inline:{
  }
});





UsingStyles.displayName = 'UsingStyles'
export default UsingStyles

