import React, { Component } from 'react'
import { Text, View, Platform, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-navigation';
import { COLOR_PRIMARY, COLOR_DARK, COLOR_DARK_PLACEHOLDER } from '../../../constants/constants';
import { TextInput } from 'react-native-gesture-handler';
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
            <View style={styles.container}>
                <Text>{this.state.controls.input.value}</Text>
                <TextInput
                    style={styles.inputSearch}
                    placeholderTextColor={COLOR_DARK_PLACEHOLDER}
                    onBlur={this._onBlurHandler}
                    onFocus={this._onFocusHandler}
                    onChangeText={(value) => this._onInputChangeHandler(value)}
                    value={this.state.controls.input.value}
                    placeholder={this.state.controls.input.placeholder} />
                <NavyButton style={styles.buttonBottom} >Resultados de la busqueda</NavyButton>
            </View>
        )
    }
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLOR_PRIMARY,
        padding: 25,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonBottom: {
        position: 'absolute',
        bottom: 25
    },
    inputSearch: {
        width: '80%',
        textAlign: 'center',
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