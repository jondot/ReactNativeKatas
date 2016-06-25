import React, { Component } from 'react'
import ReactNative, {
  StyleSheet,
  Text,
  View,
  AsyncStorage,
} from 'react-native'

import Done from './done'
import Nav from './nav'

class Runner extends Component {
  constructor(props){
    super(props)
    this.state = {
      index: props.index,
    }
    this._advance = this._advance.bind(this)
  }
  componentDidMount(){
    console.log("mounting")
    if(this.state.index == null){
      AsyncStorage.getItem('index').then(index=>{
        this.setState({index: parseInt(index || '0')})
      })
    }
  }
  componentWillUnmount(){
    console.log("unmounitng")
  }
  _advance(){
    console.log(`OK: ${this.props.bundle[this.state.index].displayName}`)
    let bundle = this.props.bundle
    let index = this.state.index + 1

    if(index >= bundle.length){
      index = bundle.length //one above last item
    }

    console.log(`will present: ${index} / ${bundle.length}`)
    AsyncStorage.setItem('index', `${ index }`).then(()=>{
      console.log('remembering index', index)
    })
    this.setState({index})
  }


  render(){
    const bundle = this.props.bundle
    if(this.state.index >= bundle.length){
      return <Done/>
    }
    const CurrentComponent = bundle[this.state.index]
    if(!CurrentComponent){
      return <View><Text>No Component!</Text></View>
    }
    return (
      <View style={{flex:1}}>
        <Nav text={CurrentComponent.displayName} />
        <CurrentComponent onCompared={(similar)=>similar && this._advance()} />
      </View>
    )
  }
}
import kata from './kata'

export { Runner, kata }

