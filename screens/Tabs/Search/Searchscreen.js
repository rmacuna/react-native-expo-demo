import React, { Component } from 'react'
import {
    Text,
    View,
    StyleSheet,
    Keyboard,
    TextInput,
    StatusBar,
    Animated,
    TouchableWithoutFeedback
} from 'react-native';
import { COLOR_PRIMARY, COLOR_DARK, COLOR_DARK_PLACEHOLDER, COLOR_SECONDARY, COLOR_LIGHT } from '../../../constants/constants';
import NavyButton from './../../../components/UI/NavyButton/NavyButton';
import BigActionSheet from './../../../components/UI/BigActionSheet/BigActionSheet';
import { NavigationEvents } from 'react-navigation';

export default class Searchscreen extends Component {
    state = {
        controls: {
            input: {
                value: "",
                placeholder: "Buscar",
                valid: true
            }
        },
        isBigActionSheetVisible: false,
        initialFadePage: new Animated.Value(0),
        animatedY: new Animated.Value(700),
        foundedResults: [
            {
                key: "Uhyf",
                label: "Cita Con Urologo",
                image: { uri: 'https://encolombia.com/wp-content/uploads/2014/04/acetaminofen-urg-1.jpg' }
            }
        ]
    }

    constructor(props) {
        super(props);
    }


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

    closeBigActionSheet = () => {
        Animated.spring(this.state.animatedY, {
            toValue: 800,
            useNativeDriver: true
        }).start(() => {
            this.setState({
                isBigActionSheetVisible: false,
            })
        });

    }

    _onInputChangeHandler = (value) => {
        this.setState(prevState => {
            return {
                controls: {
                    input: {
                        ...prevState.controls.input,
                        value: value
                    }
                }
            }

        })
    }
    _onBlurHandler = () => {
        this.setState({
            controls: {
                input: {
                    ...this.state.controls.input,
                    placeholder: this.state.controls.input.value.trim().length !== 0 ? this.state.controls.input.value : "Buscar",
                }
            }
        })
    }
    _onFocusHandler = () => {
        this.setState({
            controls: {
                input: {
                    ...this.state.controls.input,
                    placeholder: ""
                }
            }
        })
    }


    openBigActionSheet = () => {
        Animated.spring(this.state.animatedY, {
            toValue: 0,
            useNativeDriver: true

        }).start();
        this.setState({
            isBigActionSheetVisible: true
        })
    }

    render() {
        return (
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>


                <View style={[styles.container]}>
                    <StatusBar backgroundColor={COLOR_SECONDARY} />
                    <NavigationEvents
                        onDidFocus={this.tooggleFade}
                        onDidBlur={this.hideScreen}
                    />
                    <Animated.View style={
                        [
                            {
                                width: '90%',
                                opacity: this.state.initialFadePage,
                            },
                            styles.container

                        ]} >
                        <Text style={styles.superPlaceholder}>{this.state.controls.input.value}</Text>
                        <TextInput
                            style={styles.inputSearch}
                            placeholderTextColor="rgba(255,255,255,.5)"
                            onBlur={this._onBlurHandler}
                            onFocus={this._onFocusHandler}
                            onChangeText={(value) => this._onInputChangeHandler(value)}
                            value={this.state.controls.input.value}
                             placeholder={this.state.controls.input.placeholder} />

                        <NavyButton
                            disabled={this.state.foundedResults.length === 0}
                            onPress={this.openBigActionSheet}
                            style={styles.buttonBottom}>Resultados de la busqueda</NavyButton>


                    </Animated.View>
                    <BigActionSheet
                        title="Resultados de la busqueda"
                        subtitle={this.state.controls.input.value}
                        data={this.state.foundedResults}
                        visible={this.state.isBigActionSheetVisible}
                        animation={this.state.animatedY}
                        onClose={this.closeBigActionSheet}
                    />
                </View>




            </TouchableWithoutFeedback>

        )
    }
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLOR_SECONDARY,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonBottom: {
        position: 'absolute',
        bottom: 25
    },
    superPlaceholder: {
        fontFamily: 'GorditaRegular',
        color: COLOR_LIGHT
    },
    inputSearch: {
        width: '100%',
        textAlign: 'center',
        color: COLOR_LIGHT,
        fontFamily: 'GorditaMedium',
        fontSize: 45,
        height: 100,
        maxHeight: 100
    },
    title: {
        fontSize: 18,
        fontFamily: 'GorditaMedium'
    },
    horizontalWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
})