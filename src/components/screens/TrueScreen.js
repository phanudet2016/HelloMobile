import React, {Component} from 'react';
import { Image, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Header from '../Header/Header'

export default class TrueScreen extends Component {

  static navigationOptions = ({ navigation }) => {
    return {
      tabBarLabel: 'AIS',
      tabBarIcon: (
        <Image
          source={require('../../assets/true-logo.png')}
          style={{width: 50, height: 20}}
        />
      )
    }
  };

  render() {
    return (
      <View>
        <Header/>
      </View>
    );
  }
}
