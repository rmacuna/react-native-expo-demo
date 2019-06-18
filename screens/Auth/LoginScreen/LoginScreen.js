import React, { Component } from 'react';
import { View, Text, Image, Platform, TouchableOpacity, TouchableHighlight } from 'react-native';
import CustomInput from '../../../components/UI/CustomInput/CustomInput';
import PillButton from '../../../components/UI/Pillbutton/Pillbutton';
import { FontAwesome5 } from '@expo/vector-icons';
import styles from './LoginScreen.styles';
import NavyButton from './../../../components/UI/NavyButton/NavyButton';
import LoginHeader from '../../../components/Auth/LoginHeader/LoginHeader';
import LoginForm from '../../../components/Auth/LoginForm/LoginForm';


class LoginScreen extends Component {
    state = {
        controls: {
            username: {
                valid: false,
                value: "",
                validationRules: {
                    isEmail: false
                }
            },
            password: {
                valid: false,
                value: "",
                validationRules: {
                    minLength: 6
                }
            }
        }
    }
    _onCreateAccountHandler = () => {
        this.props.navigation.navigate('Register')
    }

    _onClickHandler = () => {
        alert('Pressed')
    }

    _onInputChangeHandler = (value, key) => {
        this.setState(prevState => {
            return {
                controls: {
                    ...prevState.controls,
                    [key]: {
                        ...prevState.controls[key],
                        value: value
                    }
                }
            }
        })
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.topBackgroundYellow}>
                    <LoginHeader />
                    <LoginForm
                        emailValue={this.state.controls.username.value}
                        passwordValue={this.state.controls.password.value}
                        onEmailChange={(value) => this._onInputChangeHandler(value, 'username')}
                        onPasswordChange={(value) => this._onInputChangeHandler(value, 'password')} />
                  
                  
                    <View style={styles.buttonMiddleWrapper} >
                        <PillButton

                            onPress={this._onClickHandler}
                            backgroundColor="#fff">Ingresar</PillButton>
                    </View>
                    <View style={styles.bottomFotterWrapper}>

                        <View style={styles.item}>
                            <TouchableOpacity
                                onPress={this._onCreateAccountHandler}>
                                <Text style={[styles.footerAction, { padding: 20, zIndex: 2 }]}>Crear una cuenta</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.lineSeparador}></View>
                        <View style={[styles.item, Platform.OS === 'android' ? { marginLeft: 20, zIndex: 2 } : null]}>
                            <TouchableOpacity>
                                <Text style={styles.footerAction}>Olvide la contraseña</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                    <FontAwesome5.Button
                        borderRadius={100}
                        name="facebook"
                        backgroundColor="#3b5998">
                        Login with Facebook
                        </FontAwesome5.Button>
                    {/* <Button title="Navigate" onPress={() => this.props.navigation.navigate('Register')} /> */}

                </View>

            </View>
        )
    }
}
export default LoginScreen;