import React, {Component} from 'react';
import { Text, View, Image} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Header from '../Header/Header'

export default class AisScreen extends Component {

    static navigationOptions = ({ navigation }) => {
        return {
            tabBarLabel: 'AIS',
            tabBarIcon: (
                <Image
                    source={require('../../assets/Ais-logo.png')}
                    style={{width: 65, height: 30}}
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
