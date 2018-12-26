import React, {Component} from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

import AisScreen from './src/components/screens/AisScreen'
import DtacScreen from './src/components/screens/DtacScreen'
import TrueScreen from './src/components/screens/TrueScreen'
import MenuScreen from './src/components/screens/MenuScreen'

const TabNavigator = createBottomTabNavigator({
  AIS: { 
    screen: AisScreen 
  },
  True: { 
    screen: TrueScreen 
  },
  dtac: { 
    screen: DtacScreen 
  },
  Menu: { 
    screen: MenuScreen
  }
}, {
  initialRouteName: 'Menu',
  tabBarOptions: {
    activeTintColor: 'rgb(63,80,187)',
    inactiveTintColor: 'gray',
    showLabel: false,
    labelStyle: {
      fontSize: 12,
    },
    indicatorStyle: {
      backgroundColor: 'transparent',
      borderTopColor: 'rgba(119,75,151,1)',
      borderTopWidth: 2
    },
    style: {
      //backgroundColor: 'rgb(91,153,236)',
    }
  }
});

export default createAppContainer(TabNavigator)


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });
