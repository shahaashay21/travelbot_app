import React, { Component } from 'react';
import { View, AsyncStorage } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { EMAIL } from '../Config/Config';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Header } from 'react-native-elements';

class Profile extends Component {

    componentWillMount() {
        this.checkLoggedIn();
    }

    checkLoggedIn(){
        AsyncStorage.getItem(EMAIL).then(value => {
            if(value == null) {
                Actions.login();
            }
        });
    };

    onSettings(){
        Actions.settings();
    }

    render() {
        return (
            <View style={{flex: 1}}>
                    <Header
                        centerComponent={{ text: 'Profile', style: { color: '#000' } }}
                        rightComponent={
                            <Ionicons
                                raised
                                name='ios-settings'
                                type='Ionicons'
                                size={30}
                                containerStyle={{paddingLeft: 10, paddingRight: 10}}
                                onPress={this.onSettings.bind(this)}
                                style={{top: 5}}
                            />
                        }
                    />
            </View>
        );
    }
}

const styles = {
    settingsStyle: {
        alignItems: 'flex-end',
        marginTop: 30,
        marginRight: 20
    }
}

export default Profile;