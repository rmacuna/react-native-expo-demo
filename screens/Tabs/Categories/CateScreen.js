import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-navigation';
import { HOME_BACKGROUND_COLOR } from './../../../constants/constants';

export default class CateScreen extends Component {
    render() {
        return (
            <SafeAreaView>
                <Text>Categorias</Text>
            </SafeAreaView>

        )
    }
}

const styles = StyleSheet.create({
    topContainer: {
        width: '100%',
        paddingTop: 45,
    },
    horizontalWrapper: {
        width: '100%',
        paddingLeft: 40,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})