
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
* Build a tabBar type user interface
* Cascading styles will be important
* Also think in terms on containers,
*  this includes containers inside of containers that could be inside
*  of other containers ... and so on and so forth
*
* Lastly, because this is a Kata, these will not be actual buttons, just
*  views to test your layout chops.
*/

const TabButton = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.tabBar}>
        <Text style={styles.text}>Hidden Contacts</Text>
        <Icon style={styles.text} name='md-contacts' size={30} />
        <Text style={styles.text}>{"Ditch\nThe Man"}</Text>
        <Icon style={styles.text} name='md-finger-print' size={30} />
        <Text style={styles.text}>Chemical Burns</Text>
        <Icon style={styles.text} name='md-flask' size={30} />
        <Text style={styles.text}>{"Feuer\nFrei"}</Text>
        <Icon style={styles.text} name='md-nuclear' size={30} />
        <Text style={styles.text}>{"Black\nMesa"}</Text>
        <Icon style={styles.text} name='md-aperture' size={30} />
      </View>
    </View>
  )
}

// TODO: There are no borders on the right of the right most tab button

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors[1],
    flex: 1,
  },

  tabBar: {
    backgroundColor: 'grey',
  },

  text:{
    color: 'white',
    textAlign:'center',
  },

});

TabButton.displayName = 'TabButton'
export default TabButton
