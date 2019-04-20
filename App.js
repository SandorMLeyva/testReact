/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, ImageBackground} from 'react-native';
import SongUpload from './src/app/components/song_upload'


export default class App extends Component {
  render() {
    return (
      <ImageBackground resizeMode="cover" blurRadius={8} source={require('./src/app/img/img1.jpg')} style={styles.container}>
        <View>
          <SongUpload name="Sandor"></SongUpload>
          <Text>Snaodhvr</Text>
        </View>
      </ImageBackground>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});
