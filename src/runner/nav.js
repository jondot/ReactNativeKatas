import React from 'react'
import NavigationBar from 'react-native-navbar'

export default function Nav(props) {
  return (
    <NavigationBar title={{tintColor:'#cccccc', title:props.text}} />
  )
}
