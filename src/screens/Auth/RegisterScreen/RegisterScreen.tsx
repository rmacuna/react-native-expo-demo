import React, { Component } from 'react'
import {
    Text,
    View,
    StyleSheet,
    Image,
    StatusBar,
    ImageBackground
} from 'react-native'
import CustomInput from '../../../components/UI/CustomInput/CustomInput';
import Pillbutton from '../../../components/UI/Pillbutton/Pillbutton';
import styles from './RegisterScreen.styles';
import { COLOR_SECONDARY } from '../../../constants/constants';

export default class RegisterScreen extends Component {


    state = {
        controls: {
            inputName: {
                value: "",
                valid: false,
                validationRules: {}
            },
            inputEmail: {
                value: "",
                valid: false,
                validationRules: {}
            },
            inputPassword: {
                value: "",
                valid: false,
                validationRules: {}
            },
            inputConfirmPass: {
                value: "",
                valid: false,
                validationRules: {}
            }
        }
    }


    _onInputChangeHandler = (value, key) => {
        this.setState({
            controls: {
                ...this.state.controls,
                [key]: {
                    ...this.state.controls[key],
                    value: value
                }
            }
        })
    }

    _registerHandler = () => {
        this.props.navigation.navigate('Home')
    }

    render() {
        return (

            <ImageBackground
                style={{ width: '100%', height: '100%' }}
                source={require('./../../../assets/images/background_waves.png')}>
                <StatusBar
                    barStyle="light-content"
                    backgroundColor={COLOR_SECONDARY} />
                {/* Primera sección */}
                <View style={styles.ImageAndTitleWrapper}>
                    <Text style={styles.title}>Crear una cuenta</Text>
                    <Image style={{ width: 80, height: 80 }} source={require('./../../../assets/images/pills.png')} />
                </View>

                {/* Segunda sección */}

                <View style={styles.inputsWrapper}>
                    <CustomInput
                        separation={45}
                        labelColor={{ color: 'rgba(254,254,254, .8)' }}
                        label="Nombre Completo"
                        autoCorrect={false}
                        textColor={{ color: '#fff' }}
                        lineColor={{ backgroundColor: 'rgba(254,254,254, .8)' }}
                        style={styles.registerInput}
                        value={this.state.controls.inputName.value}
                        onChangeText={(value) => this._onInputChangeHandler(value, 'inputName')}
                    />
                    <CustomInput
                        separation={45}
                        labelColor={{ color: 'rgba(254,254,254, .8)' }}
                        label="Correo electrónico"
                        autoCompleteType="email"
                        keyboardType="email-address"
                        textColor={{ color: '#fff' }}
                        lineColor={{ backgroundColor: 'rgba(254,254,254, .8)' }}
                        style={styles.registerInput}
                        value={this.state.controls.inputEmail.value}
                        onChangeText={(value) => this._onInputChangeHandler(value, 'inputEmail')}
                    />
                    <CustomInput
                        separation={45}
                        labelColor={{ color: 'rgba(254,254,254, .8)' }}
                        label="Contraseña"
                        secureTextEntry={true}
                        textColor={{ color: '#fff' }}
                        lineColor={{ backgroundColor: 'rgba(254,254,254, .8)' }}
                        style={styles.registerInput}
                        value={this.state.controls.inputPassword.value}
                        onChangeText={(value) => this._onInputChangeHandler(value, 'inputPassword')}
                    />
                    <CustomInput
                        separation={45}
                        labelColor={{ color: 'rgba(254,254,254, .8)' }}
                        label="Confirmar contraseña"
                        secureTextEntry={true}
                        textColor={{ color: '#fff' }}
                        lineColor={{ backgroundColor: 'rgba(254,254,254, .8)' }}
                        style={styles.registerInput}
                        value={this.state.controls.inputConfirmPass.value}
                        onChangeText={(value) => this._onInputChangeHandler(value, 'inputConfirmPass')}
                    />
                </View>

                <View style={styles.buttonWrapper}>
                    <Pillbutton
                        backgroundColor="#fff"
                        onPress={this._registerHandler}>
                        Registrarse
                    </Pillbutton>
                </View>



            </ImageBackground>
        )
    }
}
