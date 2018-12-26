import React, {Component} from 'react';
import { Image, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Header from '../Header/Header'

export default class DtacScreen extends Component {

  componentDidMount() {
    // BackHandler.exitApp()
  }

  static navigationOptions = ({ navigation }) => {
    return {
      tabBarLabel: 'AIS',
      tabBarIcon: (
        <Image
          source={require('../../assets/dtac-logo.png')}
          style={{width: 50, height: 25}}
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
