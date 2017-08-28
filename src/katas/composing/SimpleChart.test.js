
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

const chart = [11, 50, 2, 42, 10, 8]

//TODO: remove the text element and replace it with a real bar
const Bar = (props)=>{
  const max = R.reduce(Math.max, 0, chart)
  const ratio = props.val/max
  return(
    <View>
      <View style={{flex:(1-ratio)}}/>
      <View style={[ styles.bar, {
        flex: ratio
      }]}/>
    </View>
  )
}


// Simple Chart
//
// This is a simple bar chart.
//
// Hint
// - Flex weights aren't integers
//
//
const SimpleChart = (props)=>{
  return (
    <View style={styles.container}>
      <View style={styles.chart}>
        {chart.map(val=><Bar key={val} val={val}/>)}
      </View>
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
  chart:{
     height:100,
     flexDirection:'row',
  },
  bar:{
    backgroundColor:'red',
    marginLeft:2,
    marginRight:2,
    width:15,
  }
})






SimpleChart.displayName = 'SimpleChart'
export default SimpleChart

