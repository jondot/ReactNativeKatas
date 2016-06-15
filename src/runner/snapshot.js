import React, { Component } from 'react';
import ReactNative, {
  UIManager,
} from 'react-native'

import RNFS from 'react-native-fs'

const tmpdir = RNFS.DocumentDirectoryPath
const path = process.path

export default (Subject)=>{
  return class extends Component{
    componentDidMount(){
      const reference = this.props.reference
      requestAnimationFrame(()=>{
        if(!reference){
          const refpath = `${tmpdir}/${Subject.displayName}.ref.png`
          console.log(`snapshotting ${refpath}`)
          UIManager.takeSnapshot('window', {format: 'png'})
          .then(path=>RNFS.unlink(refpath)
                          .catch(()=>{})
                          .then(RNFS.moveFile(path, refpath))
                          .then((success)=>{
                            console.log("Snapshotted:", refpath)
                            this.props.onSnapshot(refpath)
                          }))
          .catch((err)=>{
            console.log("Error reference snapshot", err)
          })
        }else{
          const targetpath = `${tmpdir}/${Subject.displayName}.png`
          console.log(`snapshotting ${targetpath}`)
          UIManager.takeSnapshot('window', {format: 'png'})
          .then(path=>RNFS.unlink(targetpath)
                          .catch(()=>{})
                          .then(RNFS.moveFile(path, targetpath))
                          .then((success)=>{
                            Promise.all([
                              RNFS.readFile(reference, 'base64'),
                              RNFS.readFile(targetpath, 'base64'),
                            ]).then(([refdata, imgdata])=>{
                              this.props.onCompared(imgdata==refdata)
                            }).catch((err)=>{
                              console.log('error', err)
                            })
                          }))
          .catch((err)=>{
             console.log("Error in compare snapshot", err)
          })
        }
      })
    }
    render(){
      return <Subject />
    }
  }
}

