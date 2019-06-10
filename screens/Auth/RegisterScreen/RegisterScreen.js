import React, { Component } from 'react'
import { Text, View, StyleSheet, TextInput } from 'react-native'

export default class RegisterScreen extends Component {
    render() {
        return (
            <View>
                <Text style={styles.textCustom}>Register Component</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    textCustom: {
        fontFamily: 'GorditaMedium'
    }
})