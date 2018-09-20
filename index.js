/** @format */

import {AppRegistry} from 'react-native';
//import App from './App';
import {name as appName} from './app.json';
import Katas from './src/katas'

AppRegistry.registerComponent(appName, () => Katas);
