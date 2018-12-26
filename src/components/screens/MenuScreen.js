import React, {Component} from 'react';
import { Text, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Header from '../Header/HeaderMenu'

export default class MenuScreen extends Component {

    static navigationOptions = ({ navigation }) => {
        return {
          tabBarLabel: 'เมนู',
          tabBarIcon: ({ tintColor }) => (
            <Ionicons name="md-more" size={30} color={tintColor}/>
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
