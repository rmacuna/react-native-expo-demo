import React, { Component } from 'react'
import {
    Text,
    View,
    StyleSheet,
    Image,
    ImageBackground
} from 'react-native'
import CustomInput from '../../../components/UI/CustomInput/CustomInput';
import Pillbutton from '../../../components/UI/Pillbutton/Pillbutton';
import styles from './RegisterScreen.styles';

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


    _registerHandler = () => {
        this.props.navigation.navigate('Home')
    }

    render() {
        return (
            <ImageBackground
                style={{ width: '100%', height: '100%'}}
                source={require('./../../../assets/images/background_waves.png')}>

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
                        onTextChange={this.state.controls.inputName}
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
                        onTextChange={this.state.controls.inputEmail}
                    />
                    <CustomInput
                        separation={45}
                        labelColor={{ color: 'rgba(254,254,254, .8)' }}
                        label="Contraseña"
                        secureTextEntry={true}
                        textColor={{ color: '#fff' }}
                        lineColor={{ backgroundColor: 'rgba(254,254,254, .8)' }}
                        style={styles.registerInput}
                        onTextChange={this.state.controls.inputPassword}
                    />
                    <CustomInput
                        separation={45}
                        labelColor={{ color: 'rgba(254,254,254, .8)' }}
                        label="Confirmar contraseña"
                        secureTextEntry={true}
                        textColor={{ color: '#fff' }}
                        lineColor={{ backgroundColor: 'rgba(254,254,254, .8)' }}
                        style={styles.registerInput}
                        onTextChange={this.state.controls.inputConfirmPass}
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
