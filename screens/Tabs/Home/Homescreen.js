import React, { Component } from 'react';
import {
    Text,
    View,
    ImageBackground,
    Animated,
    StatusBar
} from 'react-native';
import { SafeAreaView } from 'react-navigation';
import CategorySlider from './../../../components/Home/CategorySlider/CategorySlider';
import styles from './Homescreen.styles';
import Header from '../../../components/Home/Header/Header';
import Additems from '../../../components/Home/AddItems/Additems';
import { COLOR_SECONDARY } from './../../../constants/constants'
import ModalAction from './../../../components/Home/ModalAction/ModalAction';

class Homescreen extends Component {
    state = {
        showModalAction: false,
        currentAction: '',
        modalAction: null,
        animations: {
            circleInitialScale: new Animated.Value(0),
            itemsInitialOpacity: new Animated.Value(0)
        }
    }

    _onCardPress = type => {
        this.props.navigation.navigate('CheckPnD', { type: type })
    }


    _onPressItem = type => {
        switch (type) {
            case 0:
                this.setState({
                    modalAction: 0,
                    currentAction: 'Añadir pastilla',
                    showModalAction: true
                });
                break;
            case 1:
                this.setState({
                    modalAction: 1,
                    currentAction: 'Añadir cita',
                    showModalAction: true
                });
            case 2:
                this.setState({
                    modalAction: 2,
                    currentAction: 'Añadir categoria',
                    showModalAction: true
                });
        }
    }

    _onActionClosed = () => {
        console.log('closed!')
    }
    _onPressButtonHandler = () => {
        alert('Your next pill is play :)')
    }

    // Función global para navegar de una ruta a otra.
    _onNavigateTo = route => this.props.navigator.navigate(route)

    render() {
        return (
            <View style={styles.mainWrapper}>
                <StatusBar
                    barStyle="light-content"
                    backgroundColor={COLOR_SECONDARY} />
                <ImageBackground style={{ width: '100%', height: 560 }}
                    source={require('./../../../assets/images/homeSvgBackground.png')} >
                    <SafeAreaView>
                        <View style={styles.topContainer}>
                            <Header onNextPillPress={this._onPressButtonHandler} />
                            <CategorySlider
                                pillPress={() => this._onCardPress(0)}
                                datePress={() => this._onCardPress(1)}
                            />
                            <View style={styles.horizontalWrapper}>
                                <Text style={styles.inlineSubtitle}>Añadir</Text>
                            </View>
                            <Additems
                                onPressCat={() => this._onPressItem(2)}
                                onPressDate={() => this._onPressItem(1)}
                                onPressPill={() => this._onPressItem(0)}
                                initialScale={this.state.animations.circleInitialScale} />
                        </View>
                    </SafeAreaView>
                </ImageBackground>

                <ModalAction
                    headerTitle={this.state.currentAction}
                    type={this.state.modalAction}
                    active={this.state.showModalAction}
                    onItemClosed={this._onActionClosed} />
            </View>
        )
    }
}

export default Homescreen

