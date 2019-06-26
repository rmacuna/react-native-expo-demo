import React, { Component } from 'react'
import {
    Text,
    View,
    Platform, 
    StyleSheet, 
    Keyboard, 
    TextInput, 
    SafeAreaView,
    TouchableWithoutFeedback
} from 'react-native';
import { COLOR_PRIMARY, COLOR_DARK, COLOR_DARK_PLACEHOLDER, COLOR_SECONDARY, COLOR_LIGHT } from '../../../constants/constants';
import NavyButton from './../../../components/UI/NavyButton/NavyButton';


export default class Searchscreen extends Component {
    state = {
        controls: {
            input: {
                value: "",
                placeholder: "Buscar",
                valid: true
            }
        }
    }

    constructor(props) {
        super(props);
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

    render() {
        return (
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                <View style={styles.container}>
                    <Text style={styles.superPlaceholder}>{this.state.controls.input.value}</Text>
                    <TextInput
                        style={styles.inputSearch}
                        placeholderTextColor="rgba(255,255,255,.5)"
                        onBlur={this._onBlurHandler}
                        onFocus={this._onFocusHandler}
                        onChangeText={(value) => this._onInputChangeHandler(value)}
                        value={this.state.controls.input.value}
                        placeholder={this.state.controls.input.placeholder} />
                    <NavyButton style={styles.buttonBottom} >Resultados de la busqueda</NavyButton>
                </View>
            </TouchableWithoutFeedback>

        )
    }
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLOR_SECONDARY,
        padding: 15,
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
        width: '80%',
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