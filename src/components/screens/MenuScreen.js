import React, {Component} from 'react';
import { Text, View, Button, PermissionsAndroid  } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SendIntentAndroid from 'react-native-send-intent'

import Header from '../Header/HeaderMenu'

export default class MenuScreen extends Component {

    _makePhoneCall = async () => {
        try {
            const granted = await PermissionsAndroid.request (
                PermissionsAndroid.PERMISSIONS.CALL_PHONE
                // , {
                //     'title': 'App Call Phone Permission',
                //     'message': 'App needs access to your call phone feature'
                // }
              )
              if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                  SendIntentAndroid.sendPhoneCall('*121%23', true);
              } else {
                  console.log("Call Phone permission denied")
              }
        } catch (err) {
            console.warn(err)
        }
    }
    
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
                <View>
                    <Button
                    onPress={() => this._makePhoneCall()}
                    title='Check'
                    />
                </View>
            </View>
        );
    }
}
