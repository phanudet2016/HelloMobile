import React, {Component} from 'react';
import { Text, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { navigationOptions } from 'react-navigation';

export default class AisScreen extends Component {

    static navigationOptions = ({ navigation }) => {
        return {
          tabBarLabel: 'AIS',
          tabBarIcon: ({ tintColor }) => (
            <Ionicons name="md-close-circle" size={25} color={tintColor}/>
          )
        }
    };

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Ionicons name="md-close-circle" size={25} color="black"/>
            </View>
        );
    }
}
