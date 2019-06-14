import React, { Component } from 'react';
import { Text, View, ImageBackground, Image } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import CategorySlider from './../../../components/Home/CategorySlider/CategorySlider';
import styles from './Homescreen.styles';
import Header from '../../../components/Home/Header/Header';
import Additems from '../../../components/Home/AddItems/Additems';

export default class Homescreen extends Component {

    _onPressButtonHandler = () => {
        alert('Your next pill is play :)')
    }

    // Función global para navegar de una ruta a otra.
    _onNavigateTo = route => this.props.navigator.navigate(route)

    render() {
        return (
            <View style={styles.mainWrapper}>
                <ImageBackground style={{ width: '100%', height: 560 }}
                    source={require('./../../../assets/images/homeSvgBackground.png')} >
                    <SafeAreaView>
                        <View style={styles.topContainer}>
                            <Header onNextPillPress={this._onPressButtonHandler}  />
                            <CategorySlider/>
                            <View style={styles.horizontalWrapper}>
                                <Text style={styles.inlineSubtitle}>Añadir</Text>
                            </View>
                            <Additems />
                        </View>
                    </SafeAreaView>
                </ImageBackground>
            </View>
        )
    }
}

