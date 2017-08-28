
import React, { Component } from 'react';
import ReactNative, {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import colors from '@/runner/colors'



// Contact Card
//
// For this composition you'll have to use everything you have
// learned so far.
//
// Hints:
// - Use flex-start, flex-end, stretch as alignment values as needed
// - Some times constraining with margin and padding of parents vs children
// is much better than specifying heights and widths
// - There's no such thing as purely black shadow in nature. This is
// the shadow color you should use: #175E4C, with opacity 0.7, offsets 2(w), 6(h) '#229E85
//

const ContactCard= (props)=>{
  return (
    <View style={[styles.container, {alignItems:'stretch'}]}>
      <View style={ styles.card }>
        <View style={{ flexDirection:'row' }}>
          <View style={{ width:80, height:80, backgroundColor:'#229E85', borderRadius:40 }}>
          </View>
          <View style={{ marginLeft:20, paddingTop:10 }}>
            <Text style={styles.text}>Chuck Norris</Text>
            <Text style={styles.text}>CEO</Text>
          </View>
        </View>
        <View style={{ marginTop:20 }}>
          <Text style={{color:'white'}}><Icon name="ios-call-outline" size={16}/> 481-5162342</Text>
          <Text style={{color:'white'}}><Icon name="ios-send-outline" size={16}/> chuck@norrisfamily.arpa</Text>
        </View>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:'center',
    alignItems:'stretch',
    backgroundColor: colors[2],
  },
  text:{
    color: 'white',
    textAlign:'left'
  },
  card: {
    backgroundColor:'#2ABB9B',
    padding:20,
    margin:10,
    shadowRadius:10,
    shadowColor:'#175E4C',
    shadowOffset:{width:2, height:6},
    shadowOpacity:0.7
  }
});





ContactCard.displayName = 'ContactCard'
export default ContactCard

