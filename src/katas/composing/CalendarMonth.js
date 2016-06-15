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

const month = R.groupBy((i)=>Math.ceil(i/7), R.range(1,36))

const Day = (props)=>{
  if(props.number > 31){
    return <View style={styles.blank} />
  }

  return <View style={[styles.day, props.number == 13 && styles.selected]}>
    <Text style={[styles.dayText, props.number == 13 && styles.selectedText]}>
      {props.number}
    </Text>
  </View>
}

const CalendarMonth = (props)=>{
  return (
    <View style={styles.container}>
    {
      Object.values(month).map((arr)=>{
        return(
          <View style={styles.week} key={arr.join("-")}>
            {arr.map(day=><Day key={day} number={day}/>)}
          </View>
        )
      })
    }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding:10,
    paddingTop:64,
    flex:1,
    backgroundColor: 'white',
  },
  week:{
    flexDirection:'row',
  },
  blank:{
    backgroundColor:'transparent',
    margin:1,
    flex:1,
  },
  day:{
     margin:1,
     flex:1,
     borderRadius:2,
     borderColor:'white',
  },
  selected:{
    borderColor:'gray',
    borderWidth:1,
  },
  selectedText:{
    color:'red',
  },
  dayText:{
    alignSelf:'center',
    padding:5,
  }
})




CalendarMonth.displayName = 'CalendarMonth'
import CalendarMonthTest from './CalendarMonth.test'
export {CalendarMonth, CalendarMonthTest}


