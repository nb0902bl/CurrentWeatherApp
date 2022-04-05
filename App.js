import React, { Component } from 'react'
import { StyleSheet ,View} from 'react-native';
import GetCurrentLocation from './src/components/GetCurrentLocation/GetCurrentLocation';
import Loading from './src/components/Loading/Loading';

export default class App extends Component {
  

  render() {

    return (
      <View style={styles.container}>
      
         <GetCurrentLocation/>
        
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

