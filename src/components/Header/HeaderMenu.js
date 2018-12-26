import React, { Component } from 'react';
import {
  TouchableOpacity,
  View,
  Image,
  Text,
  StatusBar,
  Dimensions
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class Header extends Component {
  render() {
    let {height, width} = Dimensions.get('window');
    let heightDis = height / 2
    return (
      <View style={{ height: heightDis, paddingLeft: 8, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', backgroundColor: 'rgb(51, 153, 236)'}}>
        <StatusBar backgroundColor='rgb(51, 153, 236)' barStyle="light-content"/>
      </View>
    );
  }
}