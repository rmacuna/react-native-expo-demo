import React, { Component } from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';
class LoginScreen extends Component {

    constructor(props){
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Auth Screen.js</Text>
                <Button title="Go to register"
                    onPress={
                        () => this.props.navigation.navigate('Register')
                    } />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20
    }
})

export default LoginScreen;