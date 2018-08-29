import React from 'react';
import { StyleSheet, View, ImageBackground, Image } from 'react-native';
import CardInfo from './components/CardInfo';

const cardInfo = require('./card-info.json')

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <CardInfo data={cardInfo}></CardInfo>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
