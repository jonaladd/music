/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  ListView,
  Platform,
  
} from 'react-native';

import {Scene, Router} from'react-native-router-flux';
import HomeView from './HomeView'
import ArtistDetailView from './ArtistDetailView'
class music extends React.Component {
  render(){
    const isAndroid = Platform.OS ==='android'
    return <Router>
      <Scene key= "root">
        
        <Scene key= "home" component={HomeView} hideNavBar/>
        <Scene key= "artistDetail" component={ArtistDetailView } hideNavBar />
     
        
      </Scene>

        </Router>

  }
}



AppRegistry.registerComponent('music', () => music);
