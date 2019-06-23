import React, { Component } from 'react'
import { ActivityIndicator, StyleSheet, AsyncStorage, StatusBar, View } from 'react-native'

export default class AuthLoading extends Component {

    constructor(props){
        super(props);
        this._boostrapAsync();
    }

    _boostrapAsync = async () => {
        const userToken = await AsyncStorage.getItem('userToken');
        this.props.navigation.navigate(userToken ? 'App': 'Auth');
    }
    render() {
        return (
            <View style={styles.container}>
                <ActivityIndicator />
                <StatusBar barStyle="default" />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
