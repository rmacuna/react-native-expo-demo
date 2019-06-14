import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-navigation';
import styles from './Category.styles';

export default class CateScreen extends Component {
    render() {
        return (
            <View>
                <SafeAreaView>
                    <Text>Categorias</Text>
                </SafeAreaView>
            </View>

        )
    }
}