import React, { Component } from 'react';
import ReactNative, {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import colors from '@/runner/colors'

const TabButton = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.tabBar} >
        <View style={styles.tabButton} >
        <View style={styles.textHeader}>
            <Text style={[styles.text, {fontSize: 12}]}>Hidden Contacts</Text>
          </View>
          <View style={styles.iconContainer} >
            <Icon style={styles.text} name='md-contacts' size={30} />
          </View>
        </View>
        <View style={styles.tabButton} >
          <View style={styles.textHeader}>
            <Text style={[styles.text, {fontSize: 12}]}>{"Ditch\nThe Man"}</Text>
          </View>
          <View style={styles.iconContainer} >
            <Icon style={styles.text} name='md-finger-print' size={30} />
          </View>
        </View>
        <View style={styles.tabButton} >
          <View style={styles.textHeader}>
            <Text style={[styles.text, {fontSize: 12}]}>Chemical Burns</Text>
          </View>
          <View style={styles.iconContainer} >
            <Icon style={styles.text} name='md-flask' size={30} />
          </View>
        </View>
        <View style={styles.tabButton} >
          <View style={styles.textHeader}>
            <Text style={[styles.text, {fontSize: 12}]}>{"Feuer\nFrei"}</Text>
          </View>
          <View style={styles.iconContainer} >
            <Icon style={styles.text} name='md-nuclear' size={30} />
          </View>
        </View>
        <View style={[styles.tabButton, {borderRightWidth: 0}]} >
          <View style={styles.textHeader}>
            <Text style={[styles.text, {fontSize: 12}]}>{"Black\nMesa"}</Text>
          </View>
          <View style={styles.iconContainer} >
            <Icon style={styles.text} name='md-aperture' size={30} />
          </View>
        </View>
      </View>
    </View>
  )
}

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
    marginTop: 5,
  },

  iconContainer: {
    justifyContent: 'flex-end',
    margin: 10,
  },

  text:{
    color: 'white',
    textAlign:'center',
    fontWeight: '100',
  },

});

TabButton.displayName = 'TabButton'
import TabButtonTest from './TabButton.test'
export {TabButton, TabButtonTest}
