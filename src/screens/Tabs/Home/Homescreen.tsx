import React, { Component } from 'react';
import {
    Text,
    View,
    ImageBackground,
    Animated,
    StatusBar
} from 'react-native';
import { SafeAreaView, NavigationEvents } from 'react-navigation';
import CategorySlider from '../../../components/Home/CategorySlider/CategorySlider';
import styles from './Homescreen.styles';
import Header from '../../../components/Home/Header/Header';
import Additems from '../../../components/Home/AddItems/Additems';
import { COLOR_SECONDARY } from '../../../constants/constants'
import ModalAction from '../../../components/Home/ModalAction/ModalAction';
import NavProps from './../../../interfaces/navigation';

class Homescreen extends Component<NavProps> {

    state = {
        showModalAction: false,
        currentAction: '',
        modalAction: null,
        initialFadePage: new Animated.Value(0),
        animations: {
            circleInitialScale: new Animated.Value(0),
            itemsInitialOpacity: new Animated.Value(0),
        }
    }


    _onCardPress = type => {
        this.props.navigation.navigate('CheckPnD', { type: type })
    }


    _onModalDismiss = () => {
        this.setState({
            showModalAction: false,
            currentAction: '',
        })
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
                break;
            case 2:
                this.setState({
                    modalAction: 2,
                    currentAction: 'Añadir categoria',
                    showModalAction: true
                });
                break;
            default:
                return
        }
    }

    _onActionClosed = () => {
        console.log('closed!')
    }
    _onPressButtonHandler = () => {
        alert('Your next pill is play :)')
    }

    // Función global para navegar de una ruta a otra.
    _onNavigateTo = route => this.props.navigation.navigate(route)

    tooggleFade = () => {
        Animated.timing(
            this.state.initialFadePage,
            {
                toValue: 1,
            }
        ).start()
    }

    hideScreen = () => {
        Animated.timing(
            this.state.initialFadePage,
            {
                toValue: 0,
            }
        ).start()
    }
    render() {

        

        return (

            <View style={styles.mainWrapper}>
                <NavigationEvents 
                    onDidFocus={this.tooggleFade}
                    onDidBlur={this.hideScreen}
                />
                <StatusBar
                    barStyle="light-content"
                    backgroundColor={COLOR_SECONDARY} />
                <ImageBackground style={{ width: '100%', height: 560 }}
                    source={require('./../../../assets/images/homeSvgBackground.png')} >
                    <SafeAreaView style={{ flex: 1 }}>
                        <Animated.View style={[styles.topContainer, { opacity: this.state.initialFadePage }]}>
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
                        </Animated.View>
                    </SafeAreaView>
                </ImageBackground>

                <ModalAction
                    modalClose={this._onModalDismiss}
                    headerTitle={this.state.currentAction}
                    type={this.state.modalAction}
                    active={this.state.showModalAction}
                    onItemClosed={this._onActionClosed} />
            </View>
        )
    }
}

export default Homescreen

