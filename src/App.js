import React, { Component } from 'react';
import {Provider} from 'react-redux';
import configureStore from './app/store';
import SongUpload from './app/components/song_upload';
import {View} from 'react-native';


let store = configureStore();
// store.subscribe(()=>{

// })

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View>
          <SongUpload name="sandor"></SongUpload>
        </View>
      </Provider>
      
    )
  }
}


