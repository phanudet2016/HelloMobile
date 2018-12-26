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
    return (
      <View style={{ height: 60, paddingLeft: 8, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', backgroundColor: 'rgb(51, 153, 236)'}}>
        <StatusBar backgroundColor='rgb(51, 153, 236)' barStyle="light-content"/>
      </View>
    );
  }
}