import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeContainer from './src/containers/HomeContainer'
import configStore from './src/stores/configStore'
import { Provider } from 'react-redux'

const store = configStore()

export default class App extends React.Component {
  render() {
    return (
      <Provider
        style={styles.container}
        store={store} >
        <HomeContainer />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
