import React, {Component} from 'react';
import { BackHandler, View, ActivityIndicator} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class DtacScreen extends Component {

  componentDidMount() {
    // BackHandler.exitApp()
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }
}
