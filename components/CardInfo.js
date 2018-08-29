import React from 'react';
import { StyleSheet, View, Text, ImageBackground, Image } from 'react-native';
import Util from '../app/util';

const digits = {
  '0': require('../assets/0.png'),
  '1': require('../assets/1.png'),
  '2': require('../assets/2.png'),
  '3': require('../assets/3.png'),
  '4': require('../assets/4.png'),
  '5': require('../assets/5.png'),
  '6': require('../assets/6.png'),
  '7': require('../assets/7.png'),
  '8': require('../assets/8.png'),
  '9': require('../assets/9.png'),
  ' ': require('../assets/s.png'),
  '/': require('../assets/slash.png')
}

const cardBackground = '../assets/Payment-card-background.png'

export default class CardInfo extends React.Component {
  render() {
    let panNumber = String(this.props.data.panNumber)
    panNumber = Util.numberWithSpaces(panNumber)
    
    return (
        <ImageBackground
          source={require(cardBackground)}
          style={styles.cardBackground}
          imageStyle={{
            resizeMode: Image.resizeMode.contain
          }}
        >
          <View style={styles.panNumber}>
          {
            panNumber.split('').map((num, index) => {
              return (
                <Image key={num + '' + index} style={styles.digit} source={digits[num]} />
              )
            })
          }
          </View>
          <View style={styles.container}>
            <View style={styles.goodThruContainer}>
              <Text style={styles.goodThru}>
                GOOD
              </Text>
              <Text style={styles.goodThru}>
                THRU
              </Text>
            </View>
            <View style={styles.expDateContainer}>
            {
              this.props.data.expDate.split('').map((num, index) => {
                return (
                  <Image key={num + '' + index} style={styles.expDigit} source={digits[num]} />
                )
              })
            }
            </View>
            <View style={styles.cvvContainer}>
              <Text style={styles.cvv}>
                CVV {this.props.data.cvv}
              </Text>
            </View>
          </View>
        </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  cardBackground: {
    width: 350,
    flex: 1,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center'
  },
  panNumber: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center'
  },
  digit: {
    top: 20,
    width: 10,
    height: 20,
    marginLeft: 5
  },
  container: {
    top: 20,
    flex: 1,
    alignItems: 'flex-start',
    flexDirection: 'row',
  },
  goodThruContainer: {
    marginTop: 35,
    flex: 2,
    alignItems: 'flex-end'
  },
  expDateContainer: {
    flex: 1,
    marginLeft: 10,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  cvvContainer: {
    flex: 2,
    marginRight: 20,
    alignItems: 'flex-start',
  },
  expDigit: {
    marginTop: 40,
    right: 10,
    width: 10,
    height: 15,
    marginLeft: 1
  },
  goodThru: {
    flexDirection: 'row',
    height: 10,
    color: 'white',
    fontSize: 10
  },
  cvv: {
    marginTop: 45,
    flexDirection: 'row',
    height: 10,
    color: 'white',
    fontSize: 10
  }
});