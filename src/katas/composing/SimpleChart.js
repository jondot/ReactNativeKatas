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
     flexDirection:'row',
     height:100,
  },
  bar:{
    backgroundColor:'red',
    marginLeft:2,
    marginRight:2,
    width:15,
  }

});





SimpleChart.displayName = 'SimpleChart'
import SimpleChartTest from './SimpleChart.test'
export {SimpleChart, SimpleChartTest}


