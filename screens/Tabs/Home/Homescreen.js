import React, { Component } from 'react';
import { Text, View, ImageBackground, Animated, Easing } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import CategorySlider from './../../../components/Home/CategorySlider/CategorySlider';
import styles from './Homescreen.styles';
import Header from '../../../components/Home/Header/Header';
import Additems from '../../../components/Home/AddItems/Additems';

class Homescreen extends Component {


    state = {
        animations: {
            circleInitialScale: new Animated.Value(0),
            itemsInitialOpacity: new Animated.Value(0)
        }
    }


    componentDidMount() {
        Animated.parallel([
            Animated.spring()
        ])
    }

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
                            <Additems 
                                initialScale={this.state.animations.circleInitialScale} />
                        </View>
                    </SafeAreaView>
                </ImageBackground>
            </View>
        )
    }
}

export default Homescreen

