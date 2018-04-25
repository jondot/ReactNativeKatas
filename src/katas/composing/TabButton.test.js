
import React, { Component } from 'react';
import ReactNative, {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import colors from '@/runner/colors'



/** Composing
*
* Build a tab button user interface
*
*/

const TabButton= (props)=>{
  return (
    <View style={styles.container}>
      <View style={styles.tabBar} >
        <View style={styles.tabButton} >
          <View style={styles.textHeader}>
            <Text style={[styles.text, {fontSize: 12}]}>Contacts</Text>
          </View>
          <View style={styles.iconContainer} >
            <Icon style={styles.text} name='md-contacts' size={30} />
          </View>
        </View>
        <View style={styles.tabButton} >
          <Text style={[styles.text, {fontSize: 12}]}>The Man</Text>
          <Icon style={styles.text} name='md-finger-print' size={30} />
        </View>
        <View style={styles.tabButton} >
          <Text style={[styles.text, {fontSize: 12}]}>Chem Burn</Text>
          <Icon style={styles.text} name='md-flask' size={30} />
        </View>
        <View style={styles.tabButton} >
          <Text style={[styles.text, {fontSize: 12}]}>{"Don't Touch"}</Text>
          <Icon style={styles.text} name='md-nuclear' size={30} />
        </View>
        <View style={[styles.tabButton, {borderRightWidth: 0}]} >
          <Text style={[styles.text, {fontSize: 12}]}>Apperture Science</Text>
          <Icon style={styles.text} name='md-aperture' size={30} />
        </View>
      </View>
    </View>
  )
}


// TODO: There are no borders on the right of the right most tab button
//
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors[1],
    flex: 1,
    justifyContent: 'flex-end',
  },

  tabBar: {
    backgroundColor: 'grey',
    flexDirection: 'row',
    alignItems: 'flex-end',
  },

  tabButton: {
    borderRightWidth: 1,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'column',
  },

  textHeader: {
    justifyContent: 'flex-start',
  },

  iconContainer: {
    justifyContent: 'flex-end',
  },

  text:{
    color: 'white',
    textAlign:'center',
    fontWeight: '100',
  },

});





TabButton.displayName = 'TabButton'
export default TabButton
