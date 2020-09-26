import 'react-native-gesture-handler';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import {StatusBar} from 'react-native'

import Routes from './src/routes'
import AppBar from './src/components/AppBar';


export default function App () {
  return (
    <>
    <StatusBar  
      backgroundColor='#fff'
      barStyle='dark-content'
    />
    <NavigationContainer>
      <AppBar></AppBar>
      <Routes/>
    </NavigationContainer>
    </>
  )
}
